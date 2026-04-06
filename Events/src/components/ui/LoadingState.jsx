import React from 'react';

const LoadingState = ({ message = 'Loading...', fullScreen = false }) => {
  const containerClasses = fullScreen
    ? 'fixed inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 z-50'
    : 'flex flex-col items-center justify-center w-full min-h-[12rem]';

  return (
    <div className={containerClasses}>
      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      {message && <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">{message}</p>}
    </div>
  );
};

export default LoadingState;
