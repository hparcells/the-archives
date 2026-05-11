import PageLayout from '@/components/PageLayout';

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
        </ul>
      </section>
    </PageLayout>
  );
}

export default Cool;
