import React from 'react';
import AboutIntro from '@/components/AboutIntro';
export const metadata = {
  title: 'إقرأ عن المصمم 🦸‍♂️',
  description: 'كاتب هذا الموقع ومصممه 👨‍💻',
};

export default function page() {
  return (
    <div>
      {' '}
      <AboutIntro />
    </div>
  );
}
