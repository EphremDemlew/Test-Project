"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
// import { Link } from "lucide";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";


const CreateCharacter = () => {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();

    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const newCharacter = { name, species, status, image };

            try {
                // Example API call (replace with real API call)
                // await api.addCharacter(newCharacter);

                // Save the new character in localStorage
                const storedCharacters = JSON.parse(localStorage.getItem("characters") || "[]");
                storedCharacters.push(newCharacter);
                localStorage.setItem("characters", JSON.stringify(storedCharacters));

                // Redirect to the home page after adding the character
                router.push("/");
            } catch (error) {
                console.error("Error adding character:", error);
                alert("Failed to add character.");
            }
        },
        [name, species, status, image, router]
    );

    return (
        <div className="flex flex-col gap-10 justify-start items-center p-10 md:p-20 relative bg-gray-900 min-h-screen">
            <div className="absolute left-20 top-10">

                <Link
                    href={"/characters"}
                    className="fixed right-5 top-5 px-6 py-3 bg-white text-black rounded-lg text-center shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out flex items-center gap-2"
                >
                    <IoIosArrowBack size={16} className="text-purple-800" />
                    Back
                </Link>
            </div>

            <h1 className="text-3xl font-semibold text-white">Add Character Information</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-gray-300">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter character name"
                        className="px-5 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="species" className="text-gray-300">Species</label>
                    <input
                        id="species"
                        type="text"
                        value={species}
                        onChange={(e) => setSpecies(e.target.value)}
                        placeholder="Enter species"
                        className="px-5 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="status" className="text-gray-300">Status</label>
                    <input
                        id="status"
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        placeholder="Enter status"
                        className="px-5 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="image" className="text-gray-300">Image URL</label>
                    <input
                        id="image"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter image URL"
                        className="px-5 py-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-white px-5 py-3 text-black rounded-lg hover:bg-gray-200 transition duration-300 mt-5 shadow-md cursor-pointer"
                >
                    Add Character
                </button>
            </form>
        </div>
    );
};

export default CreateCharacter;