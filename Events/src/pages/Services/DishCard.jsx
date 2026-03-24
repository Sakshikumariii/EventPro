import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DishCard = ({ image, title, description }) => {
  const { t } = useTranslation();
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
          {description}
        </p>

        <Link
          to="/booking"
          className="mt-4 inline-block bg-black text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-md
                     hover:bg-gray-900 dark:hover:bg-gray-200 transition text-sm font-medium"
        >
          {t('book_now')}
        </Link>
      </div>
    </article>
  );
};

export default DishCard;
