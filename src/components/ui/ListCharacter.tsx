"use client";

import Link from "next/link";
import { useGetDataInfinite } from "@/hooks/query";
import { useEffect, useState } from "react";
import { Character } from "@/gql/graphql";
import { useInView } from "react-intersection-observer";
import Skeleton from "@/components/ui/Skeleton";
import Cards from "@/components/ui/Card";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

const ListCharacter = () => {
    const {
        data,
        isError,
        isLoading,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useGetDataInfinite(0);

    const { ref, inView } = useInView();

    // Define the type for localCharacters as an array of Character
    const [localCharacters, setLocalCharacters] = useState<Character[]>([]);

    useEffect(() => {
        // Retrieve characters from localStorage and parse them as Character[]
        const storedCharacters = JSON.parse(localStorage.getItem("characters") || "[]") as Character[];
        setLocalCharacters(storedCharacters);
    }, []);

    // Trigger infinite scroll fetch when element comes into view
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    // Flatten all pages' results
    const apiCharacters = data?.pages.flatMap(page =>
        page.characters?.results || []
    ) || [];

    // Combine local and API characters
    const characters = [...localCharacters, ...apiCharacters];

    const handleDeleteLocalStorageImage = (id: string) => {
        const updatedLocalCharacters = localCharacters.filter((char) => char.id !== id);
        setLocalCharacters(updatedLocalCharacters);
        localStorage.setItem("characters", JSON.stringify(updatedLocalCharacters));
    };

    if (isLoading) {
        return (
            <div className="flex flex-col justify-start items-center py-20 gap-10 relative min-h-screen bg-gray-50 p-10">
                <h1 className="text-4xl font-bold text-gray-900">Characters</h1>
                <Skeleton />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="text-2xl text-red-500">Something went wrong.</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-start items-center py-20 gap-10 relative min-h-screen bg-gray-900">
            <h1 className="text-4xl font-bold text-white">Characters</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full px-4 pb-44 place-items-center place-content-center">
                {characters.map((character) => {
                    // Skip rendering if character is null or undefined
                    if (!character) return null;

                    return (
                        <div key={character.id} className="relative group">
                            <Cards
                                character={{
                                    id: character.id || "",
                                    name: character.name || "Unknown",
                                    species: character.species || "Unknown",
                                    image: character.image || "",
                                    status: (character.status as "unknown" | "Alive" | "Dead") || "unknown",
                                }}
                            />

                            {localCharacters.some((char) => char.id === character.id) && (
                                <button
                                    onClick={() => handleDeleteLocalStorageImage(character.id as string)}
                                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
                                >
                                    <FaRegTrashAlt className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Infinite scroll trigger */}
            <div ref={ref} className="flex flex-col items-center space-y-4 absolute bottom-16">
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                    className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 disabled:bg-gray-400 transition-all duration-200 cursor-pointer font-medium"
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'No more characters'}
                </button>
                {isFetching && !isFetchingNextPage && (
                    <p className="text-sm text-gray-400">Loading initial data...</p>
                )}
            </div>

            <Link
                href="/create-character"
                className="fixed right-5 top-5 px-6 py-3 bg-white text-black rounded-lg text-center shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out flex items-center gap-2"
            >
                <FaPlus size={16} className="text-purple-800" />
                Add Character
            </Link>
        </div>
    );
};

export default ListCharacter;