import { Link } from "react-router-dom";
import MediaCard from "../../components/ui/MediaCard";

const PriceCard = ({ image, title, description, price }) => {
  return (
    <div data-aos="fade-up">
      <MediaCard
        image={image}
        title={title}
        description={description}
        bodyClassName="p-6"
        descriptionClassName="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-4"
        footer={
          <h6 className="mb-4 font-medium text-gray-900 dark:text-white">
            Price:{" "}
            <span className="font-bold text-primary-600 dark:text-primary-400">
              {price}
            </span>
          </h6>
        }
        action={
          <Link
            to="/booking"
            className="inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition text-sm font-medium"
          >
            Book Now
          </Link>
        }
      />
    </div>
  );
};

export default PriceCard;
