import type { Metadata } from 'next';

import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Cool People'
};

function Cool() {
  return (
    <PageLayout title='Cool People'>
      <section className='stack-4'>
        <p>
          Infinite love and thanks to the following people, in no particular order, for showing me
          the world, making me better, and teaching me to love myself. Some of you I talk to daily,
          some not in years, some only once. It doesn&apos;t matter. You shaped who I am today.{' '}
          <em>Per aspera, ad astra.</em>
        </p>
        <ul className='columns-2 sm:columns-3'>
          <li>Josh</li>
          <li>Caleb</li>
          <li>Jim</li>
          <li>Chloe</li>
          <li>Brandon</li>
          <li>Danny</li>
          <li>Jacob</li>
          <li>Ethan</li>
          <li>Ben</li>
          <li>Denis</li>
          <li>&quot;Tibb&quot;</li>
          <li>Chaz</li>
          <li>Nick</li>
          <li>Chloé</li>
          <li>Holly</li>
        </ul>
      </section>
      <section className='stack-4'>
        <h2>Supporters</h2>
        <p>
          A big thanks to everyone who has supported me through Ko-fi. It means more than you know.
        </p>
        <ul>
          <li>G lander</li>
          <li>Binkiklou</li>
          <li>OtterDemon</li>
          <li>
            <em>...and others unnamed.</em>
          </li>
        </ul>
      </section>
      <section className='stack-4'>
        <h2>Influences</h2>
        <p>People whose work has inspired me, motivated me, or have shaped the way I think.</p>
        <ul>
          <li>
            Pierce Brown, <em>Red Rising</em>
          </li>
          <li>
            Haruichi Furudate, <em>Haikyuu!!</em>
          </li>
          <li>
            Makoto Yukimura, <em>Vinland Saga</em>
          </li>
          <li>
            Mike Boyd, <em>Learn Quick</em>
          </li>
          <li>
            Yes Theory, <em>Seek Discomfort</em>
          </li>
          <li>
            Khaled Hosseini, <em>The Kite Runner</em>
          </li>
          <li>
            Wube Software, <em>Factorio</em>
          </li>
          <li>Clayton Jennings</li>
          <li>Marc Mero</li>
        </ul>
      </section>
    </PageLayout>
  );
}

export default Cool;
