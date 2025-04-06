import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaHtml5,
  FaGlobe,
  FaCode,
  FaPalette,
  FaLightbulb,
  FaFileCode,
  FaBook,
  FaCss3,
} from 'react-icons/fa';
export const metadata = {
  title: 'CSS',
  description: '',
  icons: '/Icons/css.svg',
};

export default function Page() {
  return (
    <div
      dir="rtl"
      className=" min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6 flex justify-center items-center flex-col"
    >
      <div className=" max-w-4xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
        <h1
          dir="ltr"
          className="text-xl md:text-4xl font-bold text-center text-gray-900 dark:text-blue-400 mb-6 flex items-center justify-center"
        >
          <FaCss3 className="mr-3 text-blue-500 dark:text-blue-300" /> CSS
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          CSS (أوراق الأنماط المتتالية) هي لغة تستخدم لتنسيق صفحات الويب، مما
          يسمح لك بتحديد الألوان، الأحجام، التخطيطات، والخطوط، بالإضافة إلى
          التأثيرات المرئية المختلفة.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaGlobe className="mr-2 text-green-500" /> متى بدأ استخدامها؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            تم تطوير CSS لأول مرة في عام 1996 بواسطة W3C لتوفير طريقة أكثر كفاءة
            لفصل التنسيق عن المحتوى في صفحات الويب.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCode className="mr-2 text-purple-500" /> مراحل تطور CSS
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>CSS1 - تم إصداره عام 1996</li>
            <li>CSS2 - تم إصداره عام 1998</li>
            <li>CSS3 - تم تقديمه بشكل وحدات منفصلة مع تحديثات مستمرة</li>
            <li>CSS4 - لا يوجد إصدار رسمي ولكن يتم تحديث CSS3 بوحدات جديدة</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> لماذا CSS مهمة؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            CSS تجعل مواقع الويب أكثر جاذبية وسهولة في التصفح، كما تساعد في
            تحسين سرعة تحميل الصفحات وأداء الموقع.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-red-500" /> أساسيات لغة CSS
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>Selectors (المحددات)</li>
            <li>Colors (الألوان)</li>
            <li>Units & Sizes (الوحدات والأحجام)</li>
            <li>Typography (الطباعة)</li>
            <li>Properties & Values (الخصائص والقيم)</li>
            <li>Media Queries (استعلامات الوسائط)</li>
            <li>Box Model (نموذج الصندوق)</li>
            <li>Flexbox و Grid (تصميم التخطيطات)</li>
            <li>Transitions & Animations (التحولات والرسوم المتحركة)</li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-blue-500" /> مثال على صفحة مكتبة
            باستخدام CSS
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto"
          >
            <code>
              {`<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مكتبتي</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; }
    .library-container { width: 80%; margin: auto; padding: 20px; background: white; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    h1 { color: darkblue; }
    .book { background: lightblue; padding: 10px; margin: 10px; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="library-container">
    <h1>مرحبًا بك في مكتبتي</h1>
    <div class="book">كتاب 1 - تعلم CSS</div>
    <div class="book">كتاب 2 - تعلم HTML</div>
    <div class="book">كتاب 3 - تعلم JavaScript</div>
  </div>
</body>
</html>`}
            </code>
          </pre>
        </section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300  flex items-center my-8">
          <FaLightbulb className="mr-2" />
          كيف يفهم المتصفح CSS
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-400 space-y-3 mb-3">
          <li>
            <strong>تحميل وتحليل CSS:</strong> يقوم المتصفح أولاً بتحميل ملفات
            CSS وربطها بالمستند HTML.
          </li>
          <li>
            <strong>تحليل شجرة DOM و CSSOM:</strong> يقوم المتصفح بإنشاء شجرة
            DOM من HTML، وشجرة CSSOM من CSS.
          </li>
          <li>
            <strong>دمج DOM و CSSOM:</strong> يتم دمج الشجرتين لإنشاء شجرة العرض
            (Render Tree).
          </li>
          <li>
            <strong>حساب الأنماط (Style Computation):</strong> يتم تطبيق الأنماط
            بناءً على الأولويات (التحديد، التوريث، والشلالية).
          </li>
          <li>
            <strong>التخطيط (Layout):</strong> يحدد المتصفح المواقع والأحجام
            النهائية للعناصر.
          </li>
          <li>
            <strong>الرسم (Painting):</strong> يتم رسم العناصر على الشاشة بناءً
            على القيم المحسوبة.
          </li>
          <li>
            <strong>التركيب (Compositing):</strong> يتم دمج الطبقات المختلفة
            وتحسين الأداء النهائي.
          </li>
        </ul>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://youtu.be/OXGznpKZ_sA"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة CSS كاملة - freecodecamp
          </Link>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mt-6 flex items-center justify-center">
          مشاريع يمكنك القيام بها
        </h3>
        <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="https://youtu.be/_-eh8cwGGwg?feature=shared"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع بناء موقع -Elzero Web School
          </Link>
          <Link
            href="https://youtu.be/vkc99WHcDTk"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع آخر -Elzero Web School
          </Link>
          <Link
            href="https://youtu.be/DflEcuzjsyA"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع آخر -Elzero Web School
          </Link>
          <Link
            href="https://youtu.be/G3e-cpL7ofc"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مراجعة + مشروع أخير -SuperSimpleDev
          </Link>
        </div>
      </div>
    </div>
  );
}
