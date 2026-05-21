import { Project } from '../../types/project';

export const FREELANCE_PROJECTS: Project[] = [
  {
    type: 'freelance',
    date: '2025-01-02',
    startDate: '2023-05-25',
    name: 'TCK.gg',
    tagline: 'Full-stack monorepo community platform for TCK.',
    images: ['tck.png'],
    status: 'archived',
    description: (
      <>
        <p>
          Independently built and maintained a full-stack community platform for TCK. Built with a
          monorepo architecture using Next.js and Node.js with Sentry integration for error
          monitoring. Utilized Jest and Cypress for testing both business logic and end-to-end.
        </p>
        <p>
          Developed core platform features including user authentication, moderation tooling, and
          leaderboard caching. Integrated multiple third-party APIs to aggregate external data.
        </p>
        <p>
          Focused on translating detailed Figma designs into responsive user interfaces by creating
          a custom component library from scratch.
        </p>
        <p>
          Managed a Ubuntu server including deployment, configuration, maintenance, and security.
        </p>
      </>
    ),
    technologies: [
      'TypeScript',
      'Next.js',
      'SASS',
      'MongoDB',
      'Prisma',
      'Framer Motion',
      'Node.js',
      'Sapphire',
      'Cypress',
      'Jest',
      'Figma',
      'Sentry',
      'Ubuntu',
      'PM2',
      'Apache'
    ],
    links: {
      github: 'https://github.com/tck-gg/tck'
    },
    featured: false
  }
];
