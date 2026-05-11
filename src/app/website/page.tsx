import PageLayout from '@/components/PageLayout';
import Timeline from '@/components/Timeline';

const WEBSITE_VERSIONS = [
  {
    date: '2016',
    title: 'Version 1',
    content: (
      <p>
        Static HTML, CSS, and JS. A blog and downloads page. Hosted on{' '}
        <a
          href='https://surge.sh/'
          target='_blank'
        >
          Surge.sh
        </a>
        .
      </p>
    )
  },
  {
    date: '2017',
    title: 'Version 2',
    content: <p>A modern redesign, still static HTML, CSS, and JS.</p>
  },
  {
    date: '2018',
    title: 'Version 3',
    content: (
      <p>
        Became a project index. Used a rudimentary HTML merging tool and deployed on{' '}
        <a
          href='https://www.netlify.com/'
          target='_blank'
        >
          Netlify
        </a>
        .
      </p>
    )
  },
  {
    date: '2018',
    title: 'Version 4',
    content: (
      <p>
        Another redesign.... using{' '}
        <a
          href='https://www.w3schools.com/w3css/'
          target='_blank'
        >
          W3.CSS
        </a>
        ??? Started using Cloudflare.
      </p>
    )
  },
  {
    date: '2019',
    title: 'Version 6',
    content: (
      <p>
        Same as Version 5, but using{' '}
        <a
          href='https://sass-lang.com/'
          target='_blank'
        >
          SASS/SCSS
        </a>
        .
      </p>
    )
  },
  {
    date: '2019',
    title: 'Version 7',
    content: (
      <p>
        Rewrote everything in{' '}
        <a
          href='https://www.gatsbyjs.com/'
          target='_blank'
        >
          Gatsby
        </a>
        . Started exploring more customized{' '}
        <a
          href='https://eslint.org/'
          target='_blank'
        >
          ESLint
        </a>{' '}
        configs.
      </p>
    )
  },
  {
    date: '2019',
    title: 'Version 8',
    content: <p>Moved toward a single-page portfolio. The Archives makes its first appearance.</p>
  },
  {
    date: '2020',
    title: 'Version 9',
    content: (
      <p>
        Started using{' '}
        <a
          href='https://nextjs.org/'
          target='_blank'
        >
          Next.js
        </a>
        , finally. The Archives expanded into something resembling what it is today. Migrated to a{' '}
        <a
          href='digitalocean.com'
          target='_blank'
        >
          DigitalOcean
        </a>{' '}
        droplet in 2022.
      </p>
    )
  },
  {
    date: '2023',
    title: 'Version 9.5',
    content: (
      <p>
        Complete redesign of the website, further refining its portfolio look-and-feel. Implemented
        backend features, hosted using{' '}
        <a
          href='https://httpd.apache.org/'
          target='_blank'
        >
          Apache
        </a>{' '}
        and{' '}
        <a
          href='https://pm2.io/'
          target='_blank'
        >
          PM2
        </a>
        .
      </p>
    )
  },
  {
    date: '2026',
    title: 'Version 10',
    content: (
      <p>
        Migrated to{' '}
        <a
          href='https://www.docker.com/'
          target='_blank'
        >
          Docker
        </a>{' '}
        and{' '}
        <a
          href='https://nginxproxymanager.com/'
          target='_blank'
        >
          Nginx Proxy Manager
        </a>
        . Doing things the proper way, finally. Redesigned The Archives.
      </p>
    )
  }
];

function Website() {
  return (
    <PageLayout
      title='This Website'
      description={
        <p>
          My personal website (and the archives) have gone through quite a few rewrites, utilizing
          various technologies and frameworks throughout the years. The very first version was built
          sometime in 2016 with only static content and hosted on{' '}
          <a
            href='https://surge.sh/'
            target='_blank'
          >
            Surge.sh
          </a>
          . Now it&apos;s built with{' '}
          <a
            href='https://nextjs.org/'
            target='_blank'
          >
            Next.js
          </a>
          .
        </p>
      }
    >
      <p>
        On the frontend, the site is built with{' '}
        <a
          href='https://nextjs.org/'
          target='_blank'
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href='https://www.typescriptlang.org/'
          target='_blank'
        >
          TypeScript
        </a>
        . Styling is done with{' '}
        <a
          href='https://tailwindcss.com/'
          target='_blank'
        >
          Tailwind CSS
        </a>
        .
      </p>
      <p>
        The site runs on a DigitalOcean droplet, a{' '}
        <a
          href='https://ubuntu.com/'
          target='_blank'
        >
          Ubuntu
        </a>{' '}
        VPS that hosts this website and all my other non-static projects. Traffic routes through{' '}
        <a
          href='https://nginxproxymanager.com/'
          target='_blank'
        >
          Nginx Proxy Manager
        </a>
        , SSL is handled automatically via{' '}
        <a
          href='https://letsencrypt.org/'
          target='_blank'
        >
          Let&apos;s Encrypt
        </a>
        , and the whole thing is monitored by{' '}
        <a
          href='https://uptime.kuma.pet/'
          target='_blank'
        >
          Uptime Kuma
        </a>
        . The site itself is built locally, packaged into a{' '}
        <a
          href='https://www.docker.com/'
          target='_blank'
        >
          Docker
        </a>{' '}
        image, pushed to{' '}
        <a
          href='https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry'
          target='_blank'
        >
          GitHub Container Registry
        </a>
        , and pulled onto the server.
      </p>
      <section className='stack-4'>
        <h2>Version History</h2>
        <Timeline items={WEBSITE_VERSIONS} />
      </section>
    </PageLayout>
  );
}

export default Website;
