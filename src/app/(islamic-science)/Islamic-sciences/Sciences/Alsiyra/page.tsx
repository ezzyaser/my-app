import React from 'react';
export const metadata = {
  title: 'علم السيرة النبوية',
  description:
    'تعرف على علم السيرة النبوية وأهميته في فهم حياة الرسول ﷺ، مع مصادر موثوقة وكتاب للتحميل.',
  icons: '/Icons/quran.svg',
};

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const principles = [
    'التعرف على مولد النبي ﷺ ونشأته في مكة المكرمة.',
    'دراسة الوحي الأول ونزول القرآن على النبي ﷺ.',
    'الهجرة إلى المدينة وأثرها في تاريخ الإسلام.',
    'الدعوة في مكة والصبر على الأذى.',
    'غزوة بدر وأهميتها في تثبيت دعائم الدولة الإسلامية.',
    'غزوة أحد ودروسها في الثبات والتضحية.',
    'غزوة الخندق والتحالفات السياسية في الإسلام.',
    'التعامل مع أهل الكتاب وفتح مكة.',
    'مكارم أخلاق النبي ﷺ وكيفية تطبيقها في الحياة اليومية.',
    'وفاة النبي ﷺ ووصاياه لأمته.',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>ما هو علم السيرة النبوية؟</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            علم السيرة النبوية هو العلم الذي يدرس حياة النبي محمد ﷺ، وأخلاقه،
            وأعماله، وغزواته، وسيرته العطرة، للاستفادة منها في حياتنا اليومية.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>أهمية دراسة علم السيرة</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>التعرف على حياة النبي ﷺ والتأسي به.</li>
            <li>فهم سياق نزول الأحكام والتشريعات الإسلامية.</li>
            <li>الاستفادة من دروس السيرة في التعامل مع الآخرين.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المبادئ الأساسية لعلم السيرة النبوية</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            {principles.map((principle, index) => (
              <li key={index} className="text-gray-800 dark:text-white">
                {principle}
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <div className="flex flex-col mt-4 space-y-2 text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          يمكنك بدء التعلم من هنا🚀{' '}
        </h2>
        <Link
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          href="https://youtube.com/playlist?list=PLbDRORmj0gydAp_9O0Vc4fq4qE3zmrTdw&feature=shared"
          target="_blank"
        >
          السيرة النبوية 🔗
        </Link>

        <Link
          href="/pdfs/الأنوار المحمدية.pdf"
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          download
          target="_blank"
        >
          الأنوار المحمدية📖
        </Link>
      </div>
    </div>
  );
}
