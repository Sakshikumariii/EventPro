import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { eventsService } from "../../services/api/eventsService";
import { formatEventPrice, getEventId } from "../../utils/eventUtils";

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadFeaturedEvents = async () => {
      try {
        const response = await eventsService.getEvents();
        if (!isMounted) return;
        const featured = response.slice(0, 3);
        setEvents(featured);
        setError("");
      } catch (error) {
        if (isMounted) {
          setEvents([]);
          setError("Unable to load featured events.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadFeaturedEvents();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Featured Events
          </h2>
          <Link
            to="/events"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            View all events
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-64 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const eventId = getEventId(event);
              return (
                <Link
                  key={eventId}
                  to={`/events/${eventId}`}
                  className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 hover:shadow-md transition-shadow"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 truncate">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {event.location}, {event.state}
                    </p>
                    <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {formatEventPrice(event.price)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedEvents;
