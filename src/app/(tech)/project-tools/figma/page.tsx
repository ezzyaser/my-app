import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaLightbulb,
  FaBook,
  FaFileCode,
  FaRocket,
  FaPalette,
  FaPencilRuler,
  FaCogs,
} from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

export const metadata = {
  title: 'Figma - أدوات تطوير المشاريع',
  description:
    'تعرف على Figma، الأداة السحابية الرائدة لتصميم واجهات المستخدم والتعاون الجماعي.',
  icons: '/Icons/figma.svg',
};

export default function Page() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 p-6 flex justify-center items-center flex-col"
    >
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
        <h1
          dir="ltr"
          className="text-xl md:text-4xl font-bold text-center text-gray-900 dark:text-pink-400 mb-6 flex items-center justify-center"
        >
          <SiFigma className="mr-3 text-pink-600 dark:text-pink-300" /> Figma
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Figma هي أداة تصميم UX/UI حديثة تعمل عبر الإنترنت، وتُستخدم لتصميم
          واجهات التطبيقات والمواقع، وتوفر تجربة تعاونية مذهلة بين المصممين
          والمطورين.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> ما هو Figma؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Figma هي أداة تصميم سحابية تتيح لك إنشاء تصاميم تفاعلية لواجهات
            المستخدم، مع إمكانية مشاركة العمل في الوقت الحقيقي مع الفريق، بدون
            الحاجة لأي تثبيت أو برامج إضافية.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCogs className="mr-2 text-purple-500" /> مميزات Figma
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>تصميم مباشر في المتصفح (Cloud Based)</li>
            <li>مشاركة وتعاون في الوقت الحقيقي</li>
            <li>دعم للـ Prototyping والـ Components</li>
            <li>مناسب للفرق الكبيرة والصغيرة</li>
            <li>تكامل مع أدوات مثل Zeplin وFigJam وNotion</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-blue-500" /> استخدامات Figma
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>تصميم واجهات المواقع والتطبيقات</li>
            <li>إنشاء Prototypes تفاعلية</li>
            <li>تصميم شعارات وأيقونات</li>
            <li>بناء أنظمة تصميم (Design Systems)</li>
            <li>التعاون بين المصمم والمطور</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-green-600" /> مثال عملي بسيط
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"
          >
            <code>
              {`🎨 Design System:
- Colors: Primary (#6200EE), Secondary (#03DAC6)
- Typography: Roboto, 16px base
- Components: Button, Input, Card

📱 Prototype:
- Login screen
- Onboarding flow
- Navigation bar`}
            </code>
          </pre>
        </section>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center my-8">
          <FaPalette className="mr-2" />
          كيف يساعد Figma في تسريع تطوير الواجهات؟
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-400 space-y-3 mb-3">
          <li>سهولة تصدير CSS وSVG مباشرة</li>
          <li>تعاون لحظي بين المصمم والمبرمج</li>
          <li>تحسين تجربة المستخدم من خلال النماذج التفاعلية</li>
          <li>توثيق شامل لتصميم النظام</li>
        </ul>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://www.figma.com"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            زيارة الموقع الرسمي لـ Figma
          </Link>
          <Link
            href="https://youtu.be/ezldKx-jPag?feature=shared"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة Figma للمبتدئين
          </Link>
        </div>
      </div>
    </div>
  );
}
