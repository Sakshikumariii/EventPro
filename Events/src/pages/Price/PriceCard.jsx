import { Link } from "react-router-dom";

const PriceCard = ({ image, title, description, price }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-4">
          {description}
        </p>

        <h6 className="mb-4 font-medium text-gray-900 dark:text-white">
          Price: <span className="font-bold text-primary-600 dark:text-primary-400">{price}</span>
        </h6>

        <Link
          to="/booking"
          className="inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2 rounded-md
                     hover:bg-gray-800 dark:hover:bg-gray-200 transition text-sm font-medium"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
