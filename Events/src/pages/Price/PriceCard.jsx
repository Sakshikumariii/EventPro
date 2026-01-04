import { Link } from "react-router-dom";

const PriceCard = ({ image, title, description, price }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-4">
          {description}
        </p>

        <h6 className="mb-4 font-medium">
          Price: <span className="font-bold">{price}</span>
        </h6>

        <Link
          to="/booking"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg
                     hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
