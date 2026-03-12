const TextArea = ({ value, onChange, placeholder, label, error, touched, rows = 4, className = "" }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 resize-none
          ${error && touched 
            ? "border-red-400 focus:ring-red-400 bg-red-50/50 dark:bg-red-900/20" 
            : "border-gray-300 focus:ring-blue-500 hover:border-gray-400 dark:border-gray-600 dark:focus:ring-blue-400 dark:hover:border-gray-500"
          }
          focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800 dark:text-gray-100
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 dark:disabled:bg-gray-900
          placeholder:text-gray-400 dark:placeholder:text-gray-500`}
      />
      {error && touched && (
        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
          <span>⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
