const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-900 dark:text-white">
          {title}
        </h4>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <button className="bg-black text-white dark:bg-white dark:text-gray-900 px-4 py-2 rounded-md
                           hover:bg-gray-900 dark:hover:bg-gray-200 transition text-sm font-medium">
          Read more
        </button>
      </div>

    </div>
  );
};

export default BlogCard;
