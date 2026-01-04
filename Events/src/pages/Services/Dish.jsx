import { DISHES } from "../../constants/constant";
import DishCard from "./DishCard";
import SectionTitle from "../../components/ui/SectionTitle";



const Dish = () => {
  return (
    <section id="dishes" className=" bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle highlight="Dishes" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish) => (
            <DishCard
              key={dish.id}
              image={dish.image}
              title={dish.title}
              description={dish.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Dish;
