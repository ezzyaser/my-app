'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import topics from '@/config/topics';

export default function Page() {
  const [selectedLevel, setSelectedLevel] = useState('الكل');

  // ✅ التحقق من وجود المواضيع قبل التصفية
  if (!topics || topics.length === 0)
    return <p className="text-center mt-6">جاري التحميل...</p>;

  // ✅ تصفية المواضيع بناءً على المستوى المختار
  const filteredTopics =
    selectedLevel === 'الكل'
      ? topics
      : topics.filter((topic) => topic.level === selectedLevel);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className=" flex flex-col items-center justify-center py-2 mb-4 gap-3">
        <h1 className="text-3xl font-bold ">مخطط تعلم البرمجة وعلوم الحاسب</h1>
        <p>( حدد مستواك وإبدأ التعلم )</p>
      </div>
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {/* ✅ تحسين تصميم الأزرار */}
        {['الكل', 'مبتدئ', 'متوسط', 'متقدم', 'التخصص', 'المستقبل', 'آخر'].map(
          (level) => (
            <Button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-3 text-lg transition-all duration-300 ${
                selectedLevel === level
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {level}
            </Button>
          ),
        )}
      </div>

      {/* ✅ تحسين تصميم البطاقات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic, index) => (
          <Card
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <CardContent>
              {topic.link && (
                <div className="mt-4">
                  <a
                    href={topic.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <h2 className="text-xl font-semibold">{topic.title}</h2>
                    <p className="text-gray-600 dark:text-white">
                      {topic.description}
                    </p>
                    <span className="text-sm text-blue-600 font-medium">
                      {topic.level}
                    </span>
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
