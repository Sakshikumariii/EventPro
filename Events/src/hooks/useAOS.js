import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (options = {}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      ...options,
    });
  }, [options]);
};

export default useAOS;
