
import { RESTAURANTS } from "../../constants/constant";
import RestaurantCard from "./RestaurantCard";
import SectionTitle from "../../components/ui/SectionTitle";


const Restaurant = () => {
  return (
    <section id="restaurants" className=" bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle highlight="Affordable Resorts" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {RESTAURANTS.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              image={restaurant.image}
              title={restaurant.title}
              description={restaurant.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
