import { Link } from "react-router-dom";
import { FOOTER_COPYRIGHT, FOOTER_SECTIONS } from "../../constants/constant";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300  mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Sections */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-3">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {FOOTER_COPYRIGHT}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
