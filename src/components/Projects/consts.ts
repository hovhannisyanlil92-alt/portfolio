export type Project = {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
  gitHub: string
}

export const PROJECTS_TEXT = {
  eyebrow: 'Featured projects',
  title: 'Some of my recent work',
  viewAll: 'View all projects',
}

export const PROJECTS: Project[] = [
  {
    title: 'Wedding Invitation Website',
    description: 'Admin dashboard for managing products, orders and customers.',
    tags: ['HTML/CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
    link: 'https://elinamartirosyan20.github.io/',
    gitHub: 'https://github.com/ElinaMartirosyan20/ElinaMartirosyan20.github.io.git',
    image: './src/assets/projectImg3.png',
  },
  {
    title: 'Wedding Invitation Website',
    description: 'A productivity app to organize tasks and boost workflow.',
    tags: ['React', 'TypeScript', 'Ant Design'],
    link: 'https://andranikgayane.github.io/',
    gitHub: 'https://github.com/hovhannisyanlil92-alt/portfolio',
    image: './src/assets/projectImg2.png',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and modern UI.',
    tags: ['React', 'Ant Design', 'Gemini API'],
    link: 'https://portfolio-one-steel-94.vercel.app/',
    gitHub: 'https://github.com/hovhannisyanlil92-alt/portfolio',
    image: './src/assets/projectImg1.png',
  },
]


