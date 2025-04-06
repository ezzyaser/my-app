import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaLightbulb,
  FaBook,
  FaFileCode,
  FaCode,
  FaRocket,
  FaTools,
  FaRegLightbulb,
} from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

export const metadata = {
  title: 'Notion - أدوات تطوير المشاريع',
  description:
    'تعرف على أداة Notion لإدارة الملاحظات والمشاريع والعمل الجماعي.',
  icons: '/Icons/notion.svg',
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
          <SiNotion className="mr-3 text-black dark:text-white" /> Notion
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Notion هي أداة إنتاجية قوية تُستخدم لتدوين الملاحظات، إدارة المهام،
          تنظيم المشاريع، والتعاون بين الفرق، كل ذلك في مساحة عمل واحدة مرنة
          وقابلة للتخصيص.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> متى ظهرت Notion؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            تم إطلاق Notion في عام 2016، ومنذ ذلك الحين أصبحت واحدة من أكثر
            أدوات الإنتاجية شهرة بفضل تصميمها المرن وسهولة استخدامها.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaTools className="mr-2 text-purple-500" /> ميزات Notion الرئيسية
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>صفحات قابلة للتخصيص بالكامل</li>
            <li>جداول وقواعد بيانات مرنة</li>
            <li>نظام إدارة مهام قوي</li>
            <li>إمكانية التعاون في الوقت الحقيقي</li>
            <li>تكامل مع أدوات خارجية</li>
            <li>دعم للملاحظات، القوائم، وأهداف المشاريع</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-red-500" /> استخدامات Notion
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>تدوين الملاحظات اليومية</li>
            <li>إعداد خطط الدراسة أو العمل</li>
            <li>بناء ويكي للشركة أو الفريق</li>
            <li>إدارة المشاريع والجداول الزمنية</li>
            <li>تتبع الأهداف الشخصية والمهام</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-blue-500" /> مثال على قاعدة بيانات
            في Notion
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"
          >
            <code>
              {`📚 مهامي اليومية:
- ⬜ قراءة 20 صفحة من كتاب 📖
- ✅ مراجعة مهام أمس 📋
- ⬜ تخطيط جدول الأسبوع 📅
- ✅ تمرين رياضي 🏋️‍♂️`}
            </code>
          </pre>
        </section>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center my-8">
          <FaRegLightbulb className="mr-2" />
          لماذا تعتبر Notion أداة قوية للإنتاجية؟
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-400 space-y-3 mb-3">
          <li>
            دمج عدة أدوات في مكان واحد: تدوين، مهام، مشاريع، قواعد بيانات.
          </li>
          <li>واجهة بسيطة وسهلة التخصيص دون الحاجة للبرمجة.</li>
          <li>دعم الفرق الصغيرة والكبيرة في العمل التعاوني.</li>
          <li>إمكانية بناء نظام إدارة معرفي خاص بك (Personal Wiki).</li>
        </ul>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://www.notion.so/product"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            زيارة الموقع الرسمي لـ Notion
          </Link>
          <Link
            href="https://youtu.be/kOf3QSBV29Y?feature=shared"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            Notion Full Course - Productive Dude
          </Link>
        </div>
      </div>
    </div>
  );
}
