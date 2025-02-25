import type { Metadata } from 'next';
import '@/app/globals.css';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = {
  title: 'Learn With me📚',
  description: 'Learn Everything you need to be ',
  icons: '/Images/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className=" scroll-p-20 scroll-smooth"
      suppressHydrationWarning
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
                <Navbar />
                {children}
              </ThemeProvider>
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
