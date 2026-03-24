import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    bodyKey: "testim_1_body",
    author: {
      name: 'Priya Sharma',
      roleKey: 'bride',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    bodyKey: "testim_2_body",
    author: {
      name: 'Rahul Verma',
      roleKey: 'corp_manager',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    bodyKey: "testim_3_body",
    author: {
      name: 'Anita Desai',
      roleKey: 'private_host',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50 dark:bg-gray-950 py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle highlight={t('testimonials')} />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('loved_by_clients')}
          </h2>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl transition-all duration-300">
                <blockquote className="text-gray-700 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">{`"${t(testimonial.bodyKey)}"`}</p>
                </blockquote>
                <div className="mt-8 flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt={testimonial.author.name} />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{t(testimonial.author.roleKey)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
