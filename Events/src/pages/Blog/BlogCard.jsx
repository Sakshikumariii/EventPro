const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2 line-clamp-2">
          {title}
        </h4>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg
                           hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg">
          Read more
        </button>
      </div>

    </div>
  );
};

export default BlogCard;
