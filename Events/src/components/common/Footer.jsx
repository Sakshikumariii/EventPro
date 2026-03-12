import { Link } from "react-router-dom";
import { FOOTER_COPYRIGHT, FOOTER_SECTIONS, CONTACT_INFO } from "../../constants/constant";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Branding Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-12 border-b border-gray-800">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Event<span className="text-primary-500">Pro</span>
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Your ultimate partner for planning and managing unforgettable events. 
              From intimate gatherings to massive conferences, we've got you covered.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-6">Get the latest updates, event planning tips, and exclusive offers straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Navigation & Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-6 tracking-wider uppercase text-sm">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="lg:col-span-2 lg:pl-8 border-t lg:border-t-0 border-gray-800 pt-8 lg:pt-0">
             <h4 className="text-white font-semibold mb-6 tracking-wider uppercase text-sm">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </span>
                  <div className="text-gray-400 text-sm mt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <FaPhoneAlt />
                  </span>
                  <div className="text-gray-400 text-sm">
                    {CONTACT_INFO.phone}
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-primary-500 flex-shrink-0">
                    <FaEnvelope />
                  </span>
                  <div className="text-gray-400 text-sm">
                    {CONTACT_INFO.email}
                  </div>
                </li>
              </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} EventPro. {FOOTER_COPYRIGHT}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
