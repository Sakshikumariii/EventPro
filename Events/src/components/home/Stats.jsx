import React from 'react';

const stats = [
  { id: 1, name: 'Happy Clients', value: '10,000+' },
  { id: 2, name: 'Events Organized', value: '500+' },
  { id: 3, name: 'Registered Venues', value: '250+' },
  { id: 4, name: 'Professional Partners', value: '1,200+' },
];

const Stats = () => {
  return (
    <div className="bg-primary-600 dark:bg-primary-900 py-16 sm:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-primary-100 dark:text-primary-200">{stat.name}</dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
