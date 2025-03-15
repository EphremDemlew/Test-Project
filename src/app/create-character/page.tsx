"use client"

// import { ChevronLeft } from "lucide"
import { useCallback } from "react"


const CreateCharacter = () => {
    const handleSubmit = useCallback(() => {
        console.log("🚀 ~ handleSubmit ~ e",)

    }, [])
    return (


        <div className="flex flex-col gap-10 justify-start items-center p-20 relative">

            <div className="absolute left-10 top 10" onClick={() => window.history.back()}>
                {/* <ChevronLeft  /> */}
                <button className="bg-black px-5 py-3 text-white rounded hover:bg-gray-700 cursor-pointer">Back</button>

            </div>
            <h1 className="text-xl font-2xl">
                Add Character Infos
            </h1>

            <form className="flex flex-col gap-5 ">
                <input type="text" placeholder="Name" className="px-5 py-3 rounded border-1 border-gray-800 w-80" />
                <input type="text" placeholder="Species" className="px-5 py-3 rounded border-1 border-gray-800 w-80" />
                <input type="text" placeholder="Status" className="px-5 py-3 rounded border-1 border-gray-800 w-80" />
                <input type="text" placeholder="Image" className="px-5 py-3 rounded border-1 border-gray-800 w-80" />

                <button type="submit" onClick={() => handleSubmit} className="bg-black px-5 py-3 text-white rounded hover:bg-gray-700 cursor-pointer">Add</button>
            </form>

        </div>

    )
}

export default CreateCharacter