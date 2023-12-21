/* eslint-disable react/prop-types */
import errorImage from "../assets/images/error.png";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <img
        src={errorImage}
        alt="Error"
        className="w-1/2 md:w-1/3 lg:w-1/4 h-auto mb-4"
      />
      <p className="text-lg font-semibold">{message}</p>
    </div>
  );
};

export default ErrorMessage;
