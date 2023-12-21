/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import defaultImage from "../assets/images/noImage.png";

const CardArticle = ({ article }) => {
  const { headline, snippet, byline, pub_date, web_url, multimedia } = article;

  return (
    <a
      href={web_url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col cursor-pointer transition duration-300 transform hover:scale-105"
    >
      {multimedia && multimedia.length > 0 ? (
        <img
          src={`https://www.nytimes.com/${multimedia[0].url}`}
          alt={headline.main}
          className="w-full h-40 object-cover"
        />
      ) : (
        <img
          src={defaultImage}
          alt="No Image Available"
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{headline.main}</h2>
        <p className="text-gray-500 mb-1">{byline.original}</p>
        <p className="text-gray-500 text-sm mb-2">
          {dayjs(pub_date).format("MMMM D, YYYY")}
        </p>
        <p className="text-gray-600 line-clamp-3">{snippet}</p>
      </div>
    </a>
  );
};

export default CardArticle;
