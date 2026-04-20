import { MENU_ITEMS } from './consts'
import { menuStyles } from './styles'
import { getMenuItemClassName } from './utils'

function Menu() {
  return (
    <nav className={menuStyles.nav}>
      {MENU_ITEMS.map((item) => (
        <a key={item.href} className={getMenuItemClassName(item, menuStyles.active)} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default Menu
