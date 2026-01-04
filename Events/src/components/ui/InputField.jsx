const InputField = ({
  as = "input",        // "input" | "textarea"
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  touched,
  rows = 3,
  label,
  className = "",
}) => {
  const Component = as;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <Component
        type={as === "input" ? type : undefined}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={as === "textarea" ? rows : undefined}
        placeholder={placeholder}
          className={`w-full border rounded-xl px-4 py-3.5 outline-none transition-all duration-200 shadow-sm
          ${error && touched 
            ? "border-red-400 focus:ring-red-400 bg-red-50/50" 
            : "border-gray-300 focus:ring-blue-500 hover:border-blue-300 hover:shadow-md"
          }
          focus:ring-2 focus:border-transparent bg-white
          ${as === "textarea" ? "resize-none" : ""}
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

export default InputField;
