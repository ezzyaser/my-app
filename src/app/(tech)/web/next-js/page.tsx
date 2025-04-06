import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaReact,
  FaBolt,
  FaServer,
  FaBook,
  FaFileCode,
  FaRocket,
} from 'react-icons/fa';

export const metadata = {
  title: 'Next.js',
  description: 'تعلم إطار Next.js وأهميته في تطوير تطبيقات الويب الحديثة.',
  icons: '/Icons/next.svg',
};

export default function Page() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 p-6 flex justify-center items-center flex-col"
    >
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
        <h1
          dir="ltr"
          className="text-xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 flex items-center justify-center"
        >
          <FaReact className="mr-3 text-black dark:text-white" /> Next.js
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Next.js هو إطار عمل مبني على React يتيح تطوير تطبيقات الويب الحديثة
          بسهولة مع دعم التوليد المسبق (SSG) والتصيير على الخادم (SSR).
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaRocket className="mr-2 text-blue-500" /> لماذا Next.js؟
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>تصيير سريع وتحسين SEO باستخدام SSG و SSR.</li>
            <li>دعم API Routes لإنشاء خوادم بدون الحاجة إلى Backend منفصل.</li>
            <li>تحميل صفحات أسرع باستخدام تقنيات مثل Image Optimization.</li>
            <li>دعم TypeScript بشكل افتراضي.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaServer className="mr-2 text-green-500" /> كيف يعمل Next.js؟
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>
              <strong>التصيير المسبق (SSG):</strong> يتم توليد الصفحات أثناء
              البناء.
            </li>
            <li>
              <strong>التصيير على الخادم (SSR):</strong> يتم تحميل الصفحات عند
              الطلب.
            </li>
            <li>
              <strong>التنقل السريع:</strong> يتم تحميل الصفحات مسبقًا عبر
              الروابط.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-yellow-500" /> مثال على كود Next.js
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"
          >
            <code>
              {`import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>مرحبًا بك في Next.js</h1>
      <Link href="/about">اذهب إلى صفحة حول</Link>
    </div>
  );
}`}
            </code>
          </pre>
        </section>

        <div className="my-5 flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            📚 مصادر لتعلم Next.js
          </h2>
          <Link
            href="https://nextjs.org/docs"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            التوثيق الرسمي لـ Next.js
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=k7o9R6eaSes"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة Next.js للمبتدئين - Codevolution
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=Zq5fmkH0T78"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة Next.js + مشروع - JavaScript Mastery
          </Link>
        </div>
      </div>
    </div>
  );
}
