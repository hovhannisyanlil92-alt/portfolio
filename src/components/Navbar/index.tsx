import { useState } from 'react';
import { CloseOutlined, MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, Drawer, Typography } from 'antd';
import Menu from '../Menu';
import { MENU_TEXT } from '../Menu/consts';
import { NAVBAR_TEXT } from './consts';
import { navbarStyles } from './styles';
import type { NavbarProps } from './types';
import './styles.css';

function Navbar({ isDarkMode, onToggleTheme }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.inner}>
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
          <Button
            className={navbarStyles.menuToggle}
            shape="circle"
            icon={isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={
              isMobileMenuOpen ? NAVBAR_TEXT.closeMenuAriaLabel : NAVBAR_TEXT.openMenuAriaLabel
            }
            aria-expanded={isMobileMenuOpen}
          />
        </div>
      </div>

      <Drawer
        title={MENU_TEXT.drawerTitle}
        placement="right"
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
        className="mobile-menu-drawer"
        width="100%"
        destroyOnClose
      >
        <Menu variant="mobile" onNavigate={closeMobileMenu} />
      </Drawer>
    </header>
  );
}

export default Navbar;
