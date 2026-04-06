import { useState } from "react";
import { useLocation } from "react-router-dom";
import { EVENT_NAMES, INDIAN_STATES } from "../../constants/events.constants";
import SelectField from "../../components/ui/SelectField";
import InputField from "../../components/ui/InputField";
import TextArea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";
import SectionTitle from "../../components/ui/SectionTitle";
import { useAuth } from "../../context/AuthContext";
import { useFormState } from "../../hooks/useFormState";
import { bookingService } from "../../services/api/bookingService";
import { getEventId } from "../../utils/eventUtils";

const Booking = () => {
  const location = useLocation();
  const prefilledEvent = location.state?.event;
  const initialFormState = {
    eventName: prefilledEvent?.type || "",
    location: prefilledEvent?.state || "",
    startDate: prefilledEvent?.date || "",
    endDate: "",
    message: prefilledEvent
      ? `I am interested in booking the ${prefilledEvent.title} event.`
      : "",
    phone: "",
    tickets: 1,
  };

  const { form, updateField, handleInputChange, resetForm } = useFormState(initialFormState);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setSubmitting(true);

      await bookingService.createBooking({
        eventId: getEventId(prefilledEvent) || null,
        name: user?.firstName || "Guest",
        email: user?.email || "",
        phone: form.phone,
        eventName: form.eventName,
        location: form.location,
        startDate: form.startDate,
        endDate: form.endDate,
        message: form.message,
        tickets: Number(form.tickets) || 1,
      });

      setSuccess("Your booking has been submitted successfully!");
      resetForm({
        eventName: "",
        location: "",
        startDate: "",
        endDate: "",
        message: "",
        phone: "",
        tickets: 1,
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to submit booking. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-16 md:py-20 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <SectionTitle highlight="Booking" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4 transition-colors">
            Fill out the form below and we'll get back to you to plan your
            perfect event
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-800 transition-colors duration-300"
        >
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-sm text-green-700">
              {success}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {prefilledEvent ? (
              <InputField
                label="Selected Event"
                value={prefilledEvent.title}
                disabled={true}
              />
            ) : (
              <SelectField
                label="Event Type"
                value={form.eventName}
                onChange={(e) => updateField("eventName", e.target.value)}
                options={EVENT_NAMES}
                placeholder="Select Event Name"
              />
            )}

            {prefilledEvent ? (
              <InputField
                label="Location"
                value={prefilledEvent.location || prefilledEvent.state}
                disabled={true}
              />
            ) : (
              <SelectField
                label="Location"
                value={form.location}
                onChange={(e) => updateField("location", e.target.value)}
                options={INDIAN_STATES}
                placeholder="Select Event Location"
              />
            )}

            <InputField
              label="Start Date"
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleInputChange}
            />

            <InputField
              label="End Date"
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleInputChange}
            />

            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleInputChange}
            />

            <InputField
              label="Number of Tickets"
              type="number"
              name="tickets"
              min={1}
              value={form.tickets}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-6">
            <TextArea
              label="Additional Message"
              name="message"
              value={form.message}
              onChange={handleInputChange}
              placeholder="Enter the Message"
              rows={5}
            />
          </div>

          <div className="mt-8 text-center">
            <Button
              type="submit"
              disabled={submitting}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {submitting ? "Submitting..." : "Submit Booking"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
