"use client"
import Image from "next/image"


const Cards = () => {
    return (
        <>
            <div className="flex flex-col border-1 border-gray-300 shadow-sm hover:shadow-2xl rounded justify-between min-w-44 h-auto cursor-pointer absolute">
                <span className="absolute right-2 top-2 bg-green-500 rounded-full animate-ping  h-2 w-2 z-50" />
                <Image src={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"} width={350} height={350} alt="profilePic.jpg" />
                <div className="flex justify-between items-center px-4 py-5">
                    <div className="flex flex-col justify-start font-semibold">
                        <h1 className="text-black">Rick Sanchez</h1>
                        <h2 className="text-gray-700 text-sm">Human</h2>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards