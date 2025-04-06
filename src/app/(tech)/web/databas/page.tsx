import React from 'react';

import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  FaDatabase,
  FaHistory,
  FaServer,
  FaTable,
  FaCogs,
  FaNetworkWired,
  FaBook,
  FaFileCode,
} from 'react-icons/fa';

export const metadata = {
  title: 'Database',
  description: '',
  icons: '/Icons/data.svg',
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
          <FaDatabase className="mr-3 text-blue-500 dark:text-blue-300" />{' '}
          Database
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          قواعد البيانات هي أنظمة مصممة لتخزين وإدارة واسترجاع البيانات بكفاءة،
          حيث يتم تنظيم البيانات في جداول مترابطة.
        </p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaHistory className="mr-2 text-green-500" /> تاريخ قواعد البيانات
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            بدأت قواعد البيانات في الستينيات مع ظهور النماذج الهرمية والشبكية،
            ثم تطورت إلى قواعد البيانات العلائقية في السبعينيات.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaTable className="mr-2 text-purple-500" /> أنواع قواعد البيانات
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-2">
            <li>
              قواعد البيانات العلائقية (Relational Databases) - مثل MySQL
              وPostgreSQL
            </li>
            <li>قواعد البيانات غير العلائقية (NoSQL) - مثل MongoDB وRedis</li>
            <li>قواعد البيانات الموزعة (Distributed Databases)</li>
            <li>
              قواعد بيانات العمود العريض (Wide Column Stores) - مثل Cassandra
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaCogs className="mr-2 text-yellow-500" /> لماذا نستخدم قواعد
            البيانات؟
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            تساعد قواعد البيانات في تنظيم البيانات، تحسين الأداء، وضمان أمن
            البيانات عبر التحكم في الوصول والتخزين المنظم.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center">
            <FaFileCode className="mr-2 text-blue-500" /> مثال على استعلام SQL
          </h2>
          <pre
            dir="ltr"
            className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-x-auto"
          >
            <code>
              {`CREATE TABLE Users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

INSERT INTO Users (id, name, email) VALUES (1, 'Ali', 'ali@example.com');
SELECT * FROM Users;`}
            </code>
          </pre>
        </section>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 flex items-center my-8">
          <FaNetworkWired className="mr-2" /> كيف تعمل قواعد البيانات؟
        </h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-400 space-y-3 mb-3">
          <li>تخزين البيانات في جداول أو مجموعات بيانات.</li>
          <li>استخدام لغة الاستعلام SQL لإدارة البيانات.</li>
          <li>الاعتماد على الفهارس لتحسين سرعة الاستعلامات.</li>
          <li>ضمان تكامل البيانات من خلال المفاتيح والعلاقات.</li>
        </ul>

        <div className="my-5 flex flex-col space-y-4">
          <Link
            href="https://www.youtube.com/watch?v=HXV3zeQKqGY"
            className={buttonVariants({ variant: 'default' })}
            target="_blank"
          >
            دورة SQL كاملة - freecodecamp
          </Link>
        </div>
      </div>
    </div>
  );
}
