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
    featured: true,
    defaultHidden: false
  },
  {
    type: 'freelance',
    date: '2020-11-24',
    startDate: '2020-11-17',
    name: 'Butterfly SMP Season 1 Mod',
    tagline: 'Content addition mod for the Butterfly SMP server.',
    images: [],
    status: 'archived',
    description: (
      <p>
        Added various recipes and items with custom textures and metadata. Developed for the
        Butterfly SMP on Minecraft 1.16.4.
      </p>
    ),
    technologies: ['Java', 'ForgeGradle'],
    links: {},
    featured: false,
    defaultHidden: false
  },
  {
    type: 'freelance',
    date: '2024-01-11',
    startDate: '2023-11-10',
    name: 'Fireball Wand',
    tagline: 'Fireball launching weapon for the Butterfly SMP.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          Custom weapon addition utilizing custom model data for Minecraft 1.20.1. Implemented
          enhanced player feedback using sound effects and timers.
        </p>
        <p>Developed for the Butterfly SMP.</p>
      </>
    ),
    technologies: ['Java', 'Spigot API'],
    links: {
      github: 'https://github.com/butterfly-pit/fireballwand'
    },
    featured: false,
    defaultHidden: false
  },
  {
    type: 'freelance',
    date: '2024-01-14',
    startDate: '2024-01-10',
    name: 'Rogue Sword',
    tagline: 'Weapon addition for the Butterfly SMP.',
    images: [],
    status: 'archived',
    description: <p>Custom weapon addition utilizing custom model data for Minecraft 1.20.1.</p>,
    technologies: ['Java', 'Spigot API'],
    links: {},
    featured: false,
    defaultHidden: false
  },
  {
    type: 'freelance',
    date: '2024-01-14',
    startDate: '2023-11-17',
    name: 'Friendly Zombies',
    tagline: 'Commandable Minecraft drowneds on-command for the Butterfly SMP.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          Added custom on-hit effects to in-game tridents to summon drowneds to fight for the player
          summoning.
        </p>
        <p>Developed for the Butterfly SMP on Minecraft 1.20.1.</p>
      </>
    ),
    technologies: ['Java', 'Spigot API'],
    links: {},
    featured: false,
    defaultHidden: false
  },
  {
    type: 'freelance',
    date: '2024-02-10',
    startDate: '2024-01-15',
    name: 'Persistent Chests',
    tagline: 'Minecraft chests with persistent inventories across worlds.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>Added chests which save their contents to a YAML file using NBT-API.</p>
        <p>Developed for the Butterfly SMP on Minecraft 1.20.1.</p>
      </>
    ),
    technologies: ['Java', 'Spigot API'],
    links: {},
    featured: false,
    defaultHidden: false
  },
  {
    type: 'freelance',
    date: '2024-02-10',
    startDate: '2024-01-06',
    name: 'Tomes',
    tagline: 'Magical books and spells. Built for the Butterfly SMP.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>Added magical books, each with unique abilities for the Butterfly SMP.</p>
        <p>Built for Minecraft 1.20.1.</p>
      </>
    ),
    technologies: ['Java', 'Spigot API'],
    links: {},
    featured: false,
    defaultHidden: false
  },

  {
    type: 'freelance',
    date: '2024-02-15',
    startDate: '2024-01-06',
    name: 'Adaptive Totems',
    tagline: 'Customizable totems with buffs. Built for the Butterfly SMP.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          Modified Minecraft totems to include an inventory which can be customized with buffs.
          Buffs are affected by diminishing returns.
        </p>
        <p>Built for Minecraft 1.20.1.</p>
      </>
    ),
    technologies: ['Java', 'Spigot API'],
    links: {},
    featured: false,
    defaultHidden: false
  },
  {
    type: 'freelance',
    date: '2024-04-24',
    startDate: '',
    name: 'Wither Sword',
    tagline: 'Weapon addition for the Butterfly SMP.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>Added a custom Minecraft weapon with custom on-hit effects for the Butterfly SMP.</p>
        <p>Built for Minecraft 1.20.1.</p>
      </>
    ),
    technologies: ['Java', 'Spigot API'],
    links: {},
    featured: false,
    defaultHidden: false
  }
];
