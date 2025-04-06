import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata = {
  title: 'تطوير الويب',
  description: 'تعلم كل التقنيات التي تحتاجها لتكون محترفاً في الويب',
  icons: '/Icons/web.svg',
};

export default function TechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow flex-1">
      <Navbar />
      {children}
    </div>
  );
}
