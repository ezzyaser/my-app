'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import socialLinks from '@/config/socialLinks';
export default function AboutIntro() {
  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center py-16 px-6 text-center bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 mx-auto my-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-32 h-32 md:w-40 md:h-40"
        >
          <Image
            src="/Images/photo5.jpg"
            alt="EZZ YASER"
            width={160}
            height={160}
            className="rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg object-cover"
            priority
          />
          <span className="absolute bottom-0 -right-2 text-4xl"></span>
        </motion.div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          السلامُ عليكم ورحمة الله وبركاته🖐
        </h1>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <span className="font-semibold">
            اسمي عزالدين ياسر ، شاب مسلم يرجو صلاح نفسه وأمته 🕋
          </span>
          <br />
          أتعلم وأقرأ كل يوم، وأشارك تجاربي هنا 👨‍💻.
        </p>
        <p className="mt-2 text-blue-500 font-semibold">
          إذا استفدت، يرجى الدعاء 🙏
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:zoz966737@gmail.com"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition font-medium"
          >
            راسلني
          </a>
          <a
            href="tel:+201121779880"
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
          >
            تواصل معي
          </a>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            تابعني على
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-3 space-x-4 rtl:space-x-reverse"
          >
            {socialLinks.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition text-2xl"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
