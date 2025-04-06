'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import topics from '@/config/LangDetails/Arabic';
interface Topic {
  title: string;
  description: string;
  details: string;
  link: string;
}

export default function EnglishPage() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div
      className={`min-h-screen p-6 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        تعلم اللغة العربية
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => setSelectedTopic(topic)}
              className={`p-4 rounded-2xl shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
              }`}
            >
              <CardContent>
                <h2 className="text-xl font-semibold">{topic.title}</h2>
                <p className="text-sm mt-2">{topic.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedTopic && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className={`p-6 rounded-2xl shadow-xl max-w-md ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedTopic.title}</h2>
            <p className="mb-4">{selectedTopic.details}</p>
            <Link
              className="text-blue-600 dark:text-blue-400 underline block mb-4"
              href={selectedTopic.link}
              target="_blank"
            >
              تعلم المزيد
            </Link>
            <Button className="mt-4" onClick={() => setSelectedTopic(null)}>
              أغلق
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
