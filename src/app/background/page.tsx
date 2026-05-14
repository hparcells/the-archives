import PageLayout from '@/components/PageLayout';

function Me() {
  return (
    <PageLayout
      title='Developer Background'
      description='The full story.'
    >
      <section className='stack-4'>
        <h2>Humble Beginnings (2015-2017)</h2>
        <p>
          I jumped in the deep end of programming somewhere towards the end of 2015 with{' '}
          <strong>Java</strong> out of pure boredom. I learned through videos online, websites, and
          forums. I had learned my way around basic Java usage, after that I began to familiarize
          myself with JFrame and Canvas. Soon after following tutorials on how to make simple games.
        </p>
        <p>
          In 2016 and 2017 is where I began to ramp up many of my skills and began branching out
          into different areas of development. This included experimenting with{' '}
          <strong>Python</strong>, <strong>C#</strong> with Unity, <strong>C++</strong>, and others.
          Part of this included my first introduction to web development with <strong>HTML</strong>,{' '}
          <strong>CSS</strong>, and <strong>JavaScript</strong>.
        </p>
        <p>
          At this point I had created a website or two for myself, showcasing some projects of mine.
          Being a static site, these were hosted on Netlify.
        </p>
      </section>
      <section className='stack-4'>
        <h2>Modern Web Development (2018-2022)</h2>
        <p>
          It wasn&apos;t really until around mid-2018 where I had decided that web development is
          where I wanted to stay. I had started developing full projects using JavaScript trying out
          many different frameworks, libraries, and utilities.
        </p>
        <p>
          In early-2019 I pretty much has solidified myself in the React ecosystem, which allowed me
          to pump out many different projects while trying all libraries it had to offer. This is
          where I picked up <strong>Gatsby</strong> for my static site needs. I also had learned
          about <strong>TypeScript </strong> at this time. It&apos;s hard to believe there was a
          time where I didn&apos;t use TypeScript.
        </p>
        <p>
          In 2020 I finally started to make projects that incorporated the backend, most importantly
          using databases like <strong>RethinkDB</strong> and <strong>MongoDB</strong>. I also had
          learned to use <strong>Socket.IO</strong>. Due to financial limitations, these projects
          were only online temporarily due to them being hosted on platforms like Heroku&apos;s free
          tier, or servers ran by friends.
        </p>
        <p>
          I transitioned to using <strong>Next.js</strong> for my projects somewhere around the end
          of 2020.
        </p>
      </section>
      <section className='stack-4'>
        <h2>College Years (2022-2026)</h2>
        <p>
          After burning out through most of 2021-2022, college was the reset I needed. I got my
          hands on a server of my own, meaning I was free to build anything I wanted. During this
          time, I had also decided to try and learn the best practices and patterns used for web
          development in general, user authentication, backend and API development, and how to truly
          use Next.js.
        </p>
        <p>
          My studies had allowed me to learn the fundamentals of computer science and provided
          countless opportunities to apply these concepts in group projects. Because of this, I was
          able to gain valuable experience with languages, tools, and frameworks I might not have
          otherwise explored on my own, such as <strong>Python</strong>, <strong>C</strong>,{' '}
          <strong>PostgreSQL</strong>, and <strong>Flask</strong>.
        </p>
        <p>
          During my years at college I completed two internships, both of which at Magna
          Electronics. In both of these positions I worked closely with the engineering and controls
          teams to develop internal tools ranging from inventory management to data visualization. I
          also had the chance to work with <strong>Ignition</strong>, an industry-standard SCADA and
          MES platform widely used in manufacturing, which introduced me to a completely different
          side of software development, in which I was able to bring my background in web
          development and Java to the table to create applications and custom modules to be used
          across the factory floor.
        </p>
      </section>
      <section className='stack-4'>
        <h2>Present Day (2026-Present)</h2>
        <p>
          In May 2026 I graduated from Oakland University with a B.S. in Computer Science.
          Graduation has opened up a lot of time in my schedule, allowing me to focus on upskilling,
          diving deeper into industry best practice such as more advanced <strong>DevOps</strong>,
          containerization with <strong>Docker</strong>, microservice architecture with{' '}
          <strong>Redis</strong> and <strong>BullMQ</strong>, and secrets management.
        </p>
        <p>
          In this age of AI, I&apos;m also exploring how to integrate AI into my workflow. My goal
          is to become more efficient while still being able to learn and grow as a developer. I
          want to collaborate with AI, rather than let it replace every line of code I write. I am
          still exploring what AI can and cannot do, and how to best utilize it as a <em>tool</em>.
        </p>
        <p>
          I&apos;m currently seeking my first full-time role as a full-stack developer/software
          engineer.
        </p>
      </section>
    </PageLayout>
  );
}

export default Me;
