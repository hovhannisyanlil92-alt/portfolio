export type MenuItem = {
  label: string
  href: string
  isActive?: boolean
}

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Home', href: '#home', isActive: true },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
