"use client"
import Cards from "@/components/cards"
import Link from "next/link"
import { useGetCharacters } from "@/hooks/query"
const Create = () => {

    const { data, isLoading, isError } = useGetCharacters()
    console.log("🚀 ~ Create ~ data, isLoading, isError:", data, isLoading, isError)

    return (
        <div className="flex flex-col justify-start items-center py-20 gap-10 relative h-[100vh]">
            <h1 className="text-4xl font-bold">Characters</h1>

            <div className="grid grid-1 md:grid-2 xl:grid-3 gap-10">
                <Cards />
            </div>
            <Link href={"/create-character"} className="absolute right-5 bottom-5 px-2 py-3 bg-black rounded text-white text-center">Add Characters</Link>
        </div>
    )
}


export default Create