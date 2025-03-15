import Image from "next/image";

type CardProps = {
    character: {
        id: string;
        name: string;
        species: string;
        image: string;
    };
};

const Cards = ({ character }: CardProps) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <div className="relative overflow-hidden rounded-t-lg">
                <Image
                    src={character.image || "/default-image.png"}
                    alt={character.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-48 bg-contain"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{character.name}</h2>
                <p className="text-sm text-gray-600">{character.species}</p>
            </div>
        </div>
    );
};

export default Cards;
