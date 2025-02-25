import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soft Skills',
  description: 'To learn Soft Skills to be Good in Work Envieroment',
};

import React from 'react';
import Hero from './components/Hero';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function page() {
  return (
    <MaxWidthWrapper>
      <div dir="rtl">
        <Hero />
      </div>
    </MaxWidthWrapper>
  );
}
