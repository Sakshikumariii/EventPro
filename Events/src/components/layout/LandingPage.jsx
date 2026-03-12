import Home from "../../pages/Home/Home";
import About from "../../pages/Home/About";
import Booking from "../../pages/Booking/Booking";
import Price from "../../pages/Price/Price";
import Blog from "../../pages/Blog/Blog";
import Gallery from "../../pages/Gallery/Gallery";
import Contact from "../../pages/Contact/Contact";
import Stats from "../home/Stats";
import HowItWorks from "../home/HowItWorks";
import Testimonials from "../home/Testimonials";

const LandingPage = () => {
  return (
    <>
      <Home />
      <Stats />
      <About />
      <HowItWorks />
      <Booking />
      <Price />
      <Testimonials />
      <Blog />
      <Gallery />
      <Contact />
    </>
  );
};

export default LandingPage;
