import { useMemo } from "react";
import { EVENT_NAMES, INDIAN_STATES } from "../../constants/events.constants";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const sortOptions = useMemo(
    () => [
      { value: "date-asc", labelKey: "sort_date_asc" },
      { value: "date-desc", labelKey: "sort_date_desc" },
      { value: "price-asc", labelKey: "sort_price_asc" },
      { value: "price-desc", labelKey: "sort_price_desc" },
    ],
    [t]
  );

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-soft border border-primary-50 dark:border-gray-800 p-4 md:p-5 mb-6 flex flex-col gap-4 transition-colors duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {t('explore_events')}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t('showing')} <span className="font-semibold">{resultsCount}</span> {t('events_count')}
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            {t('search_label')}
          </label>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => onChange("search", e.target.value)}
            placeholder={t('search_placeholder')}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            {t('state_label')}
          </label>
          <select
            value={filters.state}
            onChange={(e) => onChange("state", e.target.value)}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">{t('all_states')}</option>
            {INDIAN_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            {t('type_label')}
          </label>
          <select
            value={filters.type}
            onChange={(e) => onChange("type", e.target.value)}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">{t('all_types')}</option>
            {uniqueTypesFromNames.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            {t('sort_by_label')}
          </label>
          <select
            value={filters.sort}
            onChange={(e) => onChange("sort", e.target.value)}
            className="border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t(opt.labelKey)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onClear}
          className="text-xs md:text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white underline underline-offset-4"
        >
          {t('clear_filters')}
        </button>
      </div>
    </div>
  );
};

export default EventsFilters;

