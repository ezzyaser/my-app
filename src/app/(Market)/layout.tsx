export const metadata = {
  title: 'متجر الدرر 💎',
  description: '',
  icons: '/Images/Market.webp',
};

export default function MarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-grow flex-1 ">{children}</div>;
}
