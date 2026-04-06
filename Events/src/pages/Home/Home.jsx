// import { Link } from "react-router-dom";
// import HeroSlider from "../../components/ui/HeroSlider";
// import slide from "../../assets/image.png";

// const Home = () => {
//   const heroImages = [slide];

//   return (
//     <section className="relative h-screen overflow-hidden flex items-center justify-center">
//       <HeroSlider images={heroImages} />

//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
//           Welcome to Event world
//         </h1>

//         <h2 className="text-2xl md:text-3xl font-medium text-black mb-8">
//           We organize
//           <span className="change-content"></span>
//         </h2>

//         <Link
//           to="/booking"
//           className="inline-block bg-black text-white px-8 py-3 rounded-md
//                      hover:bg-gray-900 transition font-medium"
//         >
//           Book Now
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Home;


import { Link } from "react-router-dom";
import HeroSlider from "../../components/ui/HeroSlider";
import slide from "../../assets/image.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const heroImages = [slide];
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <HeroSlider images={heroImages} />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {t('welcome_title')}
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-8">
          {t('welcome_desc')}
        </h2>

        <Link
          to="/booking"
          className="inline-block px-8 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition"
        >
          {t('book_now')}
        </Link>
      </div>
    </section>
  );
};

export default Home;
