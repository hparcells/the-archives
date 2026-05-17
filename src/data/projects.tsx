import { Project } from '../types/project';

const PERSONAL_PROJECTS: Project[] = [
  {
    date: '2024-03',
    name: 'Test Project #1',
    images: [],
    tagline: 'A personal experiment in building something useful from scratch.',
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    ),
    status: 'active',
    type: 'personal',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: { github: 'https://github.com', live: 'https://example.com' },
    featured: true
  },
  {
    date: '2023-11',
    name: 'Test Project #2',
    images: [],
    tagline: 'Exploring creative tools built entirely for personal use.',
    description: (
      <>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
        </p>
      </>
    ),
    status: 'archived',
    type: 'personal',
    technologies: ['Next.js', 'MongoDB', 'Node.js'],
    links: { github: 'https://github.com' },
    featured: false
  },
  {
    date: '2025-01',
    name: 'Test Project #3',
    images: [],
    tagline: 'A weekend project that grew into something more.',
    description: (
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
    ),
    status: 'in-progress',
    type: 'personal',
    technologies: ['React', 'Vite', 'MongoDB'],
    links: {},
    featured: false
  }
];

const PROFESSIONAL_PROJECTS: Project[] = [
  {
    date: '2024-06',
    name: 'Test Project #4',
    images: [],
    tagline: 'A client-facing platform redesigned for scale and performance.',
    description: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    ),
    status: 'active',
    type: 'professional',
    technologies: ['Next.js', 'GraphQL', 'MongoDB'],
    links: { live: 'https://example.com' },
    featured: true
  },
  {
    date: '2023-08',
    name: 'Test Project #5',
    images: [],
    tagline: 'An internal tool that replaced a manual process for a team of fifty.',
    description: (
      <>
        <p>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
        </p>
      </>
    ),
    status: 'archived',
    type: 'professional',
    technologies: ['React', 'Express', 'MongoDB'],
    links: {},
    featured: false
  },
  {
    date: '2024-11',
    name: 'Test Project #6',
    images: [],
    tagline: 'A data pipeline built to handle real-time analytics at volume.',
    description: (
      <p>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
        quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
      </p>
    ),
    status: 'in-progress',
    type: 'professional',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    links: {},
    featured: false
  }
];

const OPEN_SOURCE_PROJECTS: Project[] = [
  {
    date: '2023-05',
    name: 'Test Project #7',
    images: [],
    tagline: 'A small utility library with a surprisingly large number of users.',
    description: (
      <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
        et voluptates repudiandae sint et molestiae non recusandae.
      </p>
    ),
    status: 'active',
    type: 'open-source',
    technologies: ['TypeScript', 'React', 'Vitest'],
    links: { github: 'https://github.com', live: 'https://example.com' },
    featured: true
  },
  {
    date: '2022-09',
    name: 'Test Project #8',
    images: [],
    tagline: 'A community-maintained fork of an abandoned project people still relied on.',
    description: (
      <>
        <p>
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
          alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    status: 'on-hold',
    type: 'open-source',
    technologies: ['JavaScript', 'Node.js', 'Express'],
    links: { github: 'https://github.com' },
    featured: false
  },
  {
    date: '2024-02',
    name: 'Test Project #9',
    images: [],
    tagline: 'A CLI tool for automating repetitive developer workflows.',
    description: (
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </p>
    ),
    status: 'active',
    type: 'open-source',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    links: { github: 'https://github.com' },
    featured: false
  }
];

const ACADEMIC_PROJECTS: Project[] = [
  {
    date: '2022-05',
    name: 'Test Project #10',
    images: [],
    tagline: 'A research prototype demonstrating a novel approach to graph traversal.',
    description: (
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet.
      </p>
    ),
    status: 'archived',
    type: 'academic',
    technologies: ['Python', 'NetworkX', 'Next.js'],
    links: { github: 'https://github.com' },
    featured: false
  },
  {
    date: '2023-04',
    name: 'Test Project #11',
    images: [],
    tagline: 'A simulation built for a graduate course in distributed systems.',
    description: (
      <>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur.
        </p>
        <p>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur, vel illum dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </>
    ),
    status: 'archived',
    type: 'academic',
    technologies: ['Python', 'React', 'MongoDB'],
    links: { github: 'https://github.com' },
    featured: false
  },
  {
    date: '2024-08',
    name: 'Test Project #12',
    images: [],
    tagline: 'An ongoing research tool for analyzing large corpora of text.',
    description: (
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident.
      </p>
    ),
    status: 'in-progress',
    type: 'academic',
    technologies: ['Python', 'Next.js', 'MongoDB'],
    links: {},
    featured: true
  }
];

export const PROJECTS: Project[] = [
  ...PERSONAL_PROJECTS,
  ...PROFESSIONAL_PROJECTS,
  ...OPEN_SOURCE_PROJECTS,
  ...ACADEMIC_PROJECTS
];
