import { PRICING_LIST } from "../../constants/constant";
import useAOS from "../../hooks/useAOS";
import PriceCard from "./PriceCard";
import SectionGrid from "../../components/ui/SectionGrid";

const Price = () => {
  useAOS({ duration: 1000 });

  return (
    <SectionGrid
      id="pricing"
      title="Pricing"
      gridClassName="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {PRICING_LIST.map((item) => (
        <PriceCard
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </SectionGrid>
  );
};

export default Price;
