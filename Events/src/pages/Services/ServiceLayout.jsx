import { Outlet } from "react-router-dom";

const ServiceLayout = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </section>
  );
};

export default ServiceLayout;
