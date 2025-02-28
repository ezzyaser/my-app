import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'التسويق الإلكتروني💻',
  description: 'ما هو التسويق الإلكتروني وكيف تتعمله',
};

export default function Page() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          التسويق الإلكتروني
        </h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          التسويق الإلكتروني هو استخدام الإنترنت والقنوات الرقمية مثل وسائل
          التواصل الاجتماعي، ومحركات البحث، والبريد الإلكتروني، والمواقع
          الإلكترونية للوصول إلى الجمهور المستهدف وتعزيز العلامات التجارية.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-6">
          أهم استراتيجيات التسويق الإلكتروني
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-2">
          <li>تحسين محركات البحث (SEO)</li>
          <li>إعلانات الدفع لكل نقرة (PPC)</li>
          <li>التسويق عبر وسائل التواصل الاجتماعي</li>
          <li>التسويق بالمحتوى</li>
          <li>التسويق عبر البريد الإلكتروني</li>
          <li>التسويق بالعمولة</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-6">
          فوائد التسويق الإلكتروني
        </h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-2">
          <li>الوصول إلى جمهور واسع</li>
          <li>تكلفة أقل مقارنة بالإعلانات التقليدية</li>
          <li>إمكانية استهداف الجمهور بدقة</li>
          <li>تحليل الأداء وتحسين الحملات بسهولة</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-6">
          التسويق الإلكتروني أصبح من أهم الأدوات للشركات الناشئة والمؤسسات
          الكبيرة، حيث يوفر فرصًا هائلة للنمو والتوسع.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            target="_blank"
            href="https://youtu.be/0fvYICr7m0M?feature=shared"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'px-6 py-2 text-lg',
            )}
          >
            يمكنك بدء التعلم من هنا 🚀
          </Link>
        </div>
      </div>
    </div>
  );
}
