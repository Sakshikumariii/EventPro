import { GALLERY_IMAGES } from "../../constants/constant";
import useAOS from "../../hooks/useAOS";
import GalleryCard from "./GalleryCard";
import SectionGrid from "../../components/ui/SectionGrid";

const Gallery = () => {
  useAOS({ duration: 1000 });

  return (
    <SectionGrid
      id="gallery"
      title="Gallery"
      gridClassName="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {GALLERY_IMAGES.map((image, index) => (
        <GalleryCard key={index} image={image} />
      ))}
    </SectionGrid>
  );
};

export default Gallery;
