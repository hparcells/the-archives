import type { Metadata } from 'next';

import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Spreadsheets'
};

function Cool() {
  return (
    <PageLayout
      title='Spreadsheets'
      description='I love making spreadsheets to track things or run calculations. These are some that might be worth making public.'
    >
      <section className='stack-4'>
        <h2>Reference</h2>
        <ul>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/1iNvxIq26vOTbI3qhXYcD8VTJ0SYfYCiIh4mZ0YwJCjM/edit?usp=sharing'
              target='_blank'
            >
              Backpack and EDC
            </a>
            : List and links of tech, tools, and items I carry with or around me.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/14q72dLnyfGd4Zt5hINrikuA5FNnRfLnEd732RVPlCxk/edit?usp=sharing'
              target='_blank'
            >
              Mechanical Pencils
            </a>
            : My current mechanical pencil collection and which lead I use.
          </li>
        </ul>
      </section>
      <section className='stack-4'>
        <h2>Gaming</h2>
        <ul>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/14YThGTAQQclZjUyihgA-N2LXFTrFq4WZJUkYJvZmcQo/edit?gid=983466668'
              target='_blank'
            >
              Round1
            </a>
            : Tracking Round1 credit efficiency with historical data and rhythm gaming spend.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/1CNCWPo9jbyjLnMGmUSi0yEOpgbU4cZGwdUvgu2KTX5U/edit?usp=sharing'
              target='_blank'
            >
              Sound Voltex
            </a>
            : Tracking Sound Voltex skill progression.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/1Nha5eWMSRxdrMcCqQ7vpkIMvyExBEAfQcQ3kUOLe0aQ/edit?usp=sharing'
              target='_blank'
            >
              maimai
            </a>
            : Tracking maimai skill progression.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/1YYu9tNWE7hryX1QdDcJZNWcys3WiBgi3neh3rUL0KdQ/edit?usp=sharing'
              target='_blank'
            >
              MythicHunter758&apos;s Tournament History
            </a>
            : Self explanatory. Tracks former teammates.
          </li>
          <li>
            <a
              href='https://docs.google.com/spreadsheets/d/17cwZ9xUbEFDxOkZmrmqxB1ZWefl2kmTdxSYj16ltN38/edit?gid=532013768'
              target='_blank'
            >
              Rocket League
            </a>
            : Rocket League match history and data analytics. Tracks game quality.
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}

export default Cool;
