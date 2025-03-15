"use client";
import Cards from "@/components/cards";
import Link from "next/link";
import { useGetData } from "@/hooks/query";
import { useEffect, useState } from "react";
import { Character } from "@/gql/graphql";

const Create = () => {
    const { data, isLoading, isError } = useGetData();
    console.log("🚀 ~ Create ~ data:", data)
    const [localCharacters, setLocalCharacters] = useState<any[]>([]);

    useEffect(() => {
        // Retrieve the characters from localStorage if available
        const storedCharacters = JSON.parse(localStorage.getItem("characters") || "[]");
        setLocalCharacters(storedCharacters);
    }, []);

    // Merge localStorage characters first, followed by API data
    const characters = [...localCharacters, ...(data?.characters?.results || [])];

    const handleDeleteLocalStorageImage = (id: string) => {
        // Remove a specific character from localStorage
        const updatedLocalCharacters = localCharacters.filter((char: Character) => char.id !== id);
        setLocalCharacters(updatedLocalCharacters);

        // Update localStorage to reflect the changes
        localStorage.setItem("characters", JSON.stringify(updatedLocalCharacters));
    };

    if (isLoading) {
        return (
            <div className="flex flex-col justify-start items-center py-20 gap-10 relative min-h-screen bg-gray-50 p-10">
                <h1 className="text-4xl font-bold text-gray-900">Characters</h1>

                {/* Placeholder cards with shimmer effect */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full px-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-lg shadow-md animate-pulse hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <div className="relative overflow-hidden rounded-t-lg bg-gray-300 h-48"></div>
                            <div className="p-4">
                                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
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
        <div className="flex flex-col justify-start items-center py-20 gap-10 relative max-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-900">Characters</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full px-4 pb-44">
                {characters.map((character: Character) => (
                    <div key={character?.id} className="relative group">
                        <Cards
                            character={{
                                id: character?.id || "",
                                name: character?.name || "Unknown",
                                species: character?.species || "Unknown",
                                image: character?.image || "",
                                // Ensure status is either "unknown", "active", or "dead"
                                status: (character?.status as "unknown" | "Alive" | "Dead") || "unknown",
                            }}
                        />


                        {localCharacters.some((char: Character) => char.id === character.id) && (
                            <button
                                onClick={() => handleDeleteLocalStorageImage((character.id) as string)}
                                className="absolute top-2 right-2 bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <Link
                href="/create-character"
                className="absolute right-5 top-5 px-6 py-3 bg-black rounded-lg text-white text-center shadow-lg hover:bg-gray-800 transition-all duration-300 ease-in-out"
            >
                Add Character
            </Link>
        </div>
    );
};

export default Create;
