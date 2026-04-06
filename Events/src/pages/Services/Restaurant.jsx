import { RESTAURANTS } from "../../constants/services.constants";
import RestaurantCard from "./RestaurantCard";
import { useTranslation } from "react-i18next";
import SectionGrid from "../../components/ui/SectionGrid";

const Restaurant = () => {
  const { t } = useTranslation();

  return (
    <SectionGrid id="restaurants" title={t("affordable_resorts")}>
      {RESTAURANTS.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          image={restaurant.image}
          title={restaurant.title}
          description={restaurant.description}
        />
      ))}
    </SectionGrid>
  );
};

export default Restaurant;
