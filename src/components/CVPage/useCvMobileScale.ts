import { useCallback, useEffect, type RefObject } from 'react';
import { CV_EXPORT_WIDTH_PX } from './downloadPdf';

const MOBILE_BREAKPOINT = 768;
const VIEWPORT_PADDING = 16;

export function useCvMobileScale(
  cvRef: RefObject<HTMLElement | null>,
  wrapperRef: RefObject<HTMLElement | null>,
) {
  const updateScale = useCallback(() => {
    const cv = cvRef.current;
    const wrapper = wrapperRef.current;
    if (!cv || !wrapper) return;

    if (window.innerWidth > MOBILE_BREAKPOINT) {
      cv.style.removeProperty('--cv-scale');
      cv.style.transform = '';
      wrapper.style.width = '';
      wrapper.style.height = '';
      return;
    }

    const scale = Math.min(1, (window.innerWidth - VIEWPORT_PADDING) / CV_EXPORT_WIDTH_PX);
    cv.style.setProperty('--cv-scale', String(scale));
    cv.style.transform = `scale(${scale})`;
    cv.style.transformOrigin = 'top left';
    wrapper.style.width = `${CV_EXPORT_WIDTH_PX * scale}px`;
    wrapper.style.height = `${cv.offsetHeight * scale}px`;
  }, [cvRef, wrapperRef]);

  useEffect(() => {
    const run = () => requestAnimationFrame(updateScale);

    run();
    window.addEventListener('resize', updateScale);
    window.addEventListener('load', run);

    const cv = cvRef.current;
    const observer = cv ? new ResizeObserver(run) : null;
    observer?.observe(cv);

    cv?.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', run);
    });

    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('load', run);
      observer?.disconnect();
    };
  }, [cvRef, updateScale]);

  return updateScale;
}
