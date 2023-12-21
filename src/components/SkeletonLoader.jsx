const SkeletonLoader = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <div className="w-full h-40 bg-gray-300 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse mb-1"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
