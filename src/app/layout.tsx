import type { Metadata } from 'next';

import '@/styles/root.css';

export const metadata: Metadata = {
  title: 'The Archives - Hunter Parcells',
  description:
    "A running index of everything I've built, written, and thought about: projects, writing, tools, and more. Updated often."
};

function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}

export default RootLayout;
