import { PRICING_LIST } from "../../constants/constant";
import useAOS from "../../hooks/useAOS";
import PriceCard from "./PriceCard";
import SectionTitle from "../../components/ui/SectionTitle";

const Price = () => {
  useAOS({ duration: 1000 });

  return (
    <section id="pricing" className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle highlight="Pricing" />
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_LIST.map((item) => (
            <PriceCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Price;
