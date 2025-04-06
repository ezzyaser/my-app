import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { FaWind, FaBook, FaCode } from 'react-icons/fa';

export const metadata = {
  title: 'Tailwind CSS',
  description: 'تعلم Tailwind CSS لإنشاء تصاميم أنيقة وسريعة.',
  icons: '/Icons/tailwind.svg',
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
          <FaWind className="text-blue-500 dark:text-blue-300 text-3xl" />
          <span>Tailwind CSS</span>
        </h1>

        {/* المقدمة */}
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          Tailwind CSS هو إطار عمل CSS مساعد يتيح لك تصميم صفحات الويب بسرعة
          باستخدام أنماط جاهزة بدون الحاجة إلى كتابة أكواد CSS مخصصة.
        </p>

        {/* لماذا Tailwind CSS؟ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-2">
            <FaCode className="text-purple-500 text-lg sm:text-xl" />
            <span>لماذا Tailwind CSS؟</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 sm:space-y-3">
            <li>تصميم سريع باستخدام أنماط جاهزة.</li>
            <li>تحكم كامل في التخصيص عبر `tailwind.config.js`.</li>
            <li>أداء عالي بدون تحميل ملفات CSS إضافية.</li>
            <li>متوافق مع React، Next.js، Vue، وغيرها.</li>
          </ul>
        </section>

        {/* مثال على كود Tailwind CSS */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-2">
            <FaCode className="text-green-500 text-lg sm:text-xl" />
            <span>مثال على كود Tailwind CSS</span>
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 sm:p-6 rounded-lg overflow-x-auto text-xs sm:text-sm"
          >
            <code>
              {`<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  اضغط هنا
</button>`}
            </code>
          </pre>
        </section>

        {/* مصادر التعلم */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            📚 مصادر لتعلم Tailwind CSS
          </h2>

          {/* التوثيق الرسمي */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 rounded-lg border border-gray-300 dark:border-gray-600 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 flex items-center space-x-2">
              <FaBook className="text-blue-500 text-lg" />
              <span>التوثيق الرسمي</span>
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://tailwindcss.com/docs"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                target="_blank"
              >
                التوثيق الرسمي لـ Tailwind CSS
              </Link>
            </div>
          </div>

          {/* دورات تعليمية */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-300 flex items-center justify-center">
              🎓 دورات تعليمية
            </h3>
            <Link
              href="https://www.youtube.com/watch?v=ft30zcMlFao"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              دورة Tailwind CSS كاملة - freeCodeCamp
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=6biMWgD6_JY"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              Tailwind CSS v4 - JavaScript Mastery
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=tS7upsfuxmo"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              Tailwind CSS Full Course + Project - JavaScript Mastery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
