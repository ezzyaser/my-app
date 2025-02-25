import React from 'react';
import Hero from './components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Islamic-Science📚',
  description: 'For Teach All Islamic-Science and share some Advices to learn',
};
export default function page() {
  return (
    <div>
      <Hero />
    </div>
  );
}
