import { IProject } from '@/types';

/* =========================
   GENERAL INFO
========================= */

export const GENERAL_INFO = {
    email: 'keshavb266@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody:
        'Hi Keshav, I came across your portfolio and would love to connect regarding...',
};

/* =========================
   SOCIAL LINKS
========================= */

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Keshav-Bhaiya' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/keshav-bhaiya-021b092a7/',
    },
];

/* =========================
   MY STACK (Resume Aligned)
========================= */

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    Other: [
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
    ],
};

/* =========================
   PROJECTS (REAL + DEPLOYED)
========================= */

export const PROJECTS: IProject[] = [
    {
        title: 'LNCT Group Institutional Portal',
        slug: 'lnct-group-portal',
        year: 2024,
        status: 'Completed',
        liveUrl: 'https://lnctgroup.vercel.app/',
        description: `
      A unified institutional portal built for LNCT Group, bringing 10+ institutions
      under a single digital platform with accessibility-first design and optimized
      performance.
      <br/><br/>
      <b>Key Highlights:</b>
      <ul>
        <li>Responsive and accessible UI for all users</li>
        <li>Optimized animations and performance</li>
        <li>First place winner among 50+ teams</li>
      </ul>
    `,
        role: `
      Lead Frontend Developer
      <ul>
        <li>Built the entire frontend using React and Tailwind CSS</li>
        <li>Improved load time by 35% through performance optimizations</li>
        <li>Led a development team and coordinated delivery</li>
      </ul>
    `,
        techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
        thumbnail: '/projects/thumbnail/lnct.png',
        longThumbnail: '/projects/long/lnct.png',
        images: ['/projects/long/lnct.png'],
    },

    {
        title: 'Quick AI — AI SaaS Platform',
        slug: 'quick-ai',
        year: 2025,
        status: 'Completed',
        liveUrl: 'https://quick-ai-nu-ebon.vercel.app/',
        description: `
      A multi-tool AI SaaS platform powered by GPT-based agents, offering
      secure authentication and scalable APIs.
    `,
        role: `
      Full Stack Developer
      <ul>
        <li>Developed backend APIs using Node.js and Express</li>
        <li>Integrated OpenAI APIs for AI-powered features</li>
        <li>Optimized API performance for 1000+ daily requests</li>
      </ul>
    `,
        techStack: ['MERN', 'PostgreSQL', 'OpenAI API'],
        thumbnail: '/projects/thumbnail/quickai.png',
        longThumbnail: '/projects/long/quickai.png',
        images: ['/projects/long/quickai.png'],
    },

    {
        title: 'SCSDB — Movie Discovery App',
        slug: 'scsdb',
        year: 2024,
        status: 'Completed',
        liveUrl: 'https://scsdb-react-webapp.vercel.app/',
        description: `
      A responsive movie discovery application with real-time search,
      filtering, and optimized state management.
    `,
        role: `
      Frontend Developer
      <ul>
        <li>Implemented real-time search using TMDB API</li>
        <li>Optimized mobile engagement by 40%</li>
      </ul>
    `,
        techStack: ['React', 'JavaScript', 'TMDB API'],
        thumbnail: '/projects/thumbnail/scsdb.png',
        longThumbnail: '/projects/long/scsdb.png',
        images: ['/projects/long/scsdb.png'],
    },

    {
        title: 'Skiper UI — UI Clone',
        slug: 'skiper-ui',
        year: 2025,
        status: 'Completed',
        liveUrl: 'https://skiperuiclone.vercel.app/',
        description: `
      A pixel-perfect UI clone built with reusable components
      and smooth animations.
    `,
        role: `
      Frontend Developer
      <ul>
        <li>Built reusable components using Next.js and Tailwind CSS</li>
        <li>Focused on animation and UI consistency</li>
      </ul>
    `,
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/skiper.png',
        longThumbnail: '/projects/long/skiper.png',
        images: ['/projects/long/skiper.png'],
    },
];

/* =========================
   EXPERIENCE & LEADERSHIP
========================= */

export const MY_EXPERIENCE = [
    {
        title: 'Tech Coordinator & Team Lead',
        company: 'LNCT Group Institutional Portal',
        duration: '2024',
    },
    {
        title: 'Co-Founder & Full Stack Developer',
        company: 'Quick AI',
        duration: '2025 – Present',
    },
    {
        title: 'Web Development Lead',
        company: 'Student Tech Communities (GDG / E-Cell)',
        duration: '2025',
    },
];
