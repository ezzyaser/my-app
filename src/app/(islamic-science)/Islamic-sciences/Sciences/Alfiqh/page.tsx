import React from 'react';
export const metadata = {
  title: 'علم الفقه',
  description:
    'تعرف على علم الفقه وأهميته في تنظيم حياة المسلم وفق الأحكام الشرعية، مع مصادر موثوقة وكتاب للتحميل.',
  icons: '/Icons/quran.svg',
};

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const principles = [
    'الوضوء والطهارة.',
    'الصلاة وأركانها.',
    'الزكاة وكيفية إخراجها.',
    'الصوم في رمضان ومشروعيته.',
    'الحج وأركانه.',
    'البيع والشراء وفقًا للشريعة.',
    'العقوبات الشرعية.',
    'الطلاق وأحكامه.',
    'الإرث والميراث.',
    'الاجتهاد الفقهي وكيفية الاستنباط.',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>ما هو علم الفقه؟</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            علم الفقه هو العلم الذي يتناول الأحكام الشرعية العملية المستنبطة من
            الأدلة التفصيلية، ويهدف إلى تنظيم حياة المسلم وفقًا للشريعة
            الإسلامية.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>أهمية دراسة علم الفقه</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>فهم الأحكام الشرعية في العبادات والمعاملات.</li>
            <li>ضبط السلوك اليومي وفقًا للشريعة الإسلامية.</li>
            <li>القدرة على الاجتهاد في المسائل الفقهية.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المبادئ الأساسية في علم الفقه</CardTitle>
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
          href="https://youtube.com/playlist?list=PL92HwYx3aJlsuy9G81ewDeZR4GJhhlgLp&feature=shared"
          target="_blank"
        >
          شرح متن أبي شجاع 🔗
        </Link>

        <Link
          href="/pdfs/متن أبي شجاع.pdf"
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          download
          target="_blank"
        >
          متن أبي شجاع📖
        </Link>
      </div>
    </div>
  );
}
