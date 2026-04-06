import React from 'react';
import { FaInbox } from 'react-icons/fa';

const EmptyState = ({ title = 'No Data Found', message = 'There are no items to display at the moment.', icon: Icon = FaInbox, action }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[16rem] p-6 text-center border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl my-4">
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
        <Icon className="text-gray-400 dark:text-gray-500 text-4xl" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">{message}</p>
      {action && (
        <div className="mt-2 text-primary">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
