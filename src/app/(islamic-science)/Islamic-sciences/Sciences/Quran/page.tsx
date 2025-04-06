import React from 'react';
export const metadata = {
  title: 'علوم القرآن',
  description:
    'تعرف على علوم القرآن وأهميتها في فهم النصوص الشرعية، مع مصادر موثوقة وكتاب للتحميل.',
  icons: '/Icons/quran.svg',
};

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const principles = [
    'تعريف العلم: علوم القرآن هي العلوم التي تبحث في القرآن الكريم من حيث نزوله، تدوينه، تفسيره، إعجازه، وناسخه ومنسوخه.',
    'موضوعه: القرآن الكريم بجوانبه المختلفة من أسباب النزول، المكي والمدني، المحكم والمتشابه، وغيرها.',
    'ثمرته: فهم كلام الله تعالى بصورة أعمق وأدق، واستنباط الأحكام الشرعية الصحيحة.',
    'نسبته: من العلوم الشرعية الأساسية التي تتعلق بأصل التشريع.',
    'واضعه: الصحابة والتابعون أول من أسس قواعده، ثم دونها العلماء في كتب مستقلة.',
    'اسمه: يُعرف باسم "علوم القرآن" أو "مباحث في علوم القرآن".',
    'استمداده: من القرآن نفسه، ومن السنة، وأقوال الصحابة والعلماء.',
    'حكم تعلمه: فرض كفاية، ويكون فرض عين على من يشتغل بالتفسير والفتوى.',
    'مسائله: تشمل أسباب النزول، جمع القرآن، إعجازه، القراءات، وغيرها.',
    'فضله: من أعظم العلوم الشرعية لأنه متعلق بكلام الله عز وجل مباشرة.',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 text-gray-900 dark:text-gray-100">
      <Card>
        <CardHeader>
          <CardTitle>ما هي علوم القرآن؟</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            علوم القرآن هي مجموعة من العلوم التي تهتم بدراسة القرآن الكريم من
            حيث نزوله، تدوينه، تفسيره، وناسخه ومنسوخه، وغيرها من العلوم التي
            تساعد في فهم كلام الله عز وجل.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المبادئ العشرة لعلوم القرآن</CardTitle>
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
          <CardTitle>أهمية دراسة علوم القرآن</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>فهم أسباب النزول والسياق التاريخي للآيات.</li>
            <li>تمييز المحكم والمتشابه في النصوص القرآنية.</li>
            <li>التعرف على أساليب التفسير المختلفة.</li>
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
          href="https://youtube.com/playlist?list=PL2-FkZlJhxqWiY01BSOCoafBcY3UXQXVl&feature=shared"
          target="_blank"
        >
          علوم القرآن 🔗
        </Link>

        <Link
          href="/pdfs/مباحث_في_علوم_القرآن.pdf"
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          download
          target="_blank"
        >
          مباحث في علوم القرآن📖
        </Link>
      </div>
    </div>
  );
}
