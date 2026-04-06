const GalleryCard = ({ image }) => {
  return (
    <div
      data-aos="fade-up"
      className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
    >
      <img
        src={image}
        alt="Gallery"
        className="w-full h-60 object-cover hover:scale-105 transition duration-300"
      />
    </div>
  );
};

export default GalleryCard;
