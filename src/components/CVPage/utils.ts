import { CV_TEXT } from './consts';

function getSection(text: string, title: string): string {
  const part = text.split(title);
  if (part.length < 2) return '';
  return part[1].split('---')[0].trim();
}

export type ParsedCV = {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  skills: string;
  summary: string;
  experience: string;
  education: string;
  certifications: string;
  frontendSkills: string;
  languages: string;
};

export function parseCV(text: string = CV_TEXT): ParsedCV {
  return {
    name: 'Lilit Hovhannisyan',
    role: 'Frontend Developer',
    email: 'lilit.hovhannisyan.dev@gmail.com',
    github: 'github.com',
    linkedin: 'linkedin.com',
    skills: getSection(text, '### Skills'),
    summary: getSection(text, '##  About Me'),
    experience: getSection(text, '##  Experience'),
    education: getSection(text, '##  Education'),
    certifications: getSection(text, '##  Certifications'),
    frontendSkills: getSection(text, '### FrontendSkills'),
    languages: getSection(text, '## Languages'),
  };
}
