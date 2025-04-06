export const metadata = {
  title: 'علم العقيدة',
  description:
    'تعرف على علم العقيدة وأهميته في تأسيس الإيمان الصحيح، مع مصادر موثوقة وكتاب للتحميل.',
  icons: '/Icons/quran.svg',
};

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const principles = [
    'الإيمان بالله تعالى وحده لا شريك له.',
    'الإيمان بالملائكة عليهم السلام.',
    'الإيمان بالكتب السماوية.',
    'الإيمان بالرسل والأنبياء.',
    'الإيمان باليوم الآخر.',
    'الإيمان بالقدر خيره وشره.',
    'التوحيد في العبادة.',
    'الإيمان بالآخرة والحساب.',
    'التوكل على الله سبحانه وتعالى.',
    'الاعتقاد بأهل السنة والجماعة.',
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>ما هو علم العقيدة؟</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            علم العقيدة هو العلم الذي يهتم بدراسة أصول الإيمان والتوحيد، وما يجب
            على المسلم اعتقاده في الله، والملائكة، والكتب السماوية، والرسل،
            واليوم الآخر، والقدر خيره وشره.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>أهمية دراسة علم العقيدة</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>ترسيخ الإيمان بالله وتوحيده.</li>
            <li>الرد على الشبهات العقدية المختلفة.</li>
            <li>تحقيق الفهم الصحيح للدين الإسلامي.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المبادئ العشرة في علم العقيدة</CardTitle>
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
          يمكنك أخذ فكرة عامة من هنا{' '}
        </h2>
        <Link
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          href="https://youtube.com/playlist?list=PLx3Fh1kiMbrdPTuARDxYFXttvzxWwD1Jt&feature=shared"
          target="_blank"
        >
          شرح المختصر في العقيدة 🔗
        </Link>

        <Link
          href="/pdfs/عقيدة المسلم.pdf"
          className={
            buttonVariants({ variant: 'outline' }) +
            ' text-blue-600 dark:text-blue-400'
          }
          download
          target="_blank"
        >
          عقيدة المسلم📖
        </Link>
      </div>
    </div>
  );
}
