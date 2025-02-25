import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'كتبي 📚',
  description: 'مجموعة من الكتب التي سيتم تأليفها',
};

const books = [
  {
    title: 'التوازن في حياة المسلم',
    description: 'تحقيق التوازن في حياة المسلم.',
    downloadLink: '',
  },
  {
    title: 'كيف تتعلم أي لغة',
    description: 'أساليب فعالة لتعلم اللغات بسهولة.',
    downloadLink: '',
  },
  {
    title: 'فن علوم الحاسب',
    description: 'دليل شامل لفهم علوم الحاسب.',
    downloadLink: '',
  },
];

export default function Page() {
  return (
    <main
      dir="rtl"
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        📚 قائمة الكتب
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {book.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {book.description}
            </p>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/uestion-mark.jpeg"
                alt="غلاف غير متوفر"
                width={150}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
            <a
              href={book.downloadLink}
              download
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              تحميل الكتاب
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
