import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ArabicSciene from '@/config/ArabicScience';
import Link from 'next/link';

export const metadata = {
  title: 'علوم اللغة العربية',
  description: 'تعلم علوم اللغة العربية بسهولة',
  icons: '/Icons/quran.svg',
};

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="p-4 md:p-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            اللغة العربية
          </h2>
          <q className="block md:text-2xl font-semibold text-gray-800 dark:text-gray-300 leading-relaxed mt-3">
            من أحب الله أحب رسوله المصطفى-صلى الله عليه وسلم- ومن أحبَّ النبي
            العربي أحبَّ العرب، ومن أحبَّ العرب أحبَّ العربية التي بها نزل أفضل
            الكتب على أفضل العجم والعرب، ومن أحبَّ العربية عُنيَ بها، وثابر
            عليها، وصرف همَّته إليها، ومن هداه الله للإسلام، وشرح صدره للإيمان،
            وآتاه حسن سريرة فيه، اعتقد أن محمداً - صلى الله عليه وسلم -خير
            الرسل، والإسلام خير الملل، والعرب خير الأمم، والعربية خير اللغات
            والألسنة، والإقبال على تفهمها من الديانة، إذ هي أداة العلم ومفتاح
            التفقه في الدين، وسبب إصلاح المعاش والمعاد
          </q>
          <span className="block mt-4 md:text-lg font-medium text-gray-600 dark:text-gray-400">
            الإمام الثعالبي رحمه الله
          </span>
          <div className="flex flex-col mt-4 space-y-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              يمكنك أخذ فكرة عامة من هنا{' '}
            </h2>
            <Link
              className={
                buttonVariants({ variant: 'outline' }) +
                ' text-blue-600 dark:text-blue-400'
              }
              href="https://youtube.com/playlist?list=PL9Atovn0CbS7Hn7OMf1Fmf067MPTN2OhQ&feature=shared"
              target="_blank"
            >
              مدخل إلى علم العربية🔗
            </Link>

            <Link
              href="/pdfs/تكوين الملكة اللغوية.pdf"
              className={
                buttonVariants({ variant: 'outline' }) +
                ' text-blue-600 dark:text-blue-400'
              }
              download
              target="_blank"
            >
              تكوين الملكة اللغوية📖
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-center space-x-2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
            علوم اللغة العربية
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
            {ArabicSciene.map((science, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border rounded-lg shadow-lg"
              >
                {' '}
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {index + 1}. {science.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {science.description}
                  </p>
                  <div className="flex flex-col mt-4 space-y-2">
                    <Link
                      className={
                        buttonVariants({ variant: 'outline' }) +
                        ' text-blue-600 dark:text-blue-400'
                      }
                      href={science.books}
                      download
                      target="_blank"
                    >
                      {science.bookName}📖
                    </Link>
                    <Link
                      className={
                        buttonVariants({ variant: 'outline' }) +
                        ' text-blue-600 dark:text-blue-400'
                      }
                      href={science.link}
                      target="_blank"
                    >
                      {science.linkName}🔗
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center my-10 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
        من تعلم العربية، فقد امتلك نصف علوم الشريعة، فليسلك الطريق إلى تحصيل
        النصف الآخر، وهو هانئ البال مطمئن النفس
      </p>
    </MaxWidthWrapper>
  );
}
