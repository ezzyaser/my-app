export const metadata = {
  title: 'علم المنطق',
  description:
    'تعرف على علم المنطق وأهميته في التفكير السليم، مع مصادر موثوقة وكتاب للتحميل.',
  icons: '/Icons/quran.svg',
};

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const principles = [
    'تعريف العلم: علم المنطق هو القواعد التي تعصم الذهن عن الوقوع في الخطأ.',
    'موضوعه: القضايا الفكرية والاستدلالات العقلية.',
    'ثمرته: التمييز بين الاستدلال الصحيح والفاسد.',
    'نسبته: من العلوم العقلية.',
    'واضعه: أرسطو هو أول من وضع أسس علم المنطق.',
    'اسمه: علم المنطق.',
    'استمداده: يستمد من التجربة والعقل والفلسفة.',
    'حكم تعلمه: فرض كفاية لمن يحتاج إليه في استنباط الأحكام وتحليل القضايا.',
    'مسائله: تشمل القضايا، الأحكام، الاستدلالات، والبراهين.',
    'فضله: من أهم العلوم التي تنمي مهارات التفكير النقدي والاستدلالي.',
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700 dark:text-indigo-400">
        علم أصول الفقه
      </h1>

      <Card className="max-w-2xl w-full shadow-lg rounded-xl bg-white dark:bg-gray-800 p-6">
        <CardContent>
          <p className="text-lg leading-relaxed mb-2">
            علم المنطق هو العلم الذي يدرس قواعد التفكير الصحيح، ويُعتبر أداة
            ضرورية لضبط الاستدلالات وضمان عدم الوقوع في المغالطات. تأسس على يد
            الفيلسوف أرسطو وتم تطويره عبر العصور ليشمل مجالات متعددة مثل المنطق
            الرمزي والرياضي.
          </p>
          <ul className="list-decimal list-inside space-y-2">
            {principles.map((principle, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {principle}
              </li>
            ))}
          </ul>
        </CardContent>
        <div className="flex flex-col mt-6 space-y-2 text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            يمكنك أخذ فكرة عامة من هنا
          </h2>
          <Link
            className={
              buttonVariants({ variant: 'outline' }) +
              ' text-blue-600 dark:text-blue-400'
            }
            href="https://youtube.com/playlist?list=PL2-FkZlJhxqX0XQozSqviXkqxxRAmiTsU&feature=shared"
            target="_blank"
          >
            مقدمة إلى علم المنطق 🔗
          </Link>

          <Link
            href="/pdfs/السلم المنورق في علم المنطق.pdf"
            className={
              buttonVariants({ variant: 'outline' }) +
              ' text-blue-600 dark:text-blue-400'
            }
            download
            target="_blank"
          >
            السلم المنورق في علم المنطق📖
          </Link>
        </div>
      </Card>
    </div>
  );
}
