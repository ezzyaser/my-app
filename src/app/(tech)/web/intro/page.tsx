import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Introduction to Web Development',
  description:
    'Learn the basics of web development with essential tools and frameworks.',
  icons: '/Icons/web.svg',
};

export default function Page() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl transition-all duration-300 m-5">
      <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-8 text-center">
        🌍 مقدمة في تطوير الويب
      </h1>

      {/** Sections Wrapper */}
      <div className="space-y-6">
        {/** Section Component */}
        {[
          {
            title: '🚀 ما هو تطوير الويب؟',
            content:
              'تطوير الويب هو عملية بناء وصيانة المواقع والتطبيقات على الإنترنت، ويشمل الجوانب التقنية والإبداعية لإنشاء تجربة مستخدم سلسة.',
          },
          {
            title: '🛠️ التقنيات الأساسية',
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-blue-600">HTML:</strong> الهيكل
                  الأساسي لصفحات الويب.
                </li>
                <li>
                  <strong className="text-green-600">CSS:</strong> تصميم وتنسيق
                  الصفحات.
                </li>
                <li>
                  <strong className="text-yellow-600">JavaScript:</strong> إضافة
                  التفاعل والديناميكية.
                </li>
              </ul>
            ),
          },
          {
            title: '🛠️ أدوات التطوير',
            content: (
              <p>
                تشمل الأدوات بيئات التطوير مثل{' '}
                <span className="text-blue-500 font-bold">VS Code</span>، ومديري
                الحزم مثل <span className="text-green-500 font-bold">npm</span>{' '}
                و <span className="text-green-500 font-bold">Yarn</span>،
                وإطارات العمل مثل{' '}
                <span className="text-purple-500 font-bold">React</span> و{' '}
                <span className="text-indigo-500 font-bold">Next.js</span>.
              </p>
            ),
          },
          {
            title: '🔥 أطر العمل الشهيرة',
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-purple-600">React:</strong> مكتبة
                  لبناء واجهات المستخدم.
                </li>
                <li>
                  <strong className="text-green-600">Vue.js:</strong> إطار عمل
                  مرن وسهل التعلم.
                </li>
                <li>
                  <strong className="text-red-600">Angular:</strong> إطار قوي
                  لتطبيقات الويب الكبيرة.
                </li>
              </ul>
            ),
          },
          {
            title: '📌 خطوات بناء موقع ويب',
            content: (
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  🎨{' '}
                  <strong className="text-blue-500">
                    تخطيط وتصميم الواجهة.
                  </strong>
                </li>
                <li>
                  📜{' '}
                  <strong className="text-green-500">
                    كتابة HTML و CSS و JavaScript.
                  </strong>
                </li>
                <li>
                  🔧{' '}
                  <strong className="text-purple-500">
                    اختيار إطار عمل مناسب.
                  </strong>
                </li>
                <li>
                  🗄️{' '}
                  <strong className="text-yellow-500">
                    استخدام قواعد البيانات إذا لزم الأمر.
                  </strong>
                </li>
                <li>
                  🚀{' '}
                  <strong className="text-indigo-500">
                    نشر الموقع باستخدام خدمات مثل Vercel أو Netlify.
                  </strong>
                </li>
              </ol>
            ),
          },
        ].map((section, index) => (
          <section
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {section.title}
            </h2>
            <div className="text-gray-600 dark:text-gray-400">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/** CTA Button */}
      <div className="flex justify-center mt-8">
        <Link
          className={buttonVariants({ variant: 'default' })}
          href="https://youtu.be/ysEN5RaKOlA?feature=shared"
          target="_blank"
        >
          🎥 شاهد هذا الفيديو لمزيد من المعرفة
        </Link>
      </div>
    </div>
  );
}
