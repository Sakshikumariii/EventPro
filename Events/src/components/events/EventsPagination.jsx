const EventsPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Page <span className="font-semibold text-gray-900 dark:text-white">{currentPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </span>
      <div className="flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 border border-primary-100 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-50 dark:hover:bg-gray-700 transition"
        >
          Prev
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 border border-primary-100 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-50 dark:hover:bg-gray-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EventsPagination;

