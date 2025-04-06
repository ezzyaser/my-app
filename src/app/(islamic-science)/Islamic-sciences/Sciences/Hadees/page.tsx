import React from 'react';
export const metadata = {
  title: 'علوم الحديث',
  description:
    'تعرف على علوم الحديث وأهميتها في حفظ السنة النبوية، مع مصادر موثوقة وكتاب للتحميل.',
  icons: '/Icons/quran.svg',
};

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const principles = [
    'تعريف العلم: علوم الحديث هي العلوم التي تهتم بدراسة الأحاديث النبوية من حيث سندها ومتنها.',
    'موضوعه: يختص بدراسة صحة الأحاديث، وتمييز الصحيح من الضعيف.',
    'ثمرته: نقل السنة النبوية بشكل دقيق وصحيح للأجيال.',
    'نسبته: ينتمي إلى علم الحديث وعلم الرجال وعلم الجرح والتعديل.',
    'واضعه: بدأ علم الحديث على يد الصحابة، وتم تطويره على يد العلماء مثل البخاري ومسلم.',
    'اسمه: علم الحديث.',
    'استمداده: يستمد من السند والمصادر الشرعية المعتمدة.',
    'حكم تعلمه: فرض كفاية لمن يريد نقل السنة النبوية أو استنباط الأحكام منها.',
    'مسائله: تشمل دراسة السند، المتن، الأسانيد، شروط الصحيح، والحديث الضعيف.',
    'فضله: يعد من أهم العلوم لحفظ السنة النبوية وتوثيقها.',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 text-gray-900 dark:text-gray-100">
      <Card>
        <CardHeader>
          <CardTitle>ما هي علوم الحديث؟</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            علوم الحديث هي العلوم التي تهتم بدراسة الأحاديث النبوية من حيث سندها
            ومتنها، ومعرفة الصحيح منها والضعيف، وذلك لضمان نقل السنة النبوية
            بشكل دقيق وصحيح.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المبادئ العشرة لعلوم الحديث</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-decimal list-inside space-y-2">
            {principles.map((principle, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {principle}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>أهمية دراسة علوم الحديث</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>معرفة الصحيح من الحديث والضعيف والموضوع.</li>
            <li>فهم كيفية نقل السنة النبوية عبر الأجيال.</li>
            <li>القدرة على التمييز بين درجات الحديث المختلفة.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col mt-4 space-y-2 text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          يمكنك أخذ فكرة عامة من هنا
        </h2>
        <Link
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          href="https://youtube.com/playlist?list=PLZmiPrHYOIsTRR7mHqssyC8Jni5Myu3de&feature=shared"
          target="_blank"
        >
          مراجعة تحرير علوم الحديث 🔗
        </Link>

        <Link
          href="/pdfs/تحرير علوم الحديث.pdf"
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          download
          target="_blank"
        >
          تحرير علوم الحديث📖
        </Link>
      </div>
    </div>
  );
}
