import { useMemo } from "react";
import { EVENT_NAMES, INDIAN_STATES } from "../../constants/constant";

const uniqueTypesFromNames = Array.from(
  new Set(
    EVENT_NAMES.map((name) => {
      const parts = name.split(" ");
      return parts[parts.length - 1];
    })
  )
);

const EventsFilters = ({
  filters,
  onChange,
  resultsCount,
  onClear,
}) => {
  const sortOptions = useMemo(
    () => [
      { value: "date-asc", label: "Date (Earliest first)" },
      { value: "date-desc", label: "Date (Latest first)" },
      { value: "price-asc", label: "Price (Low to High)" },
      { value: "price-desc", label: "Price (High to Low)" },
    ],
    []
  );

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-5 mb-6 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Explore Events
        </h1>
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold">{resultsCount}</span> events
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Search
          </label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onChange("search", e.target.value)}
            placeholder="Search by title or type..."
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            State
          </label>
          <select
            value={filters.state}
            onChange={(e) => onChange("state", e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All states</option>
            {INDIAN_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => onChange("type", e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All types</option>
            {uniqueTypesFromNames.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Sort by
          </label>
          <select
            value={filters.sort}
            onChange={(e) => onChange("sort", e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClear}
          className="text-xs md:text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default EventsFilters;

