import React from 'react';

export default function Page() {
  const categories = [
    {
      title: 'علوم الآلة',
      steps: [
        {
          title: 'علوم اللغة العربية',
          link: 'https://youtube.com/playlist?list=PLpk7CtzfzpbJ5u3WkdETU72cxc-UlJJVS&feature=shared',
          done: true,
        },
        {
          title: 'أصول الفقه',
          link: 'https://youtube.com/playlist?list=PLF8wQ8_AW0Lz5Q0aZwJGO_8KzFaSzImFl&feature=shared',
          done: false,
        },
        {
          title: 'علم المنطق',
          link: 'https://youtube.com/playlist?list=PL2-FkZlJhxqX0XQozSqviXkqxxRAmiTsU&feature=shared',
          done: false,
        },
        {
          title: 'علم آداب البحث والمناظرة',
          link: 'https://youtube.com/playlist?list=PLlQGKXR9nKruxougVXSUFgumNks93NBI7&feature=shared',
          done: false,
        },
      ],
    },
    {
      title: 'علوم المصادر',
      steps: [
        {
          title: 'علوم القرآن',
          link: 'https://youtube.com/playlist?list=PL2-FkZlJhxqWiY01BSOCoafBcY3UXQXVl&feature=shared',
          done: false,
        },
        {
          title: 'علوم الحديث',
          link: 'https://youtube.com/playlist?list=PLZmiPrHYOIsTRR7mHqssyC8Jni5Myu3de&feature=shared',
          done: false,
        },
      ],
    },
    {
      title: 'علوم الغايات',
      steps: [
        {
          title: 'العقيدة',
          link: 'https://youtube.com/playlist?list=PLx3Fh1kiMbrdPTuARDxYFXttvzxWwD1Jt&feature=shared',
          done: false,
        },
        {
          title: 'الفقه',
          link: 'https://youtube.com/playlist?list=PL92HwYx3aJlsuy9G81ewDeZR4GJhhlgLp&feature=shared',
          done: false,
        },
        {
          title: 'التزكية',
          link: 'https://youtube.com/playlist?list=PLZmiPrHYOIsTLkDfoVokFQSxPuJYZxV5k&feature=shared',
          done: false,
        },
        {
          title: 'السيرة',
          link: 'https://youtube.com/playlist?list=PLbDRORmj0gydAp_9O0Vc4fq4qE3zmrTdw&feature=shared',
          done: false,
        },
      ],
    },
  ];

  return (
    <div dir="rtl" className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        🚀 خارطة الطريق للعلوم الشرعية
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
                  <a
                    href={step.link}
                    className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
                    target="_blank"
                  >
                    {step.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
