import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorState = ({ message = 'Something went wrong.', onRetry, fullScreen = false }) => {
  const containerClasses = fullScreen
    ? 'fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-50 p-6 text-center'
    : 'flex flex-col items-center justify-center w-full min-h-[12rem] p-6 text-center';

  return (
    <div className={containerClasses}>
      <FaExclamationTriangle className="text-red-500 text-5xl mb-4" />
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Oops!</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-medium cursor-pointer"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
