import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export const metadata = {
  title: 'البرمجة👨‍💻',
  description: 'تعلم ما هي البرمجة وما هي علوم الحاسب وكيف تتعلمهم',
};

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl text-gray-800 dark:text-gray-200 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-6">
            ما هي البرمجة؟
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            يمكنك التفكير في البرمجة على أنها طريقة تمكننا نحن البشر من إرسال
            التعليمات لأجهزة الحاسوب باستخدام لغة يمكن للحواسيب فهمها تسمى لغة
            البرمجة، وبعبارة أخرى البرمجة هي وسيلة للتخاطب مع الأجهزة
            الإلكترونية المختلفة مثل الحواسيب أو الهواتف الذكية أو أي أجهزة قابل
            للبرمجة وجعلها تحل مشكلة ما أو تنجز مهمة محددة. تعلم البرمجة هو خطوة
            أساسية في عالم التكنولوجيا الحديثة، ويتيح لك أن تصبح جزءًا من صناعة
            البرمجيات المتطورة.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            ما هي علوم الحاسب؟
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            علوم الحاسب هي مجال أكاديمي يدرس أساسيات الحوسبة، البرمجة، تحليل
            الخوارزميات، تطوير البرمجيات، شبكات الكمبيوتر، وقواعد البيانات. يهتم
            هذا المجال بتقديم حلول للمشكلات التقنية من خلال استخدام الحواسيب
            والبرمجيات.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            ما هي أشهر مجالات البرمجة؟
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            البرمجة تشمل العديد من المجالات المختلفة مثل:
          </p>
          <ul className="list-inside list-disc mt-4 text-xs md:text-lg">
            <li>تطوير الويب (Web Development)</li>
            <li>تطوير تطبيقات الهاتف (Mobile App )</li>
            <li>الذكاء الاصطناعي (Artificial Intelligence)</li>
            <li>تعلم الآلة (Machine Learning)</li>
            <li>الأمن السيبراني (Cybersecurity)</li>
            <li>برمجة الألعاب (Game Development)</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            كيف أتعلم البرمجة؟
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            تعلم البرمجة يمكن أن يبدأ بخطوات بسيطة. إليك بعض الطرق التي يمكن أن
            تساعدك في البدء:
          </p>
          <ul className="list-inside list-disc mt-4">
            <li>قُم بتعلم أساسيات الحاسوب والأجهزة </li>
            <li>ابدأ بتعلم لغة برمجة سهلة مثل JavaScript أو Python.</li>
            <li>اقرأ الكتب والدروس عبر الإنترنت لفهم الأساسيات.</li>
            <li>تدرب على كتابة الأكواد وحل التحديات البرمجية.</li>
            <li>انضم إلى مجتمعات البرمجة للمساعدة والدعم.</li>
          </ul>
        </div>

        <p className=" text-gray-800 dark:text-gray-200 ">
          الآن إذا انتهيت من هذه الصفحة واستوعبتها، قم بالانتقال إلى
        </p>
        <Link
          href="/Programming/Roadmap"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'flex justify-center items-center',
          )}
        >
          خريطة التعلم
        </Link>
      </div>
    </div>
  );
}
