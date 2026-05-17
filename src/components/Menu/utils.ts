import type { MenuItem } from './consts';

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function getSectionNavPath(sectionId: string): string {
  return `/#${sectionId}`;
}

export function mapScrollSectionToMenuSection(sectionId: string): string {
  if (sectionId === 'video-avatar') return 'about';
  return sectionId;
}

export function getActiveSectionFromHash(hash: string): string | null {
  const sectionId = hash.replace('#', '').trim();
  if (!sectionId) return 'home';
  return mapScrollSectionToMenuSection(sectionId);
}

export function isMenuItemActive(
  item: MenuItem,
  pathname: string,
  activeSectionId: string | null,
): boolean {
  const normalizedPath = pathname.replace(/\/$/, '') || '/';

  if (item.kind === 'route') {
    if (item.href === '/') {
      return normalizedPath === '/' && activeSectionId === 'home';
    }

    const normalizedHref = item.href.replace(/\/$/, '') || '/';
    return normalizedPath === normalizedHref || normalizedPath.startsWith(`${normalizedHref}/`);
  }

  if (normalizedPath !== '/') return false;
  return activeSectionId === item.sectionId;
}
