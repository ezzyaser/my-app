import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { FaBook, FaCode, FaCogs } from 'react-icons/fa';

export const metadata = {
  title: 'TypeScript',
  description: 'تعلم TypeScript لتحسين تطوير تطبيقات JavaScript.',
  icons: '/Icons/typeScript.svg',
};

export default function Page() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 p-4 sm:p-8 flex justify-center items-center flex-col"
    >
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 sm:p-8 border border-gray-300 dark:border-gray-700 space-y-8">
        {/* العنوان */}
        <h1
          dir="ltr"
          className="text-2xl sm:text-4xl font-bold text-center text-gray-900 dark:text-blue-400 flex items-center justify-center space-x-2"
        >
          <FaCogs className="text-blue-500 dark:text-blue-300 text-3xl" />
          <span>TypeScript</span>
        </h1>

        {/* المقدمة */}
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          TypeScript هي لغة برمجية تعتمد على JavaScript لكنها تضيف دعمًا لأنواع
          البيانات، مما يساعد في تقليل الأخطاء وتحسين جودة الكود.
        </p>

        {/* لماذا TypeScript؟ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-2">
            <FaCode className="text-purple-500 text-lg sm:text-xl" />
            <span>لماذا TypeScript؟</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 sm:space-y-3">
            <li>إضافة أنواع بيانات تساعد في تجنب الأخطاء.</li>
            <li>تحسين تجربة التطوير عبر التكامل مع محررات الكود.</li>
            <li>يعمل بسلاسة مع JavaScript دون الحاجة لتعديلات كبيرة.</li>
            <li>
              يُستخدم على نطاق واسع في المشاريع الكبيرة مثل React و Node.js.
            </li>
          </ul>
        </section>

        {/* مثال على كود TypeScript */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-2">
            <FaCode className="text-green-500 text-lg sm:text-xl" />
            <span>مثال على كود TypeScript</span>
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 sm:p-6 rounded-lg overflow-x-auto text-xs sm:text-sm"
          >
            <code>
              {`function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("TypeScript"));`}
            </code>
          </pre>
        </section>

        {/* مصادر التعلم */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            📚 مصادر لتعلم TypeScript
          </h2>

          {/* التوثيق الرسمي */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 rounded-lg border border-gray-300 dark:border-gray-600 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 flex items-center space-x-2">
              <FaBook className="text-blue-500 text-lg" />
              <span>التوثيق الرسمي</span>
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://www.typescriptlang.org/docs/"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                target="_blank"
              >
                التوثيق الرسمي لـ TypeScript
              </Link>
            </div>
          </div>

          {/* دورات تعليمية */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-300 flex items-center justify-center">
              🎓 دورات تعليمية
            </h3>
            <Link
              href="https://youtu.be/gieEQFIfgYc?feature=shared"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              دورة TypeScript للمبتدئين - Dave Gray
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
