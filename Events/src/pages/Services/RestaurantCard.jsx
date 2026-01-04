import { Link } from "react-router-dom";

const RestaurantCard = ({ image, title, description }) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-4">
          {description}
        </p>

        <Link
          to="/booking"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg
                     hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg"
        >
          Book Now
        </Link>
      </div>
    </article>
  );
};

export default RestaurantCard;
