const BlogCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      
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

        <button className="bg-black text-white px-4 py-2 rounded-md
                           hover:bg-gray-900 transition text-sm">
          Read more
        </button>
      </div>

    </div>
  );
};

export default BlogCard;
