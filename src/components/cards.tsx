import Image from "next/image";

type CardProps = {
    character: {
        id: string;
        name: string;
        species: string;
        image: string;
        status: "Alive" | "Dead" | "unknown"; // Ensure status is one of these three
    };
};

// Pulsing animation for status
const statusColorClasses = {
    Alive: "bg-green-500 animate-pulse z-50",
    Dead: "bg-red-500 animate-pulse z-50",
    unknown: "bg-gray-800 animate-pulse z-50",
};

const Cards = ({ character }: CardProps) => {

    const statusClass = statusColorClasses[character.status];

    return (
        <div className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer h-96">
            <div className="relative overflow-hidden rounded-t-lg h-9/12">
                <Image
                    src={character.image || "/default-image.png"}
                    alt={character.name}
                    width={350}
                    height={350}
                    className="object-cover w-full h-full bg-contain"
                />
            </div>
            <div className="p-5 h-2/5">
                <h2 className="text-xl font-semibold text-gray-800">{character.name}</h2>
                <p className="text-sm text-gray-600">{character.species}</p>
            </div>

            <div
                className={`${statusClass} absolute top-2 right-2 rounded-full w-4 h-4 `}
            ></div>
        </div>
    );
};

export default Cards;
