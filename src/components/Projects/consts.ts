import projectImg1 from '../../assets/projectImg1.png'
import projectImg2 from '../../assets/projectImg2.png'
import projectImg3 from '../../assets/projectImg3.png'
import projectImg4 from '../../assets/projectImg4.png'

export type Project = {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
  gitHub: string
}

export const PROJECTS_PREVIEW_COUNT = 3

/** Descriptions longer than this show more/less controls */
export const PROJECT_DESCRIPTION_MAX_LENGTH = 90

export const PROJECTS_TEXT = {
  eyebrow: 'Featured projects',
  title: 'Some of my recent work',
  viewAll: 'View all projects',
  showLess: 'Show less',
  readMoreAria: 'Show full project description',
  readLessAria: 'Show shorter project description',
}

export const PROJECTS: Project[] = [
  {
    title: 'Armenia Events',
    description:
      'A group project — a platform for discovering events across Armenia, including conferences, meetups, concerts, and more. Includes search, popular categories, favorites, and tools for organizers to publish events.',
    tags: ['React', 'TypeScript', 'Supabase', 'Express'],
    link: 'https://armenia-events.vercel.app/',
    gitHub: 'https://github.com/ElzaHM/ArmeniaEvents',
    image: projectImg4,
  },
  {
    title: 'Wedding Invitation Website',
    description: 'This is a modern digital wedding invitation designed to provide guests with essential event details, interactive maps, and a real-time countdown to the big day. ',
    tags: ['HTML/CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
    link: 'https://elinamartirosyan20.github.io/',
    gitHub: 'https://github.com/ElinaMartirosyan20/ElinaMartirosyan20.github.io.git',
    image: projectImg3,
  },
  {
    title: 'Wedding Invitation Website',
    description: 'This is a modern digital wedding invitation designed to provide guests with essential event details, interactive maps, and a real-time countdown to the big day. ',
    tags: ['React', 'TypeScript', 'Ant Design'],
    link: 'https://wedding-invitation-olive-nine.vercel.app/',
    gitHub: 'https://github.com/hovhannisyanlil92-alt/wedding-invitation',
    image: projectImg2,
  },
  {
    title: 'Portfolio Website',
    description: 'This is a professional personal portfolio website designed to showcase a developern\'s technical skills, creative projects, and professional background. It features a clean, responsive layout with dedicated sections for project highlights, a personal bio, and direct contact information for potential employers or collaborators.',
    tags: ['React', 'Ant Design', 'Gemini API'],
    link: 'https://portfolio-one-steel-94.vercel.app/',
    gitHub: 'https://github.com/hovhannisyanlil92-alt/portfolio',
    image: projectImg1,
  },
]


