import { Project } from '../../types/project';

export const PROFESSIONAL_PROJECTS: Project[] = [
  {
    type: 'professional',
    date: '2025-08-11',
    startDate: '2024-05-29',
    name: 'Diag Tracking Application',
    tagline: 'Diagnostic data entry, tracking, and analytics.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          Replaced an outdated and inconsistent process involving a shared spreadsheet. Quality
          technicians analyze a failed part and entered their findings into a large spreadsheet.
          This web application aimed to standardize the data entry process as well as reveal to
          users insights about the history of a part.
        </p>
        <p>
          Built an intuitive data entry form with a strong emphasis on the user experience. This
          included implementing keyboard shortcuts, autocomplete, and dynamic elements and alerts.
          When a part is scanned, the form would instantly reveal its full diagnostic history,
          including how many times it had been previously analyzed, helping technicians make faster
          decisions.
        </p>
        <p>
          Submitted entries are written to a database as immutable records, meaning diagnoses can
          never be altered after the fact, only amended to, ensuring data integrity.
        </p>
        <p>
          Data is surfaced on a searchable, filterable data table supporting structured queries. For
          example, <code>&quot;part=12345 analysis=shorted&quot;</code> allowing users to quickly
          zero in on relevant records across thousands of entries.
        </p>
        <p>
          Developed a detailed analytics dashboard which allowed users to drill down into the data
          and gain deeper insights about parts and their failures. Analytics were able to be
          filtered by date ranges and be compared side-by-side with the previous date range.
        </p>
      </>
    ),
    technologies: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Microsoft SQL Server',
      'Prisma',
      'Recharts',
      'Framer Motion'
    ],
    links: {},
    featured: true
  },
  {
    type: 'professional',
    date: '2024-08-15',
    startDate: '2024-07-16',
    name: 'Reflash Inventory Management System',
    tagline: 'PWA to log inventory movement of parts.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          Developed to keep a record of inventory movement of parts within a specific area of the
          factory floor. Operators scanned data matrix codes inscribed on PCBs to log movements into
          the database. Increased visibility by calculating waiting time for each part.
        </p>
        <p>
          On desktop viewports, implemented the ability to view analytics as well as allow
          authorized users to modify application configuration options.
        </p>
      </>
    ),
    technologies: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Progressive Web App',
      'Microsoft SQL Server',
      'Prisma',
      'shadcn',
      'Recharts'
    ],
    links: {},
    featured: false
  },
  {
    type: 'professional',
    date: '2024-07-15',
    startDate: '2024-07-16',
    name: 'Job Setup Verification Tool',
    tagline: 'Desktop application to verify production line configurations before runs.',
    images: [],
    status: 'archived',
    description: (
      <p>Developed to ensure machine operators have the correct tool for the desired run.</p>
    ),
    technologies: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Electron',
      'Microsoft SQL Server',
      'Prisma',
      'shadcn',
      'Jest'
    ],
    links: {},
    featured: false
  },
  {
    type: 'professional',
    date: '2024-08-13',
    startDate: '2024-07-25',
    name: 'Ignition Reporting Application',
    tagline: 'KPI visualization web application for production line data.',
    images: [],
    status: 'complete',
    description: (
      <p>
        A web application version of the Ignition Tables Import Tool. Imported production line data
        into a Microsoft SQL Server database for visualization. Automatically parsed Excel
        spreadsheet data to insert into appropriate tables. Visualized KPIs using Recharts.
      </p>
    ),
    technologies: [
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Microsoft SQL Server',
      'shadcn',
      'Recharts'
    ],
    links: {},
    featured: false
  },
  {
    type: 'professional',
    date: '2024-07-25',
    startDate: '2024-07-22',
    name: 'Ignition Tables Import Tool',
    tagline: 'CLI tool to import Excel spreadsheets into SQL tables.',
    images: [],
    status: 'archived',
    description: (
      <p>
        Imported production line data into SQL tables for KPI visualization. Later polished into a
        web application.
      </p>
    ),
    technologies: ['JavaScript', 'Node.js', 'Microsoft SQL Server'],
    links: {},
    featured: false
  },
  {
    type: 'professional',
    date: '2024-08-12',
    startDate: '2024-07-24',
    name: 'Authentication Microservice',
    tagline: 'Simple username-password authentication microservice.',
    images: [],
    status: 'archived',
    description: (
      <p>
        Simple username-password authentication microservice. Developed to separate authentication
        logic from a locally run application.
      </p>
    ),
    technologies: ['TypeScript', 'Node.js', 'Express', 'bcrypt'],
    links: {},
    featured: false
  },
  {
    type: 'professional',
    date: '2025-05-16',
    startDate: '2025-05-09',
    name: 'AOI Failure Classification Model',
    tagline: 'Exploratory CNN model to classify AOI inspection images.',
    images: [],
    status: 'archived',
    description: (
      <>
        <p>
          Explored training a convolutional neural network to classify AOI inspection images as pass
          or fail. Experimented with various parameters including batch size, Conv2D layers, epochs,
          learning rate, and input image size.
        </p>
        <p>
          Results were largely inconclusive, with the model plateauing around 88% accuracy. A more
          targeted approach, such as targeting region of interest or training on the structured test
          data exported directly from the AOI machine may have yielded better results.
        </p>
      </>
    ),
    technologies: ['Python', 'TensorFlow'],
    links: {},
    featured: false
  },
  {
    type: 'professional',
    date: '2025-08-15',
    startDate: '2025-05',
    name: 'SMT Build Tracking Tool',
    tagline: 'Ignition-based build tracking, management, and monitoring.',
    images: ['smt-build-tracking.png'],
    status: 'complete',
    description: (
      <>
        <p>
          Replaced a legacy desktop application used to manage and monitor prototype production
          builds. Built as an Ignition Perspective application to improve visibility,
          accountability, and oversight across every step of a build.
        </p>
        <p>
          Engineers could create projects, define and customize build steps, and assigning steps to
          specific users. Assigned users received email notifications when added to a step or when a
          step passed its deadline.
        </p>
        <p>
          Implemented a project template system, allowing engineers to create reusable templates and
          import them into new projects. Dates for each step were dynamically calculated relative to
          the project&apos;s build date, reducing setup time for new builds.
        </p>
        <p>
          Originally scoped for prototype builds, mirroring the old desktop tool, the template
          system was designed with scalability in mind, making it extensible to production builds as
          well.
        </p>
        <p>
          A build day dashboard surfaced KPIs about the build itself, giving engineers real-time
          visibility into progress and performance.
        </p>
      </>
    ),
    technologies: ['Ignition Perspective', 'Microsoft SQL Server', 'Jython', 'JavaScript'],
    links: {},
    featured: false
  },
  {
    type: 'professional',
    date: '2025-08-15',
    startDate: '2025-06',
    name: 'Ignition Diag Tracking Application',
    tagline: 'Ignition-based diagnostic data entry, tracking, and analytics.',
    images: [],
    status: 'complete',
    description: (
      <>
        <p>
          A port of the original Diag Tracking Application, rebuilt as an Ignition Perspective
          application to integrate directly with the plant&apos;s SQL database. This eliminated the
          need for engineers to manually maintain a separate parts configuration.
        </p>
        <p>
          Migrated all existing diagnostic records from the original application&apos;s database,
          ensuring no historical data was lost in the transition.
        </p>
        <p>
          <strong>New Features</strong>
        </p>
        <ul>
          <li>
            Expanded the application&apos;s scope beyond Post SMT to include data from an additional
            testing team.
          </li>
          <li>
            Added a timer to each diagnostic entry, tracking how long a technician spent analyzing a
            part.
          </li>
        </ul>
      </>
    ),
    technologies: ['Ignition Perspective', 'Microsoft SQL Server', 'Jython', 'JavaScript'],
    links: {},
    featured: false
  }
];
