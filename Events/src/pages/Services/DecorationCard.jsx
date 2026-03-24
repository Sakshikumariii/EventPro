import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DecorationCard = ({ image, title, description }) => {
  const { t } = useTranslation();
  return (
    <article className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
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
          className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-md
                     hover:bg-gray-900 transition text-sm"
        >
          {t('book_now')}
        </Link>
      </div>
    </article>
  );
};

export default DecorationCard;
