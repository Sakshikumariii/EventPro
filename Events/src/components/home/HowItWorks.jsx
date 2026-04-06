import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FaCalendarCheck, FaSearch, FaGlassCheers } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    nameKey: 'step_1_title',
    descriptionKey: 'step_1_desc',
    icon: FaSearch,
  },
  {
    nameKey: 'step_2_title',
    descriptionKey: 'step_2_desc',
    icon: FaCalendarCheck,
  },
  {
    nameKey: 'step_3_title',
    descriptionKey: 'step_3_desc',
    icon: FaGlassCheers,
  },
];

const HowItWorks = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-900 py-16 md:py-24 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle highlight={t('how_it_works')} />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('how_it_works_desc')}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.nameKey} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 shadow-md transition-transform duration-300 hover:scale-110">
                  <step.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  {t(step.nameKey)}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{t(step.descriptionKey)}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
