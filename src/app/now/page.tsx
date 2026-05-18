import type { Metadata } from 'next';
import { format } from 'date-fns';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

import PageLayout from '@/components/PageLayout';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Now'
};

interface FrontmatterData {
  updated: Date;
}

interface NowData {
  content: string;
  updated: string;
}

const CACHE_TTL_MS = 3600000;
const FALLBACK: NowData = {
  content: 'No content found.',
  updated: 'Unknown'
};

let nowCache: { data: NowData; expiresAt: number } | null = null;

function getCachedData(isDev: boolean): NowData | null {
  if (!isDev && nowCache && Date.now() < nowCache.expiresAt) {
    return nowCache.data;
  }
  return null;
}

function parseFrontmatter(raw: string): NowData {
  const { content, data } = matter(raw);
  const { updated } = data as FrontmatterData;

  return {
    content: content.trim(),
    updated: format(
      new Date(updated.getUTCFullYear(), updated.getUTCMonth(), updated.getUTCDate()),
      'MMMM do, yyyy'
    )
  };
}

async function fetchRaw(isDev: boolean): Promise<string | null> {
  const url = `${process.env.NOW_URL}${isDev ? `?t=${Date.now()}` : ''}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    return null;
  }
  return res.text();
}

async function getNowData(): Promise<NowData> {
  if (!process.env.NOW_URL) {
    return FALLBACK;
  }

  const isDev = process.env.NODE_ENV === 'development';
  const cached = getCachedData(isDev);
  if (cached) {
    return cached;
  }

  try {
    const raw = await fetchRaw(isDev);
    if (raw === null) {
      return nowCache?.data ?? FALLBACK;
    }

    const data = parseFrontmatter(raw);
    if (!isDev) {
      nowCache = {
        data,
        expiresAt: Date.now() + CACHE_TTL_MS
      };
    }
    return data;
  } catch {
    return nowCache?.data ?? FALLBACK;
  }
}

async function Now() {
  const { content, updated } = await getNowData();

  return (
    <PageLayout
      title='Now'
      description={
        <p>
          <em>Last updated: {updated}</em>
        </p>
      }
    >
      <div className='stack-4'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <p>
        See also:{' '}
        <a
          href='https://nownownow.com/about'
          target='_blank'
        >
          <em>What is a &quot;now page&quot;?</em>
        </a>
      </p>
    </PageLayout>
  );
}

export default Now;
