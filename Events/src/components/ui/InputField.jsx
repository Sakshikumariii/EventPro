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
  disabled = false,
  ...rest
}) => {
  const Component = as;

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
        className={`w-full border rounded-xl px-4 py-3.5 outline-none transition-all duration-200
          ${error && touched 
            ? "border-red-400 focus:ring-red-400 bg-red-50/50 dark:bg-red-900/20" 
            : "border-gray-300 focus:ring-blue-500 hover:border-gray-400 dark:border-gray-600 dark:focus:ring-blue-400 dark:hover:border-gray-500"
          }
          focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800 dark:text-gray-100
          ${as === "textarea" ? "resize-none" : ""}
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 dark:disabled:bg-gray-700
          placeholder:text-gray-400 dark:placeholder:text-gray-500`}
        disabled={disabled}
        {...rest}
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
