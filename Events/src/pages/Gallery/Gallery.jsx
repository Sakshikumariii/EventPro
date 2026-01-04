import { GALLERY_IMAGES } from "../../constants/constant";
import useAOS from "../../hooks/useAOS";
import GalleryCard from "./GalleryCard";
import SectionTitle from "../../components/ui/SectionTitle";

const Gallery = () => {
  useAOS({ duration: 1000 });

  return (
    <section id="gallery" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle highlight="Gallery" />
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryCard key={index} image={image} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
