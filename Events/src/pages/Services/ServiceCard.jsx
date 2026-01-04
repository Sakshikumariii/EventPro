const ServiceCard = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 text-center
                 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      <i className={`${icon} text-4xl text-black mb-4`} />

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-6">
        {description}
      </p>

      {/* ✅ NAVIGATION HERE */}
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg
                   hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg"
      >
        Learn more
      </button>
    </div>
  );
};

export default ServiceCard;
