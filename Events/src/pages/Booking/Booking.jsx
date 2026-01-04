import { useState } from "react";
import { EVENT_NAMES, INDIAN_STATES } from "../../constants/constant";
import SelectField from "../../components/ui/SelectField";
import InputField from "../../components/ui/InputField";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import SectionTitle from "../../components/ui/SectionTitle";


const Booking = () => {
  const [form, setForm] = useState({
    eventName: "",
    location: "",
    startDate: "",
    endDate: "",
    message: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking details submitted!");
  };

  return (
    <section id="booking" className="py-8 md:py-12 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle highlight="Booking" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Fill out the form below and we'll get back to you to plan your perfect event
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <SelectField
              label="Event Type"
              value={form.eventName}
              onChange={(e) => handleChange("eventName", e.target.value)}
              options={EVENT_NAMES}
              placeholder="Select Event Name"
            />

            <SelectField
              label="Location"
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              options={INDIAN_STATES}
              placeholder="Select Event Location"
            />

            <InputField
              label="Start Date"
              type="date"
              value={form.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
            />

            <InputField
              label="End Date"
              type="date"
              value={form.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
            />
          </div>

          <div className="mt-6">
            <TextArea
              label="Additional Message"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Enter the Message"
              rows={5}
            />
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
