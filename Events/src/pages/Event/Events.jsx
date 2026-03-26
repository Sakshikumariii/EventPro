import EventCard from "../../components/events/EventCard";
import EventsFilters from "../../components/events/EventsFilters";
import EventsPagination from "../../components/events/EventsPagination";
import { useEvents } from "../../hooks/useEvents";
import { useTranslation } from "react-i18next";
import { getEventId } from "../../utils/eventUtils";

const Events = () => {
  const { t } = useTranslation();
  const {
    loading,
    error,
    filters,
    events,
    totalPages,
    currentPage,
    totalFiltered,
    onFilterChange,
    onClearFilters,
    onPageChange,
  } = useEvents();

  return (
    <section className="py-10 md:py-14 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EventsFilters
          filters={filters}
          onChange={onFilterChange}
          onClear={onClearFilters}
          resultsCount={totalFiltered}
        />

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md border border-gray-100 animate-pulse h-72"
              >
                <div className="h-40 w-full bg-gray-200 dark:bg-gray-700" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="mt-10 text-center">
            <p className="text-red-600 dark:text-red-400 text-sm md:text-base">{error}</p>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="mt-10 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              {t('no_events_found')}
            </p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={getEventId(event)} event={event} />
              ))}
            </div>

            <EventsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Events;