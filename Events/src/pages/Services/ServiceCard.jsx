const ServiceCard = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 text-center
                 hover:shadow-lg transition"
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
        className="bg-black text-white px-5 py-2 rounded-md
                   hover:bg-gray-900 transition"
      >
        Learn more
      </button>
    </div>
  );
};

export default ServiceCard;
