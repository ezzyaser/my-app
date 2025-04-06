import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { FaReact, FaBook, FaCode } from 'react-icons/fa';

export const metadata = {
  title: 'React',
  description: 'تعلم React.js لبناء واجهات مستخدم تفاعلية وحديثة.',
  icons: '/Icons/react.svg',
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
          <FaReact className="text-blue-500 dark:text-blue-300 text-3xl" />
          <span>React.js</span>
        </h1>

        {/* المقدمة */}
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          React.js هو مكتبة JavaScript شهيرة لتطوير واجهات المستخدم التفاعلية،
          تم تطويرها بواسطة Facebook. تعتمد React على مفهوم المكونات
          (Components) لإعادة الاستخدام وإدارة الواجهات بطريقة ديناميكية وسريعة.
        </p>

        {/* لماذا React.js؟ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-2">
            <FaCode className="text-purple-500 text-lg sm:text-xl" />
            <span>لماذا React.js؟</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 sm:space-y-3">
            <li>إعادة استخدام المكونات لتطوير أسرع وأسهل.</li>
            <li>أداء عالي بفضل استخدام Virtual DOM.</li>
            <li>إدارة الحالة بسهولة عبر Hooks أو Redux.</li>
            <li>مدعومة من مجتمع كبير وشركات كبرى.</li>
          </ul>
        </section>

        {/* مثال على كود React */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-2">
            <FaCode className="text-green-500 text-lg sm:text-xl" />
            <span>مثال على كود React.js</span>
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 sm:p-6 rounded-lg overflow-x-auto text-xs sm:text-sm"
          >
            <code>
              {`import React from 'react';

export default function App() {
  return <h1>Hello, React!</h1>;
}`}
            </code>
          </pre>
        </section>

        {/* مصادر التعلم */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            📚 مصادر لتعلم React.js
          </h2>

          {/* التوثيق الرسمي */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 rounded-lg border border-gray-300 dark:border-gray-600 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 flex items-center space-x-2">
              <FaBook className="text-blue-500 text-lg" />
              <span>التوثيق الرسمي</span>
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://react.dev/"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                target="_blank"
              >
                التوثيق الرسمي لـ React.js
              </Link>
            </div>
          </div>

          {/* دورات تعليمية */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-300 flex items-center justify-center">
              🎓 دورات تعليمية
            </h3>
            <Link
              href="https://www.youtube.com/watch?v=lAFbKzO-fss"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              دورة React.js كاملة - Anson the Developer
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=bMknfKXIFA8"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              دورة React.js كاملة - freeCodeCamp
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=dCLhUialKPQ"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              دورة React.js كاملة - JavaScript Mastery
            </Link>
          </div>
          {/* مشاريع للتطبيق */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 flex items-center justify-center ">
              🛠️ مشاريع لتطبيق المهارات
            </h3>
            <Link
              href="https://www.youtube.com/watch?v=x4rFhThSX04"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              React Projects
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=41lfYQhUzRs"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              3 Animated Websites with Raect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
