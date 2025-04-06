import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaCode,
  FaCogs,
  FaProjectDiagram,
  FaBook,
} from 'react-icons/fa';

export const metadata = {
  title: 'Full-Stack',
  description: 'تعرف على تطوير Full-Stack وأهم الأدوات والتقنيات المستخدمة.',
  icons: '/Icons/full-stack.svg',
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
          <FaLaptopCode className="mr-3 text-blue-500 dark:text-blue-300" />{' '}
          Full-Stack
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Full-Stack Development هو مجال يشمل تطوير الواجهة الأمامية (Frontend)
          والخلفية (Backend) لتطبيقات الويب، مما يتيح للمطور التعامل مع الجوانب
          المختلفة لبناء الأنظمة المتكاملة.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCode className="mr-2 text-green-500" /> مكونات Full-Stack
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>
              Frontend - واجهة المستخدم باستخدام HTML, CSS, JavaScript, React,
              Vue
            </li>
            <li>Backend - الخوادم باستخدام Node.js, Django, Spring Boot</li>
            <li>Database - قواعد البيانات مثل MySQL, PostgreSQL, MongoDB</li>
            <li>APIs - إنشاء RESTful أو GraphQL APIs</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCogs className="mr-2 text-purple-500" /> أدوات Full-Stack الشائعة
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>Git و GitHub لإدارة الأكواد</li>
            <li>Docker للحاويات</li>
            <li>GraphQL لتحسين استعلامات البيانات</li>
            <li>CI/CD لأتمتة عمليات النشر</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaProjectDiagram className="mr-2 text-yellow-500" /> أمثلة على
            مشاريع Full-Stack
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>تطبيق مهام Todo باستخدام React و Node.js</li>
            <li>نظام إدارة المحتوى باستخدام Next.js و PostgreSQL</li>
            <li>تطبيق تجارة إلكترونية متكامل</li>
          </ul>
        </section>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://www.youtube.com/watch?v=-42K44A1oMA"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - freeCodeCamp
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=MJzbJQLGehs"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - JavaScript Mastery
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=4mOkFXyxfsU"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - JavaScript Mastery
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=J9sfR6HN6BY"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - Programming with Mosh
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=EZajJGOMWas"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - JavaScript Mastery
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=UbXpRv5ApKA"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - RoadsideCoder
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=SG82Aqcaaa0"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - Josh tried coding
          </Link>
          <Link
            href="https://www.youtube.com/watch?feature=shared&v=06g6YJ6JCJU"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - Josh tried coding
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=06g6YJ6JCJU"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - Josh tried coding
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=vEQlN17miq8"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - Josh tried coding
          </Link>
          <Link
            href="https://youtu.be/X1zCAPLvMtw?feature=shared"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            مشروع Full-Stack كامل - EdRoh
          </Link>
        </div>
      </div>
    </div>
  );
}
