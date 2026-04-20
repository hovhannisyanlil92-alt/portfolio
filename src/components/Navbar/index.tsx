import { MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import Menu from '../Menu'
import { NAVBAR_TEXT } from './consts'
import { navbarStyles } from './styles'
import type { NavbarProps } from './types'

function Navbar({ isDarkMode, onToggleTheme }: NavbarProps) {
  return (
    <header className={navbarStyles.header}>
      <Typography.Title className={navbarStyles.brand} level={3}>
        {NAVBAR_TEXT.brand}
      </Typography.Title>
      <Menu />
      <div className={navbarStyles.actions}>
        <Button
          shape="circle"
          icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          onClick={onToggleTheme}
          aria-label={NAVBAR_TEXT.toggleAriaLabel}
        />
        <Button className={navbarStyles.menuToggle} shape="circle" icon={<MenuOutlined />} />
      </div>
    </header>
  )
}

export default Navbar
