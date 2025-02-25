'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { languages } from '@/config/Languages';

// تعريف نوع اللغة
interface Language {
  code: string;
  name: string;
  flag: string;
  progress: number;
  description: string;
  link: string;
}

export default function LanguageLearningPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <div dir="rtl" className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">اكتسب لغة جديدة</h1>

      {/* عرض اللغات المتاحة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {languages.map((lang: Language) => (
          <Card
            key={lang.code}
            className={`cursor-pointer hover:shadow-xl transition duration-300 ease-in-out border-2 p-4 rounded-lg ${
              selectedLanguage === lang.code
                ? 'border-blue-600'
                : 'border-gray-200'
            }`}
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
                <p className="text-sm text-gray-600 mt-3">{lang.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
