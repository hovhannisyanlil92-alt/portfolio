export type MenuItem =
  | { label: string; kind: 'route'; href: string }
  | { label: string; kind: 'section'; sectionId: string };

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Home', kind: 'route', href: '/' },
  { label: 'About', kind: 'section', sectionId: 'about' },
  { label: 'Skills', kind: 'section', sectionId: 'skills' },
  { label: 'Projects', kind: 'section', sectionId: 'projects' },
  { label: 'Contact', kind: 'section', sectionId: 'contact' },
  { label: 'Gemini', kind: 'route', href: '/geminiText' },
];

export const HOME_SCROLL_SECTION_IDS = [
  'home',
  'about',
  'video-avatar',
  'skills',
  'projects',
  'contact',
] as const;

export const MENU_TEXT = {
  desktopAriaLabel: 'Main navigation',
  drawerTitle: 'Menu',
} as const;
