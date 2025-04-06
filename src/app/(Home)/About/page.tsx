import About from '@/components/About';
import React from 'react';
export const metadata = {
  title: 'إقرأ عني😊',
  description: 'سيرة ذاتية عن المصمم',
  icons: '/Images/person.jpeg',
};
export default function page() {
  return (
    <div>
      <About />
    </div>
  );
}
