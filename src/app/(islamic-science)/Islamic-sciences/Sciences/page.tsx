import React from 'react';
import categories from '@/config/categories';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        🚀 خارطة طريق العلوم الشرعية
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 dark:border-blue-400 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              {category.title}
            </h3>
            <ul className="space-y-6">
              {category.steps.map((step, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <span
                    className={`inline-block w-5 h-5 rounded-full ${
                      step.done
                        ? 'bg-green-500 dark:bg-green-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  ></span>
                  <Link
                    href={step.link}
                    className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
                  >
                    {step.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
