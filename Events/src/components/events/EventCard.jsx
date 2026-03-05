const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <div className="h-56 w-full overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg text-gray-900 truncate">
          {event.title}
        </h2>
        <p className="text-sm text-gray-500">
          {event.location}, {event.state} • {event.type}
        </p>
        <p className="text-sm text-gray-600">
          Date: <span className="font-medium">{event.date}</span>
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-indigo-600 font-semibold">
            ₹{event.price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
            ⭐ {event.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

