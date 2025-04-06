import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaLightbulb,
  FaBook,
  FaFileCode,
  FaCode,
  FaRocket,
  FaTools,
  FaSitemap,
} from 'react-icons/fa';
import { SiMiro } from 'react-icons/si';

export const metadata = {
  title: 'Miro - أدوات تطوير المشاريع',
  description:
    'تعرف على أداة Miro لتصميم العصف الذهني، المخططات التفاعلية، وتنظيم الأفكار بصريًا.',
  icons: '/Icons/miro.svg',
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
          className="text-xl md:text-4xl font-bold text-center text-gray-900 dark:text-blue-400 mb-6 flex items-center justify-center"
        >
          <SiMiro className="mr-3 text-yellow-500 dark:text-yellow-300" /> Miro
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Miro هي أداة تعاون مرئي تسمح لك بإنشاء لوحات بيضاء رقمية للعصف الذهني،
          التخطيط، إنشاء خرائط ذهنية، والمزيد. تستخدم على نطاق واسع في الشركات
          التقنية لتوضيح الأفكار وتعزيز التعاون بين الفرق.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> ما هو Miro؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Miro هو تطبيق تفاعلي للسبورة البيضاء الرقمية، تم تصميمه لتسهيل
            التعاون في الوقت الحقيقي بين أعضاء الفرق، سواء للعمل عن بعد أو داخل
            الشركات.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaTools className="mr-2 text-purple-500" /> مميزات Miro
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>قوالب جاهزة للعصف الذهني، الخطط، والخرائط</li>
            <li>مشاركة حية في الوقت الفعلي مع الفريق</li>
            <li>تكامل مع أدوات مثل Slack, Jira, Trello, Zoom</li>
            <li>إمكانية الرسم الحر، إضافة صور، مخططات، ملاحظات</li>
            <li>لوحات غير محدودة الحجم لتصميم أفكار كبيرة</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-red-500" /> استخدامات شائعة لـ Miro
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>تصميم واجهات UX/UI بشكل مرئي</li>
            <li>إدارة ورش العمل والعصف الذهني</li>
            <li>بناء خرائط ذهنية وخطط عمل</li>
            <li>رسم مخططات لتدفقات العمل أو البرمجيات</li>
            <li>التخطيط الإستراتيجي ومراجعة الأهداف</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-blue-500" /> مثال سريع على استخدام
            Miro
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"
          >
            <code>
              {`🧠 Brainstorm Board
- فكرة المشروع: تطبيق تعلم لغات
- الجمهور المستهدف: طلاب المدارس
- الميزات: دروس، تمارين، مسابقات

📊 User Flow:
- شاشة رئيسية ➝ تسجيل ➝ دروس ➝ اختبار

🎯 خطة التنفيذ:
- التصميم ✅
- التطوير 🛠️
- الإطلاق 🚀`}
            </code>
          </pre>
        </section>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center my-8">
          <FaSitemap className="mr-2" />
          كيف يساهم Miro في تحسين الإنتاجية؟
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-400 space-y-3 mb-3">
          <li>يتيح رؤية شاملة للأفكار والعلاقات بينها.</li>
          <li>يعزز التعاون الجماعي والتخطيط المشترك.</li>
          <li>يوفّر أدوات تفاعلية تجذب انتباه المشاركين.</li>
          <li>يسهّل تتبع التقدم من خلال الرسومات والمخططات.</li>
        </ul>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://miro.com"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            زيارة الموقع الرسمي لـ Miro
          </Link>
          <Link
            href="https://youtu.be/PxX26roMmdA?feature=shared"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            تعلم Miro للمبتدئين - دليل كامل
          </Link>
        </div>
      </div>
    </div>
  );
}
