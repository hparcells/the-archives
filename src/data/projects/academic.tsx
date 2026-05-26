import { Project } from '../../types/project';

export const ACADEMIC_PROJECTS: Project[] = [
  {
    type: 'academic',
    date: '2023-04-17',
    startDate: '2023-01-17',
    name: 'CSI 2310 Code Runner',
    tagline: 'Overengineered coursework for CSI 2310: Data Structures.',
    images: ['csi-2310.png'],
    status: 'archived',
    description: (
      <>
        <p>
          Originally designed to be a project to hold multiple main classes for course tutorial
          projects and assignments, I implemented every code snippet as its own runnable thread and
          made an IFrame UI to pick and run them.
        </p>
        <p>Made from boredom, but served as an IFrame and Runnable refresher.</p>
      </>
    ),
    technologies: ['Java', 'IFrame'],
    links: {
      github: 'https://github.com/hparcells/csi-2310'
    },
    featured: false,
    defaultHidden: false
  },
  {
    type: 'academic',
    date: '2024-09-24',
    startDate: '2024-09-17',
    name: 'CSI 3150 Web and Mobile Systems Coursework',
    tagline: 'Coursework for a basic web development course.',
    images: [],
    status: 'archived',
    description: (
      <p>
        Followed one lesson to learn about basic HTML syntax, CSS styling, and semantic HTML
        elements.
      </p>
    ),
    technologies: ['HTML', 'CSS'],
    links: {
      github: 'https://github.com/hparcells/csi-3150/tree/master'
    },
    featured: false,
    defaultHidden: true
  },
  {
    type: 'academic',
    date: '2025-04-11',
    startDate: '',
    name: 'CSI 3370: Software Engineering and Practice Final Project',
    tagline: 'Simple API request demonstration.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          For the duration of this course, I was assigned to the review team. In a small group, we
          assisted project teams with the development of their applications through testing and
          asking thought-provoking questions. Since we did not have a project, we were individually
          tasked with re-implementing a feature from a project of our choice to demonstrate
          development proficiency.
        </p>
        <p>
          For this, I chose to re-implement a simple API request flow, which fetched data from a
          requested zip code using a weather API with API key, and rendered relevant data in a
          simple UI component.
        </p>
        <p>Developed in under two hours.</p>
      </>
    ),
    technologies: ['HTML', 'CSS', 'JavaScript', 'RESTful API'],
    links: {},
    featured: false,
    defaultHidden: true
  },
  {
    type: 'academic',
    date: '2025-12-01',
    startDate: '2025-11-10',
    name: 'Zero-knowledge Password Manager',
    tagline: 'Final project for CSI 3480: Security and Privacy in Computing.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>As a group, developed a password manager with zero-knowledge encryption.</p>
        <p>
          Derived a Key Encryption Key (KEK) from the user&apos;s master password and salt using
          Argon2. Uses the KEK to encrypt and decrypt the user&apos;s Data Encryption Key (DEK)
          using AES-256. Encrypts/decrypts items using the DEK on the user&apos;s device before
          sending them to the server. The server and database only sees encrypted items and the
          encrypted DEK.
        </p>
      </>
    ),
    technologies: ['TypeScript', 'Next.js', 'Python', 'Flask', 'Firebase'],
    links: {
      github: 'https://github.com/hparcells/csi-3480-password-manager'
    },
    featured: false,
    defaultHidden: false
  },
  {
    type: 'academic',
    date: '2026-01-13',
    startDate: '2026-01-12',
    name: 'CSI 4999 Individual Presentation',
    tagline: 'Self introduction website.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          Developed to introduce myself to the CSI 4999: Senior Capstone Project class before group
          formation.
        </p>
        <p>
          Followed a portfolio website format, displaying a brief paragraph about me, my education,
          work history, and projects. Included separate pages for notable projects and hobbies.
          Presented in-person.
        </p>
      </>
    ),
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: {},
    featured: false,
    defaultHidden: true
  },
  {
    type: 'academic',
    date: '2026-04-05',
    startDate: '2026-02-02',
    name: 'Quizoodle',
    tagline: 'Senior Capstone group project.',
    images: [
      'quizoodle/quizoodle-home.png',
      'quizoodle/quizoodle-course.png',
      'quizoodle/quizoodle-code.png'
    ],
    status: 'archived',
    description: (
      <>
        <p>
          In a group of five, developed a full-stack application that combines learning management
          system features and a flashcard platform inspired by Quizlet.
        </p>
        <p>Plain HTML, CSS, and JavaScript frontend with a Python backend using MySQL.</p>
      </>
    ),
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
    links: {
      github: 'https://github.com/hparcells/csi-4999-project'
    },
    featured: false,
    defaultHidden: false
  },
  {
    type: 'academic',
    date: '2026-02-08',
    startDate: '',
    name: 'Travel Website',
    tagline: 'Basic HTML/CSS/JS project for CSI 4510: Advanced Web Design.',
    images: [],
    status: 'archived',
    description: (
      <p>
        HTML, CSS, and JavaScript introductory project. Introduced topics of HTML syntax, semantic
        elements, tables, and form elements.
      </p>
    ),
    technologies: ['HTML', 'CSS'],
    links: {},
    featured: false,
    defaultHidden: true
  },
  {
    type: 'academic',
    date: '2026-03-01',
    startDate: '',
    name: 'Movie Database Query Tool',
    tagline: 'Basic API integration project for CSI 4510: Advanced Web Design.',
    images: ['movie-database-query-tool.png'],
    status: 'archived',
    description: (
      <>
        <p>
          Introduction to JavaScript and implementing APIs. The project takes a user search and
          queries the Open Movie Database and renders the results. Using localStorage, the user is
          able to manage favorites.
        </p>
        <p>Developed in under two hours.</p>
      </>
    ),
    technologies: ['HTML', 'CSS', 'JS', 'RESTful API'],
    links: {},
    featured: false,
    defaultHidden: true
  },
  {
    type: 'academic',
    date: '2026-03-28',
    startDate: '',
    name: 'Dog Breed Lookup Tool',
    tagline: 'Backend introduction project for CSI 4510: Advanced Web Design.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          Introduction to using backend services. Developed an API endpoint using PHP to fetch,
          normalize, aggregate, and return data from multiple APIs.
        </p>
        <p>Developed in roughly 90 minutes.</p>
      </>
    ),
    technologies: ['HTML', 'CSS', 'JS', 'PHP', 'RESTful API'],
    links: {},
    featured: false,
    defaultHidden: true
  },
  {
    type: 'academic',
    date: '2026-04-29',
    startDate: '2026-04-08',
    name: 'QuotDB',
    tagline: 'Final project for CSI 4510: Advanced Web Design.',
    images: ['quotdb.png'],
    status: 'archived',
    description: (
      <>
        <p>
          Final project of our choice to combine all skills learned during the semester. Free range
          of technologies allowed.
        </p>
        <p>
          I developed a full-stack web application with Next.js to track and manage quotes. Quotes
          can be attributed to a source and author. While I could have used Next.js&apos;s API
          routes, to fulfill the requirement outlined by the assignment, I created endpoints using
          NestJS.
        </p>
        <p>
          The only formal requirement was to include the use of a third-party API. For this, I
          included a &quot;Fetch a random quote&quot; button.
        </p>
      </>
    ),
    technologies: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'NestJS',
      'MongoDB',
      'Prisma',
      'shadcn'
    ],
    links: {},
    featured: false,
    defaultHidden: false
  },
  {
    type: 'academic',
    date: '2025-12-10',
    startDate: '2025-12-03',
    name: 'Parallel Image Processing Pipeline',
    tagline:
      'Demonstration of parallel processing across CPU cores for CSI 4650: Parallel and Distributed Computing.',
    images: ['parallel-image-processing-pipeline.png'],
    status: 'archived',
    description: (
      <>
        <p>Developed to demonstrate the advantages of utilizing multiple CPU cores.</p>
        <p>
          Built a Python application to queue 48 images in both a sequential and parallel method.
          Uses Python&apos;s multiprocessing library and Python Imaging Library for image
          manipulation.
        </p>
      </>
    ),
    technologies: ['Python'],
    links: {
      github: 'https://github.com/hparcells/parallel-image-processing-pipeline'
    },
    featured: false,
    defaultHidden: false
  },
  {
    type: 'academic',
    date: '2024-04-15',
    startDate: '2024-01-11',
    name: 'SmartCash',
    tagline: 'Finance tracker group project for CSI 2999: Sophomore Project.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          In a group of six, built a finance tracking, budgeting, and visualization tool with Java.
          Ran as a desktop application using IFrame, stores data locally using SQL.
        </p>
      </>
    ),
    technologies: ['Java', 'SQL'],
    links: {
      github: 'https://github.com/hparcells/smartcash'
    },
    featured: false,
    defaultHidden: false
  },
  {
    type: 'academic',
    date: '2025-04-13',
    startDate: '2025-02-07',
    name: 'AthleticDB',
    tagline:
      'Athletic events, athlete stats, and team tracker. Final group project for CSI 3450: Database Design and Implementation.',
    images: [],
    status: 'complete',
    description: (
      <>
        <p>In a group of four, developed a full-stack web application inspired by Athletic.net.</p>
        <p>Implemented pages for athletes, meets, schools, and teams.</p>
      </>
    ),
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Python', 'Flask', 'PostgreSQL'],
    links: {
      github: 'https://github.com/hparcells/athleticdb'
    },
    featured: false,
    defaultHidden: false
  }
];
