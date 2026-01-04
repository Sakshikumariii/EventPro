import Slider from "react-slick";

const HeroSlider = ({ images }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="absolute inset-0 z-0">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Slider>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default HeroSlider;
