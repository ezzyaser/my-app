import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaJs,
  FaGlobe,
  FaCode,
  FaBook,
  FaFileCode,
  FaBolt,
  FaProjectDiagram,
} from 'react-icons/fa';

export const metadata = {
  title: 'JavaScript',
  description: 'تعلم لغة JavaScript وأهميتها في تطوير الويب.',
  icons: '/Icons/js.svg',
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
          className="text-xl md:text-4xl font-bold text-center text-gray-900 dark:text-yellow-400 mb-6 flex items-center justify-center"
        >
          <FaJs className="mr-3 text-yellow-500 dark:text-yellow-300" />{' '}
          JavaScript
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          JavaScript هي لغة برمجة تفاعلية تُستخدم لتطوير مواقع الويب الحديثة،
          وتعد أساس تطوير تطبيقات الويب التفاعلية.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaGlobe className="mr-2 text-green-500" /> متى بدأت JavaScript؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            تم تطوير JavaScript عام 1995 بواسطة Brendan Eich أثناء عمله في
            Netscape، ومنذ ذلك الحين أصبحت واحدة من أهم لغات الويب.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCode className="mr-2 text-purple-500" /> لماذا JavaScript مهمة؟
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>تمكن من إضافة التفاعلية إلى مواقع الويب</li>
            <li>تُستخدم في تطوير تطبيقات الويب والموبايل وسطح المكتب</li>
            <li>تدعم برمجة الخوادم باستخدام Node.js</li>
            <li>تحظى بمجتمع ضخم وأطر عمل قوية مثل React و Vue و Angular</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-red-500" /> أساسيات JavaScript
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>المتغيرات (Variables)</li>
            <li>الدوال (Functions)</li>
            <li>الجمل الشرطية (Conditionals)</li>
            <li>الحلقات التكرارية (Loops)</li>
            <li>الكائنات والمصفوفات (Objects & Arrays)</li>
            <li>الأحداث والتفاعل مع DOM</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-blue-500" /> مثال على كود
            JavaScript
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"
          >
            <code>
              {`// طباعة رسالة في وحدة التحكم
console.log("Hello in JavaScript!");

// تعريف دالة واستدعاؤها
function sayHello(name) {
  return "مرحبًا، " + name + "!";
}
console.log(sayHello("EZZ"));

// إنشاء كائن
const person = { name: "EZZ", age: 21 };
console.log(person.name);
`}
            </code>
          </pre>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBolt className="mr-2 text-yellow-500" /> كيفية عمل JavaScript في
            المتصفح؟
          </h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-400 space-y-3 mb-3">
            <li>
              <strong>تحميل الصفحة:</strong> المتصفح يحمّل HTML و CSS أولًا.
            </li>
            <li>
              <strong>تنفيذ JavaScript:</strong> يتم تشغيل أكواد JavaScript
              لتحسين التفاعل.
            </li>
            <li>
              <strong>التفاعل مع DOM:</strong> يمكن لـ JavaScript تعديل عناصر
              HTML و CSS ديناميكيًا.
            </li>
          </ul>
        </section>

        <div className="my-5 flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            📚 مصادر لتعلم JavaScript
          </h2>
          <Link
            href="https://www.youtube.com/watch?feature=shared&v=EerdGm-ehJQ"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة JavaScript للمبتدئين - SuperSimpleDev
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            التوثيق الرسمي لـ JavaScript - MDN Web Docs
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaProjectDiagram className="mr-2 text-cyan-500" /> مشاريع
            JavaScript
          </h2>
          <div className="flex flex-col space-y-3 mt-4">
            <Link
              href="https://www.youtube.com/watch?v=FazgJVnrVuI"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              مشروع تصميم موقع باستخدام HTML, CSS, و JavaScript
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=NfvtQ2p5QG4"
              className={buttonVariants({ variant: 'default' })}
              target="_blank"
            >
              مشاريع HTML, CSS, JavaScript للمبتدئين
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
