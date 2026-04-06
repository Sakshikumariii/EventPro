import { useState } from "react";

export const useFormState = (initialState) => {
  const [form, setForm] = useState(initialState);

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateField(name, value);
  };

  const resetForm = (nextState = initialState) => {
    setForm(nextState);
  };

  return { form, setForm, updateField, handleInputChange, resetForm };
};
