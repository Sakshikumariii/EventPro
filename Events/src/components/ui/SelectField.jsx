const SelectField = ({ value, onChange, options, placeholder, label, error, touched, className = "" }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 shadow-sm
          ${error && touched 
            ? "border-red-400 focus:ring-red-400 bg-red-50/50" 
            : "border-gray-300 focus:ring-blue-500 hover:border-blue-300 hover:shadow-md"
          }
          focus:ring-2 focus:border-transparent
          bg-white cursor-pointer
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60`}
      >
        <option value="">{placeholder}</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && touched && (
        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
          <span>⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;
