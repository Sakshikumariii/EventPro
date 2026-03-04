import { Link } from "react-router-dom";

const DishCard = ({ image, title, description }) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
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
          className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-md
                     hover:bg-gray-900 transition text-sm"
        >
          Book Now
        </Link>
      </div>
    </article>
  );
};

export default DishCard;
