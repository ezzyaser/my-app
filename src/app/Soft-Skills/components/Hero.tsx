import Skills from '@/config/Skills';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="px-6 py-12 md:py-16 lg:py-20 flex flex-col gap-10 md:gap-12">
      {/* العنوان الرئيسي */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-snug">
          المهارات الناعمة: مفتاح النجاح في الحياة والعمل
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg md:text-xl">
          المهارات الناعمة هي القدرات الشخصية والاجتماعية التي تساعدك على
          التفاعل بفعالية مع الآخرين، وإدارة عملك بكفاءة، والتأقلم مع بيئة
          العمل.
        </p>
      </div>

      {/* قسم أهمية المهارات الناعمة */}
      <div className="bg-gradient-to-r from-blue-200 to-blue-300 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl text-blue-700 dark:text-blue-400 font-bold border-b border-blue-400 dark:border-blue-600 pb-3">
          لماذا المهارات الناعمة مهمة؟
        </h2>
        <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-900 dark:text-gray-300 text-lg">
          <li>تعزز التواصل الفعّال مع الزملاء والعملاء.</li>
          <li>تساعد في بناء علاقات قوية داخل بيئة العمل.</li>
          <li>تجعل التكيف مع التحديات والتغيرات أسهل.</li>
          <li>تزيد من فرص النجاح الوظيفي والترقيات.</li>
          <li>تساهم في تحسين القيادة وحل المشكلات.</li>
        </ul>
      </div>

      {/* قسم أهم المهارات الناعمة */}
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl text-blue-700 dark:text-blue-400 font-bold border-b border-blue-400 dark:border-blue-600 pb-3">
          أهم المهارات الناعمة
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {Skills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all bg-gray-50 dark:bg-gray-800 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {skill.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 flex-grow">
                {skill.description}
              </p>
              {skill.link && (
                <Link
                  target="_blank"
                  href={skill.link}
                  className="text-blue-600 dark:text-blue-400 mt-4 block font-medium hover:underline"
                >
                  اكتشف المزيد
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
