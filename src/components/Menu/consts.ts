export type MenuItem = {
  label: string
  href: string
  isActive?: boolean
}

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Gemini', href: '/geminiText' },
  
]
