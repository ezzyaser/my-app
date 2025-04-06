import Navbar from '@/components/Navbar';
export const metadata = {
  title: 'اللغات',
  description: 'For Learn some languages for you',
  icons: '/Icons/lang.svg',
};

export default function LanguagesLayout({
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
