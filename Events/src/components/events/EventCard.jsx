import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EventCard = ({ event }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800">
      <div className="h-56 w-full overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Link to={`/events/${event.id || event._id}`}>
          <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100 truncate hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {event.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {event.location}, {event.state} • {event.type}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t('date')}: <span className="font-medium text-gray-900 dark:text-gray-200">{event.date}</span>
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-primary-600 dark:text-primary-400 font-semibold">
            ₹{event.price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-secondary-50 dark:bg-secondary-900 dark:bg-opacity-40 text-secondary-700 dark:text-secondary-300 border border-secondary-100 dark:border-secondary-800">
            ⭐ {event.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

