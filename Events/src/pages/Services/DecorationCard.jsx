import { Link } from "react-router-dom";

const DecorationCard = ({ image, title, description }) => {
  return (
    <article className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-600 mt-2 text-sm">
          {description}
        </p>

        <Link
          to="/booking"
          className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg
                     hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg"
        >
          Book Now
        </Link>
      </div>
    </article>
  );
};

export default DecorationCard;
