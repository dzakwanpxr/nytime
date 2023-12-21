import notFound from "../assets/images/notFound.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-4">
      <img
        src={notFound}
        alt="Error"
        className="w-1/2 md:w-1/3 lg:w-1/4 h-auto"
      />
      <p className="text-lg font-semibold">No articles found.</p>
    </div>
  );
};

export default NotFound;
