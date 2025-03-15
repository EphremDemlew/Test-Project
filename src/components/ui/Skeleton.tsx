const Skeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full px-4 place-items-center place-content-center">
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="relative bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden w-full max-w-[300px] h-[300px] animate-pulse"
                >
                    {/* Image Skeleton */}
                    <div className="relative h-3/4 bg-gray-700"></div>

                    {/* Content Skeleton */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                        <div className="bg-gray-700 h-6 w-3/4 rounded mb-2"></div>
                        <div className="bg-gray-700 h-4 w-1/2 rounded"></div>
                    </div>

                    {/* Status Skeleton */}
                    <div className="absolute top-4 right-4 bg-gray-700 w-5 h-5 rounded-full"></div>
                </div>
            ))}
        </div>
    );
};

export default Skeleton;