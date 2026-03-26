import Home from "../../pages/Home/Home";
import About from "../../pages/Home/About";
import Booking from "../../pages/Booking/Booking";
import Blog from "../../pages/Blog/Blog";
import Gallery from "../../pages/Gallery/Gallery";
import Contact from "../../pages/Contact/Contact";
import Stats from "../home/Stats";
import HowItWorks from "../home/HowItWorks";
import Testimonials from "../home/Testimonials";
import FeaturedEvents from "../home/FeaturedEvents";

const LandingPage = () => {
  return (
    <>
      <Home />
      <Stats />
      <About />
      <HowItWorks />
      <Booking />
      <FeaturedEvents />
      <Testimonials />
      <Blog />
      <Gallery />
      <Contact />
    </>
  );
};

export default LandingPage;
