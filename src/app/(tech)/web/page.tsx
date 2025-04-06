import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Sections from '@/config/sections';
import Image from 'next/image';

export default function Tech() {
  return (
    <MaxWidthWrapper>
      <div
        dir="rtl"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto px-4 my-4"
      >
        {Sections.map((section) => (
          <Card
            key={section.title}
            className="transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white"
          >
            <CardContent className="flex flex-col items-center text-center p-6">
              <Image
                src={section.logo}
                alt={section.title}
                className=" mb-4"
                width={50}
                height={50}
              />
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {section.description}
              </p>
              <Link
                href={section.links}
                className="mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md text-sm transition-colors"
              >
                من هنا 🚀
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
