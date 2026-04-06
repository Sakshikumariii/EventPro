import React from 'react';
import { useTranslation } from 'react-i18next';

const stats = [
  { id: 1, name: 'happy_clients', value: '10,000+' },
  { id: 2, name: 'events_organized', value: '500+' },
  { id: 3, name: 'registered_venues', value: '250+' },
  { id: 4, name: 'professional_partners', value: '1,200+' },
];

const Stats = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-primary-600 dark:bg-primary-900 py-16 sm:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-primary-100 dark:text-primary-200">{t(stat.name)}</dt>
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
