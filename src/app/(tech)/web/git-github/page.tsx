import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaGithub,
  FaCodeBranch,
  FaClock,
  FaBook,
  FaServer,
} from 'react-icons/fa';

export const metadata = {
  title: 'Git & GitHub',
  description:
    'تعلم نظام التحكم في الإصدارات Git ومنصة GitHub لإدارة المشاريع البرمجية.',
  icons: '/Icons/git.svg',
};

export default function Page() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6 flex justify-center items-center flex-col"
    >
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
        <h1
          dir="ltr"
          className="text-xl md:text-4xl font-bold text-center text-gray-900 dark:text-blue-400 mb-6 flex items-center justify-center"
        >
          <FaGithub className="mr-3 text-gray-800 dark:text-white" /> Git &
          GitHub
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Git هو نظام تحكم في الإصدارات يساعد المطورين على إدارة مشاريعهم
          البرمجية، بينما GitHub هو منصة مستضافة لتخزين ومشاركة الأكواد.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaClock className="mr-2 text-green-500" /> تاريخ Git
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            تم تطوير Git في عام 2005 بواسطة Linus Torvalds لإنشاء أداة تحكم في
            الإصدارات مفتوحة المصدر لإدارة نواة لينكس.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCodeBranch className="mr-2 text-purple-500" /> أساسيات Git
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>
              إنشاء مستودع جديد باستخدام <code>git init</code>
            </li>
            <li>
              إضافة الملفات إلى التتبع باستخدام <code>git add</code>
            </li>
            <li>
              حفظ التعديلات باستخدام <code>git commit -m "رسالة التعديل"</code>
            </li>
            <li>
              رفع التعديلات إلى GitHub باستخدام <code>git push</code>
            </li>
            <li>
              جلب التعديلات من المستودع باستخدام <code>git pull</code>
            </li>
            <li>
              إنشاء الفروع والعمل عليها باستخدام <code>git branch</code> و{' '}
              <code>git checkout</code>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaServer className="mr-2 text-blue-500" /> الفرق بين Git و GitHub
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Git هو أداة لإدارة التعديلات على الأكواد، بينما GitHub هو مستودع
            مستضاف يتيح التعاون بين المطورين باستخدام Git.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-red-500" /> مصادر لتعلم Git & GitHub
          </h2>
          <div className="my-5 flex flex-col space-y-4">
            <Link
              href="https://www.youtube.com/watch?v=S7XpTAnSDL4"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              دورة Git & GitHub - JavaScript Mastery
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=Q6G-J54vgKc"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              كورس Git & GitHub للمبتدئين
            </Link>
            <Link
              href="https://git-scm.com/doc"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              التوثيق الرسمي لـ Git
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
