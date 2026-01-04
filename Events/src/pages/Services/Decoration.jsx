import { DECORATIONS } from "../../constants/constant";
import DecorationCard from "./DecorationCard";
import SectionTitle from "../../components/ui/SectionTitle";

const Decoration = () => {
  return (
    <section id="decorations" className=" bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle highlight="Decorations" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DECORATIONS.map((item) => (
            <DecorationCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Decoration;
