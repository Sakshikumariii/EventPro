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

const Home = () => {
  const heroImages = [slide];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <HeroSlider images={heroImages} />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          Welcome to Event World
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-black mb-8">
          We organize unforgettable events
        </h2>

        <Link
          to="/booking"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
