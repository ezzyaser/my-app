import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'المقالات',
  description: 'إقرأ مقالات مفيدة في العلوم وطرق التعلم وتحسين أسلوب الحياة😊',
  icons: '/Images/learn2.jpg',
};

export default function BlogLayout({
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
