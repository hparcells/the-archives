import type { Metadata } from 'next';
import { B612_Mono, Major_Mono_Display, Space_Grotesk } from 'next/font/google';

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

const b612Mono = B612_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-b612-mono'
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
      className={`${majorMonoDisplay.variable} ${spaceGrotesk.className} ${b612Mono.variable} bg-mist-950 text-stone-400`}
    >
      <body className='antialiased'>
        <main className='pt-8 sm:pt-16 px-4 pb-8 max-w-4xl w-full m-auto'>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
