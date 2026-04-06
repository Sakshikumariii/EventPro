import { useEffect, useState } from "react";
import { eventsService } from "../services/api/eventsService";

export const useEventDetails = (eventId) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchEventDetails = async () => {
      setLoading(true);
      setError("");
      setEvent(null);

      try {
        const res = await eventsService.getEventById(eventId);
        if (isMounted) {
          setEvent(res);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || "Failed to load event details.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (eventId) {
      fetchEventDetails();
    } else {
      setLoading(false);
      setError("Invalid event id.");
    }

    return () => {
      isMounted = false;
    };
  }, [eventId]);

  return { event, loading, error };
};
