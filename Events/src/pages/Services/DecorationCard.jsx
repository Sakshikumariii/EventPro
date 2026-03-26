import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MediaCard from "../../components/ui/MediaCard";

const DecorationCard = ({ image, title, description }) => {
  const { t } = useTranslation();

  return (
    <MediaCard
      image={image}
      title={title}
      description={description}
      titleTag="h2"
      descriptionClassName="text-gray-600 dark:text-gray-300 mt-2 text-sm"
      action={
        <Link
          to="/booking"
          className="mt-4 inline-block bg-black text-white dark:bg-white dark:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-900 dark:hover:bg-gray-200 transition text-sm"
        >
          {t("book_now")}
        </Link>
      }
    />
  );
};

export default DecorationCard;
