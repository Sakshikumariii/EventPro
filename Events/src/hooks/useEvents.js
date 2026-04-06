import { useEffect, useMemo, useState } from "react";
import { eventsService } from "../services/api/eventsService";
import { getSafeText } from "../utils/eventUtils";

const ITEMS_PER_PAGE = 9;

const defaultFilters = {
  search: "",
  state: "",
  type: "",
  sort: "date-asc",
};

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await eventsService.getEvents();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events", err);
        setError(
          err.response?.data?.message ||
            "Failed to load events. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
    setCurrentPage(1);
  };

  const filteredEvents = useMemo(() => {
    let list = [...events];

    if (filters.search) {
      const q = getSafeText(filters.search);
      list = list.filter(
        (event) =>
          getSafeText(event.title).includes(q) ||
          getSafeText(event.type).includes(q) ||
          getSafeText(event.location).includes(q) ||
          getSafeText(event.state).includes(q)
      );
    }

    if (filters.state) {
      list = list.filter((event) => event.state === filters.state);
    }

    if (filters.type) {
      list = list.filter((event) => event.type === filters.type);
    }

    switch (filters.sort) {
      case "date-desc":
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "date-asc":
      default:
        list.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
    }

    return list;
  }, [events, filters]);

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE) || 1;

  const paginatedEvents = useMemo(
    () =>
      filteredEvents.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
    [filteredEvents, currentPage]
  );

  return {
    loading,
    error,
    filters,
    events: paginatedEvents,
    totalPages,
    currentPage,
    totalFiltered: filteredEvents.length,
    onFilterChange: handleFilterChange,
    onClearFilters: clearFilters,
    onPageChange: setCurrentPage,
  };
};

