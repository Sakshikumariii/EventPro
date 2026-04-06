import { DISHES } from "../../constants/services.constants";
import DishCard from "./DishCard";
import { useTranslation } from "react-i18next";
import SectionGrid from "../../components/ui/SectionGrid";

const Dish = () => {
  const { t } = useTranslation();

  return (
    <SectionGrid id="dishes" title={t("dishes")}>
      {DISHES.map((dish) => (
        <DishCard
          key={dish.id}
          image={dish.image}
          title={dish.title}
          description={dish.description}
        />
      ))}
    </SectionGrid>
  );
};

export default Dish;
