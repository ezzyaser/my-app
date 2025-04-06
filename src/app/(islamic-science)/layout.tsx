import Navbar from '@/components/Navbar';
export const metadata = {
  title: 'العلوم الشرعية',
  description: 'تعلم كل العلوم الشرعية التي تحتاجها📖 ',
  icons: '/Icons/quran.svg',
};

export default function IslamicLayout({
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
