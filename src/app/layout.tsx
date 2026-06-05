import type { Metadata } from 'next';
import Vazir from '@constants/localFont';
import Header from '@components/header/header';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | بلاگ اپ',
    default: 'بلاگ اپ',
  },
  description: 'اپلیکیشن مدیریت بلاگ ها',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={Vazir.variable}>
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
