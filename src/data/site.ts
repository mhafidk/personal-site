export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
}

export interface ProjectItem {
  title: string;
  slug: string;
  year: string;
  summary: string;
  outcome: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const SITE = {
  name: 'MHK',
  fullName: 'Muhammad Hafid K',
  title: 'Muhammad Hafid K · Portfolio & Technical Blog',
  description:
    'Software engineering, backend architectures, system design, and technical writing.',
  role: 'Software Engineer',
  socials: [
    { label: 'GitHub', href: 'https://github.com/mhafidk' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mhafidk/' },
  ],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Backend Engineer',
    company: 'Qontak',
    companyUrl: 'https://www.qontak.com',
    period: '2020 - Present',
    highlights: [
      'Optimized code performance, resulting in a 50% speed increase, by addressing N+1 queries, refining query execution, and strategically employing caching.',
      'Drove technical feature implementations, managing the development process from RFC conception to final deployment, collaborating closely with FE, QA, Design, and Product teams.',
      'Increased test coverage using RSpec, ensuring high code quality and reducing production bugs.',
      'Leveraged AI-assisted development workflows to accelerate feature delivery, automate code reviews and test generation, and maintain high engineering standards.',
    ],
  },
  {
    role: 'Computer Engineering',
    company: 'Brawijaya University',
    companyUrl: 'https://www.ub.ac.id',
    period: '2016 - 2020',
    highlights: [
      'Achieved academic distinction with a cumulative GPA of 3.86, reflecting consistent high performance and dedication.',
      'Fueled my passion for technology by joining the Robotics Club, gaining hands-on experience in robotics, programming, and real-world problem solving, with a focus on robotic vision systems, including image detection and recognition.',
      'Engaged in numerous robotics competitions, securing awards in several, forging meaningful connections, and enriching my technical and collaborative skills through real-world challenges.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [];
