import { Link } from "react-router-dom";

const RestaurantCard = ({ image, title, description }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-4">
          {description}
        </p>

        <Link
          to="/booking"
          className="inline-block bg-black text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-md
                     hover:bg-gray-900 dark:hover:bg-gray-200 transition text-sm font-medium"
        >
          Book Now
        </Link>
      </div>
    </article>
  );
};

export default RestaurantCard;
