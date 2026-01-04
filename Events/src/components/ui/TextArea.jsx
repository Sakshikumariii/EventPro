const TextArea = ({ value, onChange, placeholder, label, error, touched, rows = 4, className = "" }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 resize-none shadow-sm
          ${error && touched 
            ? "border-red-400 focus:ring-red-400 bg-red-50/50" 
            : "border-gray-300 focus:ring-blue-500 hover:border-blue-300 hover:shadow-md"
          }
          focus:ring-2 focus:border-transparent bg-white
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
          placeholder:text-gray-400`}
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
