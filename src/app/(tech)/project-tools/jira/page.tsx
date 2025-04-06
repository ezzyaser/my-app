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
import { SiJira } from 'react-icons/si';

export const metadata = {
  title: 'Jira - أدوات تطوير المشاريع',
  description:
    'تعرف على Jira، أداة إدارة المشاريع وتتبع المهام للفرق البرمجية ومنهجية Agile.',
  icons: '/Icons/jira.svg',
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
          <SiJira className="mr-3 text-blue-600 dark:text-blue-300" /> Jira
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Jira هي أداة قوية لإدارة المشاريع وتتبع المهام، وتستخدم على نطاق واسع
          بين فرق تطوير البرمجيات التي تعتمد منهجية Agile أو Scrum.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaLightbulb className="mr-2 text-yellow-500" /> ما هو Jira؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Jira هي أداة من شركة Atlassian تُستخدم لإدارة المشاريع، تتبع
            الأخطاء، تنظيم السبرينت (Sprint)، وتوزيع المهام على الفرق. مرنة
            وتدعم تكاملات متعددة مثل GitHub، Bitbucket، Slack، وغيرها.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaTools className="mr-2 text-purple-500" /> مميزات Jira
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>إدارة كاملة لدورة حياة المشروع</li>
            <li>لوحات Kanban وScrum مرنة</li>
            <li>تتبع الأخطاء والمشاكل (Bugs)</li>
            <li>تقارير وتحليلات قوية (Burndown, Velocity...)</li>
            <li>تكامل مع أدوات DevOps مثل Git وCI/CD</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-red-500" /> استخدامات Jira
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>إدارة المهام اليومية لفريق التطوير</li>
            <li>تنظيم مهام المشروع داخل Sprints</li>
            <li>تتبع الأخطاء والـ Bugs بشكل دقيق</li>
            <li>التخطيط لإصدارات البرامج (Releases)</li>
            <li>إدارة العمل الجماعي داخل المؤسسات التقنية</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-blue-500" /> مثال سريع على لوحة
            Scrum
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto text-sm"
          >
            <code>
              {`🧾 Backlog
- تسجيل المستخدم
- صفحة تسجيل الدخول
- قاعدة بيانات المستخدمين

🚀 Sprint
- تصميم واجهة المستخدم
- تنفيذ تسجيل الدخول باستخدام Firebase

✅ Done
- إعداد بيئة التطوير
- اختيار التقنيات (Next.js, TailwindCSS)`}
            </code>
          </pre>
        </section>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center my-8">
          <FaSitemap className="mr-2" />
          كيف يساعد Jira على تحسين الإنتاجية؟
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-400 space-y-3 mb-3">
          <li>تنظيم المهام وتحديد الأولويات</li>
          <li>رؤية واضحة لتقدم المشروع</li>
          <li>سهولة التتبع والمراجعة</li>
          <li>إشعارات لحظية وتكاملات مع Slack وGit</li>
        </ul>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://www.atlassian.com/software/jira"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            زيارة الموقع الرسمي لـ Jira
          </Link>
          <Link
            href="https://youtu.be/8jWKwiIcWPI?feature=shared"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة تعلم Jira
          </Link>
        </div>
      </div>
    </div>
  );
}
