import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

// Use a simple icon or just text for the globe
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      {/* Globe Icon placeholder - using text emoji for simplicity or react-icons later */}
      <span className="text-gray-600 dark:text-gray-300">🌍</span>
      <select
        defaultValue={i18n.language}
        onChange={changeLanguage}
        className="bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <option value="en" className="text-black">Eng</option>
        <option value="hi" className="text-black">हिंदी</option>
        <option value="kn" className="text-black">ಕನ್ನಡ</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
