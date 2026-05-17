import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MENU_ITEMS, MENU_TEXT } from './consts';
import { menuStyles } from './styles';
import type { MenuProps } from './types';
import { useActiveSection } from './useActiveSection';
import { getSectionNavPath, isMenuItemActive, scrollToSection } from './utils';
import './styles.css';

type MenuLinkProps = {
  item: (typeof MENU_ITEMS)[number];
  activeSectionId: string | null;
  onSectionSelect: (sectionId: string) => void;
  onNavigate?: () => void;
};

function MenuLink({ item, activeSectionId, onSectionSelect, onNavigate }: MenuLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = isMenuItemActive(item, location.pathname, activeSectionId);

  if (item.kind === 'route') {
    return (
      <Link
        to={item.href}
        className={isActive ? menuStyles.active : undefined}
        aria-current={isActive ? 'page' : undefined}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  const sectionPath = getSectionNavPath(item.sectionId);

  const handleSectionClick = () => {
    onNavigate?.();
    onSectionSelect(item.sectionId);
    window.dispatchEvent(new Event('menu-section-click'));

    if (location.pathname === '/') {
      scrollToSection(item.sectionId);
      window.history.replaceState(null, '', sectionPath);
      return;
    }

    void navigate(sectionPath);
  };

  return (
    <Link
      to={sectionPath}
      className={isActive ? menuStyles.active : undefined}
      aria-current={isActive ? 'page' : undefined}
      onClick={(event) => {
        event.preventDefault();
        handleSectionClick();
      }}
    >
      {item.label}
    </Link>
  );
}

function MenuLinks({
  onNavigate,
  listClassName,
  activeSectionId,
  onSectionSelect,
}: {
  onNavigate?: () => void;
  listClassName: string;
  activeSectionId: string | null;
  onSectionSelect: (sectionId: string) => void;
}) {
  return (
    <ul className={listClassName}>
      {MENU_ITEMS.map((item) => (
        <li key={item.kind === 'route' ? item.href : item.sectionId}>
          <MenuLink
            item={item}
            activeSectionId={activeSectionId}
            onSectionSelect={onSectionSelect}
            onNavigate={onNavigate}
          />
        </li>
      ))}
    </ul>
  );
}

function Menu({ variant = 'desktop', onNavigate }: MenuProps) {
  const { activeSectionId, setActiveSectionId } = useActiveSection();

  if (variant === 'mobile') {
    return (
      <MenuLinks
        onNavigate={onNavigate}
        listClassName={menuStyles.mobileList}
        activeSectionId={activeSectionId}
        onSectionSelect={setActiveSectionId}
      />
    );
  }

  return (
    <nav className={menuStyles.nav} aria-label={MENU_TEXT.desktopAriaLabel}>
      {MENU_ITEMS.map((item) => (
        <MenuLink
          key={item.kind === 'route' ? item.href : item.sectionId}
          item={item}
          activeSectionId={activeSectionId}
          onSectionSelect={setActiveSectionId}
        />
      ))}
    </nav>
  );
}

export default Menu;
