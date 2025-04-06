export const metadata = {
  title: 'علم آداب البحث والمناظرة',
  description:
    'تعرف على علم آداب البحث والمناظرة وأهميته في الحوار العلمي، مع مصادر موثوقة وكتاب للتحميل.',
  icons: '/Icons/quran.svg',
};

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const principles = [
    'تعريف العلم: هو معرفة القواعد التي تُضبط بها المناظرة ويُميز بها الحق من الباطل عند الاختلاف.',
    'موضوعه: الحجج والدعاوى وأساليب المناظرة.',
    'ثمرته: الوصول إلى الحق وقطع النزاع بالوجه الصحيح.',
    'نسبته: من علوم الآلة التي تعين على ضبط العلوم الشرعية والعقلية.',
    'واضعه: وُضع تدريجياً على يد العلماء المسلمين لتقنين آداب المناظرة.',
    'اسمه: علم آداب البحث والمناظرة، ويُسمى أيضاً علم الجدل.',
    'استمداده: من العقل والنقل والتجارب الحوارية بين العلماء.',
    'حكم تعلمه: فرض كفاية، ويتأكد في حق من يمارس التعليم أو الحوار العلمي.',
    'مسائله: تشمل تعريفات الحجة، الدعوى، المعارضة، النقل، والرد وغير ذلك.',
    'فضله: يعين على الحوار المنهجي ويمنع من الوقوع في التشويش والمغالطات.',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 text-gray-900 dark:text-gray-100">
      <Card>
        <CardHeader>
          <CardTitle>ما هو علم آداب البحث والمناظرة؟</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            علم آداب البحث والمناظرة هو العلم الذي يحدد القواعد والأسس التي يجب
            اتباعها أثناء البحث العلمي أو المناظرات الفكرية، لضمان الموضوعية
            والحياد، وتجنب المغالطات والأخطاء المنطقية.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المبادئ العشرة لعلم آداب البحث والمناظرة</CardTitle>
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
          <CardTitle>أهمية تعلم هذا العلم</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>تعزيز مهارات البحث العلمي المنهجي.</li>
            <li>تحسين القدرة على الحوار والنقاش المنطقي.</li>
            <li>تجنب المغالطات والتضليل في الجدال.</li>
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
          href="https://youtube.com/playlist?list=PLlQGKXR9nKruxougVXSUFgumNks93NBI7&feature=shared"
          target="_blank"
        >
          مقدمة في علم آداب البحث والمناظرة 🔗
        </Link>

        <Link
          href="/pdfs/رسالة آداب البحث والمناظرة.pdf"
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          download
          target="_blank"
        >
          رسالة آداب البحث والمناظرة📖
        </Link>
      </div>
    </div>
  );
}
