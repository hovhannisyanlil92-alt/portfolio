import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HOME_SCROLL_SECTION_IDS } from './consts';
import { getActiveSectionFromHash, mapScrollSectionToMenuSection } from './utils';

function getInitialActiveSection(pathname: string, hash: string): string | null {
  if (pathname !== '/') return null;
  return getActiveSectionFromHash(hash);
}

export function useActiveSection(): {
  activeSectionId: string | null;
  setActiveSectionId: (sectionId: string) => void;
} {
  const { pathname, hash } = useLocation();
  const [activeSectionId, setActiveSectionId] = useState<string | null>(() =>
    getInitialActiveSection(pathname, hash),
  );

  const setActiveSection = useCallback((sectionId: string) => {
    setActiveSectionId(mapScrollSectionToMenuSection(sectionId));
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSectionId(null);
      return;
    }

    setActiveSectionId(getActiveSectionFromHash(hash));
  }, [pathname, hash]);

  useEffect(() => {
    if (pathname !== '/') return;

    const ratios = new Map<string, number>();
    const sectionIds = [...HOME_SCROLL_SECTION_IDS];
    let scrollLockUntil = 0;

    const updateFromScroll = () => {
      if (Date.now() < scrollLockUntil) return;

      let bestId = 'home';
      let bestRatio = -1;

      for (const id of sectionIds) {
        const ratio = ratios.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }

      const menuSectionId = mapScrollSectionToMenuSection(bestId);
      setActiveSectionId(menuSectionId);

      const nextUrl = menuSectionId === 'home' ? '/' : `/#${menuSectionId}`;
      const currentUrl = `${window.location.pathname}${window.location.hash}`;
      if (currentUrl !== nextUrl) {
        window.history.replaceState(null, '', nextUrl);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });
        updateFromScroll();
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const onScrollLock = () => {
      scrollLockUntil = Date.now() + 900;
    };

    window.addEventListener('menu-section-click', onScrollLock);

    return () => {
      observer.disconnect();
      window.removeEventListener('menu-section-click', onScrollLock);
    };
  }, [pathname]);

  return { activeSectionId, setActiveSectionId: setActiveSection };
}
