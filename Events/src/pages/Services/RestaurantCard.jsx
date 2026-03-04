import { Link } from "react-router-dom";

const RestaurantCard = ({ image, title, description }) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
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
          className="inline-block bg-black text-white px-4 py-2 rounded-md
                     hover:bg-gray-900 transition text-sm"
        >
          Book Now
        </Link>
      </div>
    </article>
  );
};

export default RestaurantCard;
