import Image from "next/image";

type CardProps = {
    character: {
        id: string;
        name: string;
        species: string;
        image: string;
        status: "Alive" | "Dead" | "unknown";
    };
};

const statusColorClasses = {
    Alive: "bg-emerald-500",
    Dead: "bg-rose-600",
    unknown: "bg-slate-500",
};

const Cards = ({ character }: CardProps) => {
    const statusClass = statusColorClasses[character.status];

    return (
        <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer w-[300px] h-[300px] group">
            <Image
                src={character.image || "/default-image.png"}
                alt={character.name}
                width={300}
                height={300}
                unoptimized
                className="object-cover w-full h-full group-hover:brightness-55 transition-all duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-xl font-bold">{character.name}</h2>
                <p className="text-sm text-gray-200">{character.species}</p>
            </div>
            <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${statusClass} border-2 border-white/90 shadow-lg group-hover:ring-4 group-hover:ring-white/20 transition-all duration-300`} />
        </div>
    );
};

export default Cards;