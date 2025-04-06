import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaNodeJs,
  FaServer,
  FaBolt,
  FaBook,
  FaCode,
  FaDatabase,
} from 'react-icons/fa';

export const metadata = {
  title: 'Node.js & Express',
  description: 'تعلم Node.js و Express.js لبناء تطبيقات الويب الحديثة.',
  icons: '/Icons/nod.svg',
};

export default function Page() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 p-8 flex justify-center items-center flex-col"
    >
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 border border-gray-300 dark:border-gray-700 space-y-10">
        {/* العنوان */}
        <h1
          dir="ltr"
          className="text-2xl md:text-5xl font-bold text-center text-gray-900 dark:text-green-400 flex items-center justify-center space-x-3"
        >
          <FaNodeJs className="text-green-500 dark:text-green-300" />
          <span>Node.js & Express</span>
        </h1>

        {/* المقدمة */}
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Node.js هو بيئة تشغيل مبنية على محرك V8 الخاص بجوجل، ويستخدم
          JavaScript لإنشاء تطبيقات خادم قوية. أما Express.js فهو إطار عمل خفيف
          الوزن يسهل إنشاء API وخدمات الويب.
        </p>

        {/* لماذا Node.js؟ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-3">
            <FaBolt className="text-yellow-500" />
            <span>لماذا Node.js؟</span>
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
            <li>يعمل بسرعة عالية نظرًا لاعتماده على محرك V8.</li>
            <li>
              يدعم البرمجة غير المتزامنة (Asynchronous) مما يجعله مناسبًا
              لتطبيقات الزمن الحقيقي.
            </li>
            <li>يعمل على الخادم باستخدام لغة JavaScript فقط.</li>
            <li>يحتوي على نظام حزم NPM الضخم لدعم المكاتب المختلفة.</li>
          </ul>
        </section>

        {/* ما هو Express.js؟ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-3">
            <FaServer className="text-blue-500" />
            <span>ما هو Express.js؟</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Express.js هو إطار عمل خفيف لـ Node.js يساعد في بناء تطبيقات ويب API
            بسهولة مع توفير طرق تحكم في الطلبات والاستجابات.
          </p>
        </section>

        {/* مثال على كود */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-3">
            <FaCode className="text-purple-500" />
            <span>مثال على كود Node.js & Express</span>
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg overflow-x-auto text-sm"
          >
            <code>
              {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello in Server!');
});

app.listen(3000, () => {
  console.log('الخادم يعمل على المنفذ 3000');
});`}
            </code>
          </pre>
        </section>

        {/* استخدام قواعد البيانات */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center space-x-3">
            <FaDatabase className="text-red-500" />
            <span>استخدام Node.js مع قواعد البيانات</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            يمكن لـ Node.js الاتصال بقاعدة بيانات مثل MongoDB باستخدام مكتبة
            Mongoose أو مع MySQL عبر مكتبة Sequelize.
          </p>
        </section>

        {/* مصادر التعلم */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            📚 مصادر لتعلم Node.js & Express
          </h2>

          {/* التوثيق الرسمي */}
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg border border-gray-300 dark:border-gray-600 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 flex items-center space-x-3">
              <FaBook className="text-blue-500" />
              <span>التوثيق الرسمي</span>
            </h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="https://nodejs.org/en/docs"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                target="_blank"
              >
                التوثيق الرسمي لـ Node.js
              </Link>
              <Link
                href="https://expressjs.com/"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                target="_blank"
              >
                التوثيق الرسمي لـ Express.js
              </Link>
            </div>
          </div>

          {/* دورات تعليمية */}
          <div className=" flex flex-col gap-5 ">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 flex items-center justify-center ">
              🎓 دورات تعليمية
            </h3>
            <Link
              href="https://www.youtube.com/watch?v=rOpEN1JDaD0"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              دورة Node.js & Express للمبتدئين - JavaScript Mastery
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=Oe421EPjeBE"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              دورة Node.js & Express للمبتدئين - freeCodeCamp.org
            </Link>
          </div>
        </div>

        {/* مشاريع للتطبيق */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 flex items-center justify-center ">
            🛠️ مشاريع لتطبيق المهارات
          </h3>
          <Link
            href="https://www.youtube.com/watch?v=qwfE7fSVaZM"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            إنشاء مشروع كامل باستخدام Node.js & Express
          </Link>
        </div>
      </div>
    </div>
  );
}
