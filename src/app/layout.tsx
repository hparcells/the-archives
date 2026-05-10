import type { Metadata } from 'next';
import { DM_Mono, Major_Mono_Display, Space_Grotesk } from 'next/font/google';

import '@/styles/root.css';

const majorMonoDisplay = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-major-mono-display'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono'
});

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
    <html
      lang='en'
      className={`${majorMonoDisplay.variable} ${spaceGrotesk.className} ${dmMono.variable} bg-mist-950 text-stone-400`}
    >
      <body className='antialiased'>
        <main className='pt-8 sm:pt-16 px-4 pb-4 max-w-4xl w-full m-auto'>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
