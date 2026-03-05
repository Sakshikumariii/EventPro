// import { useEffect, useState } from "react";
// import axiosApi from "../../services/api/axiosApi";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);

//   const ITEMS_PER_PAGE = 10;

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axiosApi.get("/events");
//         setEvents(res.data);
//       } catch (error) {
//         console.error("Failed to fetch events", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);

//   const paginatedEvents = events.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   if (loading) {
//     return <p className="text-center mt-10">Loading events...</p>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8">
//       <h1 className="text-3xl font-bold mb-6">All Events</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {paginatedEvents.map((event) => (
//           <div key={event.id} className="border rounded-lg shadow-sm overflow-hidden">
//             <div className="h-60 w-full overflow-hidden">
//               <img
//                 src={event.imageUrl}
//                 alt={event.title}
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             <div className="p-4">
//               <h2 className="font-semibold text-lg">{event.title}</h2>
//               <p className="text-sm text-gray-500">
//                 {event.state} • {event.type}
//               </p>
//               <p className="mt-2 font-medium">₹{event.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div className="flex justify-center gap-3 mt-8">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((p) => p - 1)}
//             className="px-4 py-2 border rounded disabled:opacity-50"
//           >
//             Prev
//           </button>

//           <span className="px-4 py-2">
//             Page {currentPage} of {totalPages}
//           </span>

//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((p) => p + 1)}
//             className="px-4 py-2 border rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;


import EventCard from "../../components/events/EventCard";
import EventsFilters from "../../components/events/EventsFilters";
import EventsPagination from "../../components/events/EventsPagination";
import { useEvents } from "../../hooks/useEvents";

const Events = () => {
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
    <section className="py-10 md:py-14 bg-gray-50 min-h-screen">
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
                <div className="h-40 w-full bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="mt-10 text-center">
            <p className="text-red-600 text-sm md:text-base">{error}</p>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm md:text-base">
              No events found. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
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