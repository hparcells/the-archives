import { Project } from '../types/project';

const PERSONAL_PROJECTS: Project[] = [];

const PROFESSIONAL_PROJECTS: Project[] = [];

const OPEN_SOURCE_PROJECTS: Project[] = [
  {
    type: 'open-source',
    date: '2024-11-26',
    name: 'osu-metronome Music Gain Slider',
    tagline: 'Added an additional volume control slider to a Python osu! metronome project.',
    images: ['/images/projects/osu-metronome.png'],
    status: 'complete',
    description: (
      <>
        <p>
          This application was made to add a synced metronome over an osu! beatmap&apos;s song. It
          did so by editing a local audio file by overlaying metronome sounds throughout the song.
          It came with a slider to adjust how loud the added metronome would be.
        </p>
        <p>
          In my case, I wanted a tool to entirely replace a song with a metronome, but this
          application did not support changing the volume of the song itself. So I added a music
          gain slider to achieve this effect.
        </p>
      </>
    ),
    technologies: ['Python', 'tkinter', 'pydub'],
    links: {
      github: 'https://github.com/nekiak/osu-metronome',
      pullRequest: 'https://github.com/nekiak/osu-metronome/pull/1'
    },
    featured: false
  },
  {
    type: 'open-source',
    date: '2019-08-20',
    name: 'Update RLBotJS Documentation',
    tagline: 'Added missing details in the RLBotJS documentation.',
    images: [],
    status: 'complete',
    description: (
      <p>
        RLBotJS had missing details for one of Rocket League&apos;s quick chats. I opened a simple
        pull request to add it.
      </p>
    ),
    technologies: [],
    links: {
      github: 'https://github.com/SuperVK/RLBotJS',
      pullRequest: 'https://github.com/SuperVK/RLBotJS/pull/15'
    },
    featured: false
  },
  {
    type: 'open-source',
    date: '2018-10-03',
    name: 'Discord Donuts Deliver Command',
    tagline: 'Added additional Discord bot functionality.',
    images: [],
    status: 'complete',
    description: (
      <p>
        Added a core command to an open source Discord bot. Used <code>discord.js</code> to manage
        server invites and send embeds in messages.
      </p>
    ),
    technologies: ['JavaScript', 'discord.js', 'Sequelize'],
    links: {
      github: 'https://github.com/Yamgirly/discord-donuts-archive',
      pullRequest: 'https://github.com/Yamgirly/discord-donuts-archive/pull/1'
    },
    featured: false
  }
];

const ACADEMIC_PROJECTS: Project[] = [];

export const PROJECTS: Project[] = [
  ...PERSONAL_PROJECTS,
  ...PROFESSIONAL_PROJECTS,
  ...OPEN_SOURCE_PROJECTS,
  ...ACADEMIC_PROJECTS
];
