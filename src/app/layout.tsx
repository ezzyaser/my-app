import type { Metadata } from 'next';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
export const metadata: Metadata = {
  title: 'زاد المعرفة📜',
  description: '',
  icons: '/Images/logo.webp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className=" scroll-p-20 scroll-smooth suppressHydrationWarning "
      dir="rtl"
    >
      <body>
        <div className="h-full relative font-sans antialiased ">
          <main className=" relative flex flex-col min-h-screen">
            <div className="flex-grow flex-1">
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
