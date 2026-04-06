import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MediaCard from "../../components/ui/MediaCard";

const RestaurantCard = ({ image, title, description }) => {
  const { t } = useTranslation();

  return (
    <MediaCard
      image={image}
      title={title}
      description={description}
      descriptionClassName="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-4"
      action={
        <Link
          to="/booking"
          className="inline-block bg-black text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 dark:hover:bg-gray-200 transition text-sm font-medium"
        >
          {t("book_now")}
        </Link>
      }
    />
  );
};

export default RestaurantCard;
