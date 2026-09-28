import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Priyanka Yohanna Ceri | Motorsport Engineer',
  description:
    'The engineering journey, projects, and racing story of motorsport engineer Priyanka Yohanna Ceri.',
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
