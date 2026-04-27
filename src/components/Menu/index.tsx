import { MENU_ITEMS } from './consts'
import { menuStyles } from './styles'
import { NavLink } from 'react-router-dom'


function Menu() {
  return (
    <nav className={menuStyles.nav}>
      {MENU_ITEMS.map((item) => (
        <NavLink 
        key={item.href} 
        to={item.href}>
          {item.label}
        </NavLink>
      ))}
      
    </nav>
  )
}

export default Menu
