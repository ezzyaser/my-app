import React from 'react';
// https://youtube.com/playlist?list=PLZmiPrHYOIsTLkDfoVokFQSxPuJYZxV5k&feature=shared
export const metadata = {
  title: 'علم التزكية والأخلاق',
  description:
    'تعرف على علم التزكية وأهميته في تهذيب النفس وتحقيق الأخلاق الفاضلة، مع مصادر موثوقة وكتاب للتحميل.',
  icons: '/Icons/quran.svg',
};

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const principles = [
    'التوبة والرجوع إلى الله.',
    'الزهد في الدنيا وترك متاعها الفاني.',
    'الصدق في القول والعمل.',
    'التواضع وحسن المعاملة مع الآخرين.',
    'الصبر على المصائب والابتلاءات.',
    'الاعتراف بالخطأ والتوبة عنه.',
    'النية الصافية في العمل.',
    'الإخلاص في العبادة.',
    'المسارعة إلى الخيرات.',
    'الاعتدال في كل شيء.',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>ما هو علم التزكية؟</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            علم التزكية هو العلم الذي يهتم بتهذيب النفس وتطهيرها من الأخلاق
            السيئة، والسعي لاكتساب الفضائل، وذلك من خلال تزكية القلب والعمل
            بالأخلاق الإسلامية.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>أهمية دراسة علم التزكية</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>تحقيق نقاء القلب وصفاء الروح.</li>
            <li>تنمية الأخلاق الفاضلة كالصبر والتواضع والصدق.</li>
            <li>التقرب إلى الله من خلال تزكية النفس.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المبادئ الأساسية في علم التزكية</CardTitle>
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
          href="https://youtube.com/playlist?list=PLHQMiM0X94crXZyKlVaWYoLnVOWLTLnAy&si=C8IDF0qWr_dqd_8a"
          target="_blank"
        >
          تزكية النفس 🔗
        </Link>

        <Link
          href="/pdfs/تهذيب مدارج السالكين.pdf"
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          download
          target="_blank"
        >
          تهذيب مدارج السالكين📖
        </Link>
      </div>
    </div>
  );
}
