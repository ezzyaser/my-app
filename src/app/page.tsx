'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Page() {
  return (
    <MaxWidthWrapper className="p-6 sm:p-10 h-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex flex-col items-center text-center space-y-6 sm:space-y-8"
      >
        {/* الوصف */}
        <motion.div
          variants={fadeIn}
          className="text-base sm:text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-200 max-w-2xl px-4 sm:px-0"
        >
          <div className=" mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="mt-6  max-w-prose text-gray-600 dark:text-gray-300 text-xl md:text-3xl">
              كل ما يحتاجه الشباب المسلم من علوم ومهارات مع شرح بعض العلوم
              الشرعية <br />
              <span className="text-blue-500 dark:text-blue-400 text-lg">
                مع مشاركة النصائح الشخصية والخبرات الحياتية ✍
              </span>
            </h1>
          </div>
        </motion.div>

        {/* العنوان الفرعي */}
        <motion.h3
          variants={fadeIn}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400"
        >
          ماذا أُقدم لك 🚀
        </motion.h3>

        {/* قائمة الروابط */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl"
        >
          {[
            { href: '/Islamic-sciences', label: 'العلوم الشرعية 🕋' },
            { href: '/Programming', label: 'البرمجة وعلوم الحاسب 👨‍💻' },
            { href: '/web', label: 'تطوير الويب 👨‍💻' },
            { href: '/project-tools', label: 'أدوات تطوير المشاريع 🎯' },
            { href: '/Languag', label: 'اللغات 🌍' },
            { href: '/Soft-Skills', label: 'مهارات الحياة وسوق العمل 😊' },
            { href: '/Marketing', label: 'التسويق الإلكتروني 💸' },
            // { href: '/Market', label: 'متجر الأدوات 💎' },
            { href: '/Blog', label: 'المدونة ✍' },
            { href: '/book', label: 'الكتب المؤلفة 📖' },
            { href: '/About', label: 'إقرأ عني 🕵️‍♀️' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md text-center bg-blue-500 dark:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all"
              >
                {label}
              </motion.button>
            </Link>
          ))}
        </motion.div>
        <motion.p
          variants={fadeIn}
          className=" text-lg md:text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400"
        >
          اعلم أنه لا خيرَ في ثقافةٍ واسعةٍ، واطّلاعٍ عريضٍ؛ يقودان صاحبَهما إلى
          التمرّد على أصولِ دينهِ ومشاغبةِ ثوابته،ليوصفَ بالألمعيّة والإبداع
          والتفرّد
        </motion.p>
      </motion.div>
    </MaxWidthWrapper>
  );
}
