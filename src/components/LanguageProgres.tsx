'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { languages } from '@/config/Languages';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

interface Language {
  code: string;
  name: string;
  flag: string;
  progress: number;
  description: string;
  link: string;
}

export default function LanguageProgres() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">اكتسب لغة جديدة</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {languages.map((lang: Language) => (
          <Card
            key={lang.code}
            className={cn(
              'cursor-pointer hover:shadow-xl transition duration-300 ease-in-out border-2 p-4 rounded-lg',
              selectedLanguage === lang.code
                ? 'border-blue-600'
                : 'border-gray-300 dark:border-gray-700',
              'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100',
            )}
            onClick={() => setSelectedLanguage(lang.code)}
          >
            <Link
              href={lang.link}
              target="_blank"
              className="block w-full h-full"
            >
              <CardContent className="flex flex-col items-center text-center">
                <span className="text-5xl mb-2">{lang.flag}</span>
                <h2 className="text-lg font-semibold">{lang.name}</h2>
                <Progress value={lang.progress} className="w-full mt-3" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  {lang.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/blogpost/How-acquire-language"
          className={cn(
            buttonVariants({ variant: 'default' }),
            'flex flex-col justify-center items-center px-6 py-3',
          )}
        >
          أفضل طريقة لاكتساب اللغة
        </Link>
      </div>
    </div>
  );
}
