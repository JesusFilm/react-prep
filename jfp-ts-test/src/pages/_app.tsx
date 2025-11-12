import { AppCacheProvider } from '@mui/material-nextjs/v16-pagesRouter';
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <main
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ minHeight: '100vh', fontFamily: 'var(--font-geist-sans)' }}
      >
        <Component {...pageProps} />
      </main>
    </AppCacheProvider>
  );
}

