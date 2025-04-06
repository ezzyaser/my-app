import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaDocker,
  FaCubes,
  FaCodeBranch,
  FaServer,
  FaNetworkWired,
  FaFileCode,
  FaBook,
} from 'react-icons/fa';

export const metadata = {
  title: 'Docker',
  description: 'تعرف على Docker وكيفية استخدامه لإدارة الحاويات.',
  icons: '/Icons/docker.svg',
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
          <FaDocker className="mr-3 text-blue-500 dark:text-blue-300" /> Docker
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Docker هو نظام أساسي مفتوح المصدر يتيح تشغيل التطبيقات داخل حاويات
          (Containers)، مما يسهل نشرها وإدارتها في بيئات مختلفة.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCubes className="mr-2 text-green-500" /> كيف يعمل Docker؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            يقوم Docker بتجميع التطبيقات مع جميع مكوناتها اللازمة داخل حاويات
            مستقلة، مما يجعلها تعمل بنفس الطريقة على أي نظام تشغيل.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCodeBranch className="mr-2 text-purple-500" /> مكونات Docker
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>Docker Engine - المحرك الأساسي لتشغيل الحاويات</li>
            <li>Docker Images - صور الحاويات الجاهزة</li>
            <li>Docker Containers - الحاويات التي تعمل فعليًا</li>
            <li>Docker Hub - مستودع لمشاركة الصور</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaServer className="mr-2 text-yellow-500" /> فوائد استخدام Docker
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Docker يساعد في تقليل الفوارق بين بيئات التطوير والإنتاج، وتحسين
            الكفاءة، وسهولة النشر، بالإضافة إلى دعمه للتوسع السريع.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaBook className="mr-2 text-red-500" /> أوامر Docker الأساسية
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto"
          >
            <code>
              {`docker pull ubuntu
              docker run -it ubuntu
              docker ps
              docker stop container_id
              docker rm container_id`}
            </code>
          </pre>
        </section>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://www.youtube.com/watch?v=kTp5xUtcalw"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة Docker كاملة - freeCodeCamp
          </Link>
        </div>
      </div>
    </div>
  );
}
