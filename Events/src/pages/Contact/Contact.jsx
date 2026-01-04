import { useFormik } from "formik";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import InputField from "../../components/ui/InputField";
import SectionTitle from "../../components/ui/SectionTitle";
import { contactValidationSchema } from "../../validations/contactValidationSchema";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      alert("Message sent successfully!");
      resetForm();
    },
  });

  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

          {/* Title */}
          <div className="text-center mb-10">
            <SectionTitle highlight="Contact Us" />
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-gray-700">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Event Street, Bangalore, India
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> contact@eventmanagement.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +91 9876543210
            </p>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="max-w-2xl mx-auto">

            <InputField
              name="name"
              placeholder="Your Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              touched={formik.touched.name}
            />

            <InputField
              type="email"
              name="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />

            <InputField
              as="textarea"
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.message}
              touched={formik.touched.message}
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg
                         hover:from-blue-700 hover:to-purple-700 transition-all font-semibold transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-10 text-2xl text-gray-600">
            <FaFacebook className="hover:text-blue-600 cursor-pointer transition-colors duration-200 transform hover:scale-110" />
            <FaInstagram className="hover:text-purple-600 cursor-pointer transition-colors duration-200 transform hover:scale-110" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors duration-200 transform hover:scale-110" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
