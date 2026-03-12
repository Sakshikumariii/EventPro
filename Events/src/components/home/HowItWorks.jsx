import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FaCalendarCheck, FaSearch, FaGlassCheers } from 'react-icons/fa';

const steps = [
  {
    name: '1. Discover Events & Venues',
    description: 'Browse our extensive collection of events, venues, and services tailored to your specific requirements and budget.',
    icon: FaSearch,
  },
  {
    name: '2. Book & Customize',
    description: 'Easily book your preferred date and customize your plan with catering, decorations, and other professional services.',
    icon: FaCalendarCheck,
  },
  {
    name: '3. Enjoy the Celebration',
    description: 'Sit back and relax as our experts handle the execution, ensuring a flawless and memorable experience for everyone.',
    icon: FaGlassCheers,
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 md:py-24 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle highlight="How It Works" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Planning your dream event has never been easier. Follow these three simple steps to bring your vision to life.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 shadow-md transition-transform duration-300 hover:scale-110">
                  <step.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{step.description}</p>
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
