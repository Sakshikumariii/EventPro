import { useTranslation } from "react-i18next";

const ServiceCard = ({ icon, title, description, onClick }) => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <i className={`${icon} text-4xl text-gray-900 dark:text-white mb-4`} />

      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
        {description}
      </p>

      {/* ✅ NAVIGATION HERE */}
      <button
        onClick={onClick}
        className="px-5 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition"
      >
        {t('learn_more')}
      </button>
    </div>
  );
};

export default ServiceCard;
