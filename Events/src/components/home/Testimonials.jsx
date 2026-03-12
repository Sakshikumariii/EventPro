import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    body: "EventPro made our wedding absolutely magical. From the venue selection to the catering, every single detail was flawless.",
    author: {
      name: 'Priya Sharma',
      role: 'Bride',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "We hosted our annual corporate gala using EventPro's platform. The seamless booking process saved us weeks of planning time.",
    author: {
      name: 'Rahul Verma',
      role: 'Corporate Event Manager',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: "The decorations provided by their partners were breathtaking. Highly recommend for anyone looking to host a premium birthday party.",
    author: {
      name: 'Anita Desai',
      role: 'Private Host',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle highlight="Testimonials" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Loved by our clients
          </h2>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl transition-all duration-300">
                <blockquote className="text-gray-700 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">{`"${testimonial.body}"`}</p>
                </blockquote>
                <div className="mt-8 flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt={testimonial.author.name} />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.author.role}</div>
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
