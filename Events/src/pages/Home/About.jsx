import SectionTitle from "../../components/ui/SectionTitle";
import { ABOUT_TEXT } from "../../constants/constant";
import useAOS from "../../hooks/useAOS";
import Aboutimg from "../../assets/about.png";

const About = () => {
  useAOS();

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <SectionTitle
            highlight="About us"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div data-aos="fade-right" className="w-full">
            <img 
              src={Aboutimg} 
              alt="Event Management" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 italic text-gray-900">
              How Event Works
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
              {ABOUT_TEXT.description}
            </p>

            <button
              className="bg-black text-white px-6 py-3 rounded-md
                               hover:bg-gray-900 transition transform hover:scale-105"
            >
              Read more...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
