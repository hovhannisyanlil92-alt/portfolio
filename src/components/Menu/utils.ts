import type { MenuItem } from './consts'

export function getMenuItemClassName(item: MenuItem, activeClassName: string): string | undefined {
  return item.isActive ? activeClassName : undefined
}
