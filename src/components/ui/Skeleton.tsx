const Skeleton = () => {

    return (

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

    )
}

export default Skeleton