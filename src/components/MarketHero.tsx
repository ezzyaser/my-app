import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';
export default function MarketHero() {
  return (
    <MaxWidthWrapper className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
      <div className="">
        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="relative w-fit tracking-tight text-balance mt-16 !leading-tight text-gray-900 dark:text-white text-5xl font-bold md:text-6xl lg:text-7xl"></h1>
          <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-gray-700 dark:text-gray-300">
            Take All you want from here
          </p>
          <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
            <div className="space-y-2">
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-500" />
                High-quality, durable material
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-green-500" />
                High-quality, durable material
              </li>
            </div>
          </ul>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="flex -space-x-4">
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-600"
                src="/Images/user-1.png"
                alt="user image"
              />
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-600 object-cover"
                src="/Images/photo2.jpg"
                alt="user image"
              />
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-600 object-cover"
                src="/Images/photo2.jpg"
                alt="user image"
              />
              <Image
                className="inline-block h-12 w-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-600 object-cover"
                src="/Images/photo2.jpg"
                alt="user image"
              />
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start">
              <div className="flex gap-0.5">
                <Star className="text-yellow-300 h-4 w-4 fill-yellow-300" />
                <Star className="text-yellow-300 h-4 w-4 fill-yellow-300" />
                <Star className="text-yellow-300 h-4 w-4 fill-yellow-300" />
                <Star className="text-yellow-300 h-4 w-4 fill-yellow-300" />
                <Star className="text-yellow-300 h-4 w-4 fill-yellow-300" />
              </div>
              <p className="text-gray-900 dark:text-gray-200">
                <span className="font-semibold">2500</span> happy customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit"></div>
    </MaxWidthWrapper>
  );
}
