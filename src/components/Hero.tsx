'use client';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <MaxWidthWrapper className="p-6 sm:p-10 h-full">
      <motion.div
        dir="rtl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex flex-col items-center text-center space-y-6 sm:space-y-8"
      >
        {/* العنوان الرئيسي */}
        <motion.h2
          variants={fadeIn}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          <span>كيف </span>
          أستطيع
          <span className="text-blue-500"> مساعدتك؟</span>
        </motion.h2>

        {/* الوصف */}
        <motion.p
          variants={fadeIn}
          className="text-base sm:text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 max-w-2xl px-4 sm:px-0"
        >
          تمكينك من اكتساب المهارات التي تحتاجها للفلاح في مسيرتك الحياتية
          والتعليمية والمهنية.
        </motion.p>

        {/* العنوان الفرعي */}
        <motion.h3
          variants={fadeIn}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700"
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
            { href: '/Languag', label: 'اللغات 🌍' },
            { href: '/Soft-Skills', label: 'مهارات الحياة وسوق العمل 😊' },
            { href: '/Marketing', label: 'التسويق الإلكتروني 💸' },
            { href: '/Blog', label: 'المدونة ✍' },
            { href: '/Market', label: 'متجر الأدوات 💎' },
            { href: '/book', label: 'الكتب المؤلفة ✍' },
            { href: '/About', label: 'إقرأ عني 🦸‍♂️' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md"
              >
                {label}
              </motion.button>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </MaxWidthWrapper>
  );
}
