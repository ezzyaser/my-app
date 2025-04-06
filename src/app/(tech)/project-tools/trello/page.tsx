import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaLightbulb,
  FaBook,
  FaFileCode,
  FaCode,
  FaRocket,
  FaTools,
  FaTasks,
} from 'react-icons/fa';
import { SiTrello } from 'react-icons/si';

export const metadata = {
  title: 'Trello - أدوات تطوير المشاريع',
  description:
    'تعرف على Trello لتنظيم المشاريع والمهام باستخدام نظام البطاقات.',
  icons: '/Icons/trello.svg',
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
          <SiTrello className="mr-3 text-blue-600 dark:text-blue-300" /> Trello
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Trello هو تطبيق لإدارة المشاريع والمهام يعتمد على أسلوب البطاقات
          (Cards) والقوائم (Lists) داخل لوحات (Boards)، مما يجعله سهل الاستخدام
          لتنظيم الأعمال سواء الفردية أو الجماعية.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> متى ظهر Trello؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            تم إطلاق Trello عام 2011 بواسطة شركة Fog Creek Software، وسرعان ما
            أصبح شائعًا بسبب بساطته وسهولة تعامله مع فرق العمل.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaTools className="mr-2 text-purple-500" /> ميزات Trello الرئيسية
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>تنظيم المهام باستخدام لوحات وبطاقات مرنة</li>
            <li>إمكانية التعاون مع فرق العمل بسهولة</li>
            <li>دعم الإضافات (Power-Ups) لتوسيع الوظائف</li>
            <li>تكامل مع أدوات مثل Slack و Google Drive</li>
            <li>مزامنة تلقائية بين الأجهزة</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-red-500" /> كيف تستخدم Trello؟
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>أنشئ لوحة جديدة لأي مشروع أو موضوع</li>
            <li>قسّم المهام إلى قوائم (To Do, Doing, Done)</li>
            <li>أضف بطاقات لكل مهمة، مع تفاصيل، مواعيد، وتعليقات</li>
            <li>اسحب البطاقات بين القوائم لتتبع التقدم</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-blue-500" /> مثال على لوحة Trello
            بسيطة
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"
          >
            <code>
              {`🧠 To Do:
- كتابة مقال جديد ✍️
- تصميم شعار للموقع 🎨

🔄 Doing:
- إعداد صفحة Trello ✅

✅ Done:
- إنشاء حساب Trello 📋`}
            </code>
          </pre>
        </section>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center my-8">
          <FaTasks className="mr-2" />
          لماذا Trello مناسب لإدارة الوقت؟
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-400 space-y-3 mb-3">
          <li>يساعد على رؤية كل المهام في مكان واحد.</li>
          <li>سهل التعديل والسحب والإفلات.</li>
          <li>يوضح أولويات العمل بوضوح.</li>
          <li>مفيد للفرق والمشاريع الفردية.</li>
        </ul>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://trello.com"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            زيارة الموقع الرسمي لـ Trello
          </Link>
          <Link
            href="https://youtu.be/en3z928rwus?feature=shared"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة Trello للمبتدئين - Kevin Stratvert
          </Link>
        </div>
      </div>
    </div>
  );
}
