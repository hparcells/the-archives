import type { Metadata } from 'next';

import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Internet Links'
};

function Links() {
  return (
    <PageLayout
      title='Internet Links'
      description="A collection of interesting websites, useful tools, and resources I've found across the internet."
    >
      <section className='stack-4'>
        <h2>Reference</h2>
        <ul>
          <li>
            <a
              href='https://namingschemes.com/Main_Page'
              target='_blank'
            >
              Naming Schemes
            </a>
            : Groups of themed names for devices or otherwise.
          </li>
          <li>
            <a
              href='https://github.com/sindresorhus/awesome'
              target='_blank'
            >
              Awesome
            </a>
            : Awesome lists about all kinds of interesting topics.
          </li>
        </ul>
      </section>
      <section className='stack-4'>
        <h2>Learning</h2>
        <ul>
          <li>
            <a
              href='https://play-morse.lowreal.net/'
              target='_blank'
            >
              Play Morse Code
            </a>
            : Play morse code samples.
          </li>
        </ul>
      </section>
      <section className='stack-4'>
        <h2>Tools</h2>
        <ul>
          <li>
            <a
              href='https://maketintsandshades.com/'
              target='_blank'
            >
              Tint & Shade Generator
            </a>
            : Generate lighter and darker shades around a color.
          </li>
          <li>
            <a
              href='https://hammertime.cyou/en'
              target='_blank'
            >
              HammerTime
            </a>
            : Discord dynamic timestamp generator.
          </li>
          <li>
            <a
              href='https://rebane2001.com/discord-colored-text-generator/'
              target='_blank'
            >
              Rebane&apos;s Discord Colored Text Generator
            </a>
            : Generate Discord code blocks with colored text.
          </li>
        </ul>
      </section>
      <section className='stack-4'>
        <h2>Art</h2>
        <ul>
          <li>
            <a
              href='https://www.pinterest.com/christineisnothere/propic-x-taco/'
              target='_blank'
            >
              Propic x Taco
            </a>
            : Propic x Taco anatomy hosted on Pinterest.
          </li>
          <li>
            <a
              href='https://line-of-action.com/practice-tools/'
              target='_blank'
            >
              Line of Action
            </a>
            : Drawing from reference practice tool.
          </li>
          <li>
            <a
              href='https://referenceangle.com/'
              target='_blank'
            >
              Reference Angle
            </a>
            : View the human face from different angles.
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}

export default Links;
