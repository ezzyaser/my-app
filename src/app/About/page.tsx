'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function Page() {
  const socialLinks = [
    { Icon: FaFacebook, href: 'https://facebook.com' },
    { Icon: FaTwitter, href: 'https://twitter.com' },
    { Icon: FaInstagram, href: 'https://instagram.com' },
    { Icon: FaGithub, href: 'https://github.com' },
    { Icon: FaLinkedin, href: 'https://linkedin.com' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container max-w-4xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden md:mt-16"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0"
      >
        <Image
          src="/Images/photo2.jpg"
          alt="EZZ YASER"
          className="rounded-full shadow-xl border-4 border-gray-300 dark:border-gray-700"
          width={224}
          height={224}
          priority
        />
      </motion.div>

      {/* Profile Information */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        dir="rtl"
        className="text-center md:text-right flex-1 space-y-4"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
          السلامُ عليكم، اسمي عزالدين
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          مهتم بعلوم الحاسب، البرمجيات، اللغات، وتعليم ونفع الناس. هذا الموقع
          بدأ كمراجعة لما أدرسه، وأرجو أن يكون نافعًا للآخرين.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="mailto:zoz966737@gmail.com"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition font-medium"
          >
            راسلني على الاميل
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
            className="flex justify-center md:justify-start mt-3 space-x-4 rtl:space-x-reverse"
          >
            {socialLinks.map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition text-xl"
              >
                <Icon size={28} />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
