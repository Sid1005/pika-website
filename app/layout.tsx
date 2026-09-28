import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Priyanka Yohanna Ceri - You Are Great!',
  description: 'Priyanka Yohanna Ceri - You Are Great!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
