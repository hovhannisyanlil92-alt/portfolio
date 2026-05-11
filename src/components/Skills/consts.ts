export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  groupIcon: string; 
  items: SkillItem[];
};

export const SKILL_GROUPS = [
  {
    title: 'Frontend',
    groupIcon: 'https://cdn-icons-png.flaticon.com/512/603/603197.png',
    items: [
      { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Ant Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg' },
    ],
  },
  {
    title: 'AI',
    groupIcon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
    items: [
      { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor' },
      { name: 'Stitch', icon: 'https://img.shields.io/badge/stitch-000000?style=for-the-badge&logo=google&logoColor=white' },
    ],
  },
  {
    title: 'Tools & Others',
    groupIcon: 'https://cdn-icons-png.flaticon.com/512/563/563541.png',
    items: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
      { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
      { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
    ],
  },
];

export const SKILLS_TEXT = {
  eyebrow: 'MY SKILLS',
  title: 'Technologies I work with',
};






// export type SkillGroup = {
//   title: string
//   items: string[]
// }

// export const SKILL_GROUPS: SkillGroup[] = [
//   { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
//   { title: 'AI', items: ['Cursor', 'Stitch'] },
//   { title: 'Tools & Others', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Photoshop', 'Illustrator'] },
// ]

// export const SKILLS_TEXT = {
//   eyebrow: 'My skills',
//   title: 'Technologies I work with',
// }
