import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'المبادئ العشرة لعلم أصول الفقه',
  description:
    'شرح للمبادئ العشرة لعلم أصول الفقه، وهي القواعد الأساسية التي يعتمد عليها الفقهاء في استنباط الأحكام الشرعية.',
  icons: '/Icons/quran.svg',
};

export default function Page() {
  const principles = [
    'تعريف العلم: علم أصول الفقه هو القواعد التي يُتوصل بها إلى استنباط الأحكام الشرعية العملية من أدلتها التفصيلية.',
    'موضوعه: الأدلة الشرعية من الكتاب والسنة والإجماع والقياس وغيرها.',
    'ثمرته: استنباط الأحكام الشرعية.',
    'نسبته: من العلوم الشرعية.',
    'واضعه: الأئمة المجتهدون.',
    'اسمه: علم أصول الفقه.',
    'استمداده: من الأدلة الشرعية وعلم اللغة وعلم المنطق.',
    'حكم تعلمه: فرض كفاية.',
    'مسائله: تشمل الأدلة الشرعية وأحكام الاجتهاد والتقليد.',
    'فضله: من أشرف العلوم لارتباطه بالفقه واستنباط الأحكام الشرعية.',
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700 dark:text-indigo-400">
        علم أصول الفقه
      </h1>

      <Card className="max-w-2xl w-full shadow-lg rounded-xl bg-white dark:bg-gray-800 p-6">
        <CardContent>
          <p className="text-lg leading-relaxed">
            هو العلم الذي يضع القواعد التي يعتمد عليها الفقهاء في استنباط
            الأحكام الشرعية من الأدلة التفصيلية.
          </p>
          <ul className="list-decimal list-inside mt-4 space-y-2">
            {principles.map((principle, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {principle}
              </li>
            ))}
          </ul>
        </CardContent>
        <div className="flex flex-col mt-6 space-y-2 text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            يمكنك بدء التعلم من هنا 🚀
          </h2>
          <Link
            className={
              buttonVariants({ variant: 'outline' }) +
              ' text-blue-600 dark:text-blue-400'
            }
            href="https://youtube.com/playlist?list=PL0-ZBZXy0yoOQ4vY3HhUjjchFVXtOnjFj&feature=shared"
            target="_blank"
          >
            مقدمة إلى علم أصول الفقه 🔗
          </Link>

          <Link
            href="/pdfs/الورقات في أصول الفقه.pdf"
            className={
              buttonVariants({ variant: 'outline' }) +
              ' text-blue-600 dark:text-blue-400'
            }
            download
            target="_blank"
          >
            تحميل كتاب الورقات في أصول الفقه 📖
          </Link>
        </div>
      </Card>
    </div>
  );
}
