const GalleryCard = ({ image }) => {
  return (
    <div
      data-aos="fade-up"
      className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      <img
        src={image}
        alt="Gallery"
        className="w-full h-60 object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default GalleryCard;
