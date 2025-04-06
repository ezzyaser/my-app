import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import {
  FaHtml5,
  FaGlobe,
  FaCode,
  FaPalette,
  FaLightbulb,
  FaFileCode,
  FaBook,
} from 'react-icons/fa';
export const metadata = {
  title: 'HTML',
  description: '',
  icons: '/Icons/html.svg',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r  p-6 flex justify-center items-center flex-col">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
        <h1
          dir="ltr"
          className="text-4xl font-bold text-center text-gray-900 dark:text-blue-300 mb-4 flex items-center justify-center"
        >
          <FaHtml5 className="mr-2 text-orange-500" /> HTML
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          HTML (HyperText Markup Language) هي اللغة الأساسية المستخدمة في إنشاء
          صفحات الويب.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mt-6 flex items-center">
          <FaGlobe className="mr-2" /> متى بدأ استخدامها؟
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
          بدأت لغة HTML في أواخر الثمانينيات وأوائل التسعينيات عندما كانت شبكات
          الإنترنت لا تزال في بداياتها. في ذلك الوقت، احتاج العلماء إلى طريقة
          لمشاركة الأبحاث والمستندات عبر شبكة متصلة من الحواسيب. ولتحقيق ذلك،
          قام <span className="font-semibold">تيم بيرنرز لي</span> عام 1989
          باقتراح فكرة
          <span className="font-bold">
            "الشبكة العنكبوتية العالمية" (World Wide Web - WWW)
          </span>
          ، والتي تعتمد على ثلاثة مكونات أساسية:
        </p>

        <ul className="text-gray-700 dark:text-gray-300 mt-2 list-disc pl-5 space-y-2">
          <li>
            <span className="font-bold">HTML (HyperText Markup Language)</span>:
            هي لغة ترميز تُستخدم لإنشاء هيكل صفحات الويب وتحديد مكوناتها، مثل
            العناوين، النصوص، الصور، والروابط.
          </li>
          <li>
            <span className="font-bold">
              HTTP (HyperText Transfer Protocol)
            </span>
            : هو البروتوكول المسؤول عن نقل البيانات بين متصفح المستخدم وخادم
            الويب، مما يتيح تحميل الصفحات وعرضها بشكل صحيح.
          </li>
          <li>
            <span className="font-bold">متصفح الويب</span>: هو البرنامج الذي
            يتيح للمستخدمين تصفح الإنترنت وعرض صفحات الويب، مثل
            <span className="italic">
              Google Chrome، Mozilla Firefox، Microsoft Edge
            </span>
            .
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mt-6 flex items-center">
          <FaCode className="mr-2" /> مراحل تطور HTML
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mt-2">
          <li>
            <strong>HTML 1.0:</strong> الإصدار الأول عام 1993.
          </li>
          <li>
            <strong>HTML 2.0:</strong> تم تحسين دعم النماذج عام 1995.
          </li>
          <li>
            <strong>HTML 3.2:</strong> دعم الجداول والخطوط عام 1997.
          </li>
          <li>
            <strong>HTML 4.01:</strong> دعم CSS وإمكانية الوصول عام 1999.
          </li>
          <li>
            <strong>HTML5:</strong> دعم الوسائط المتعددة وتحسين الأداء عام 2014.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mt-6 flex items-center">
          <FaLightbulb className="mr-2" /> لماذا HTML مهمة؟
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          HTML هي حجر الأساس في تطوير الويب، حيث تحدد هيكلة المحتوى وتسمح بإضافة
          عناصر تفاعلية عند دمجها مع CSS وJavaScript.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mt-6 flex items-center">
          <FaBook className="mr-2" /> أساسيات لغة HTML
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mt-2">
          <li>
            <strong>العناصر (Elements):</strong> كل مكون في HTML يتم تمثيله
            بعنصر.
          </li>
          <li>
            <strong>الوسوم (Tags):</strong> يتم استخدام الوسوم مثل &lt;p&gt; و
            &lt;h1&gt; لتحديد نوع المحتوى.
          </li>
          <li>
            <strong>السمات (Attributes):</strong> توفر معلومات إضافية عن العناصر
            مثل class و id.
          </li>
          <li>
            <strong>الروابط (Links):</strong> يتم استخدام &lt;a&gt; لإنشاء روابط
            بين الصفحات.
          </li>
          <li>
            <strong>الصور (Images):</strong> يتم استخدام &lt;img&gt; لعرض الصور
            في الصفحة.
          </li>
          <li>
            <strong>القوائم (Lists):</strong> يتم استخدام &lt;ul&gt; و
            &lt;ol&gt; لإنشاء القوائم.
          </li>
          <li>
            <strong>الجداول (Tables):</strong> يتم استخدام &lt;table&gt; لإنشاء
            الجداول.
          </li>
          <li>
            <strong>النماذج (Forms):</strong> يتم استخدام &lt;form&gt; لجمع
            بيانات المستخدم.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mt-6 flex items-center">
          <FaFileCode className="mr-2" /> مثال على صفحة HTML
        </h2>
        <pre
          dir="ltr"
          className="bg-gray-900 text-green-300 p-4 rounded-lg mt-2 overflow-auto text-sm"
        >
          {`
<!DOCTYPE html>
<!-- تحديد ترميز النص لدعم اللغة العربية -->
<html lang="ar">
  <head>
    <meta charset="UTF-8">
    
    <!-- جعل الصفحة متجاوبة مع جميع الأجهزة -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- عنوان الصفحة الذي يظهر في المتصفح -->
    <title>عنوان الموقع</title>
    
    <!-- هنا لتنسيق الصفحة CSS يمكن إضافة ملفات    -->
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- عنوان رئيسي للصفحة -->
    <h1>مرحبًا بك في موقعنا</h1>
    
    <!-- فقرة نصية -->
    <p>هذه صفحة بسيطة.</p>
    
    <!-- يمكن إضافة المزيد من المحتوى هنا مثل الصور والأزرار والقوائم -->
  </body>
</html>
`}
        </pre>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 mt-6 flex items-center">
          <FaLightbulb className="mr-2" />
          كيف يفهم المتصفح HTML
        </h2>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mt-2">
          <li>
            <strong>1. طلب الصفحة:</strong> يرسل المتصفح طلبًا إلى الخادم
            باستخدام <strong>بروتوكول HTTP/HTTPS</strong>.
          </li>
          <li>
            <strong>2. استقبال كود HTML:</strong> يستلم المتصفح{' '}
            <strong>ملف HTML الخام</strong> من الخادم.
          </li>
          <li>
            <strong>3. تحليل الكود:</strong> يقوم المتصفح{' '}
            <strong>بتحليل HTML</strong> وبناء{' '}
            <strong>شجرة DOM (نموذج كائن المستند)</strong>.
          </li>
          <li>
            <strong>4. تطبيق الأنماط:</strong> يعالج المتصفح{' '}
            <strong>قواعد CSS</strong> لتنسيق الصفحة (مثل الألوان، الخطوط،
            التخطيط).
          </li>
          <li>
            <strong>5. تنفيذ JavaScript:</strong> إذا كان هناك كود JavaScript،
            يقوم المتصفح بتشغيله لإضافة التفاعل.
          </li>
          <li>
            <strong>6. عرض الصفحة:</strong> يتم عرض الصفحة النهائية على الشاشة
            للمستخدم.
          </li>
        </ul>
      </div>
      <div className="m-2 ">
        <Link
          href="https://youtu.be/kUMe1FH4CHE?feature=shared"
          className={buttonVariants({ variant: 'default' })}
          target="_blank"
        >
          مصادر للتعلم
        </Link>
      </div>
    </div>
  );
}
