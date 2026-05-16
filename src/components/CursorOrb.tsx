import { useEffect, useRef, useState } from 'react';

const DESKTOP_MEDIA_QUERY = '(min-width: 1024px) and (pointer: fine)';

export const CursorOrb = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const updateDesktopMode = (event?: MediaQueryListEvent) => {
      setIsDesktop(event ? event.matches : mediaQuery.matches);
    };

    updateDesktopMode();
    mediaQuery.addEventListener('change', updateDesktopMode);

    return () => mediaQuery.removeEventListener('change', updateDesktopMode);
  }, []);

  useEffect(() => {
    if (!isDesktop || !cursorRef.current) return;

    const cursor = cursorRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        // Adjust translation to center the reticle on the cursor
        cursor.style.transform = `translate(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%))`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="cursor-reticle" ref={cursorRef} aria-hidden="true">
      <div className="cursor-reticle__ring"></div>
      <div className="cursor-reticle__dot"></div>
      <div className="cursor-reticle__crosshair x"></div>
      <div className="cursor-reticle__crosshair y"></div>
    </div>
  );
};
