import Navbar from '@/components/Navbar';
export const metadata = {
  title: 'تعلم معي📚',
  description: 'تعلم كل ما تحتاجه لتصبح أفضل في حياتك🦸‍♂️',
};

export default function HomeLayout({
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
