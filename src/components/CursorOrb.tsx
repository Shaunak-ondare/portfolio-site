import { useEffect, useRef, useState } from 'react';

const DESKTOP_MEDIA_QUERY = '(min-width: 1024px) and (pointer: fine)';
const MAX_PUPIL_OFFSET = 5;

export const CursorOrb = () => {
  const leftPupilRef = useRef<HTMLDivElement | null>(null);
  const rightPupilRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const updateDesktopMode = (event?: MediaQueryListEvent) => {
      setIsDesktop(event ? event.matches : mediaQuery.matches);
    };

    updateDesktopMode();
    mediaQuery.addEventListener('change', updateDesktopMode);

    return () => {
      mediaQuery.removeEventListener('change', updateDesktopMode);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || !leftPupilRef.current || !rightPupilRef.current) {
      return;
    }

    const leftPupil = leftPupilRef.current;
    const rightPupil = rightPupilRef.current;

    const movePupil = (clientX: number, clientY: number) => {
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;
      const deltaX = clientX - viewportCenterX;
      const deltaY = clientY - viewportCenterY;
      const normalizedX = deltaX / viewportCenterX;
      const normalizedY = deltaY / viewportCenterY;
      const nextX = Math.max(-1, Math.min(1, normalizedX)) * MAX_PUPIL_OFFSET;
      const nextY = Math.max(-1, Math.min(1, normalizedY)) * MAX_PUPIL_OFFSET;

      leftPupil.style.transform = `translate(${nextX}px, ${nextY}px)`;
      rightPupil.style.transform = `translate(${nextX}px, ${nextY}px)`;
    };

    const resetPupil = () => {
      leftPupil.style.transform = 'translate(0px, 0px)';
      rightPupil.style.transform = 'translate(0px, 0px)';
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        movePupil(event.clientX, event.clientY);
      });
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        resetPupil();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('blur', resetPupil);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('blur', resetPupil);
      document.removeEventListener('mouseout', handleMouseLeave);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="cursor-orb cursor-cat" aria-hidden="true">
      <div className="cursor-cat__shadow" />
      <div className="cursor-cat__ears">
        <div className="cursor-cat__ear cursor-cat__ear--left">
          <span className="cursor-cat__ear-inner" />
        </div>
        <div className="cursor-cat__ear cursor-cat__ear--right">
          <span className="cursor-cat__ear-inner" />
        </div>
      </div>
      <div className="cursor-cat__head">
        <div className="cursor-cat__face">
          <div className="cursor-cat__eye">
            <div className="cursor-cat__pupil" ref={leftPupilRef} />
          </div>
          <div className="cursor-cat__eye">
            <div className="cursor-cat__pupil" ref={rightPupilRef} />
          </div>
        </div>
        <div className="cursor-cat__nose" />
        <div className="cursor-cat__mouth" />
        <span className="cursor-cat__whiskers cursor-cat__whiskers--left" />
        <span className="cursor-cat__whiskers cursor-cat__whiskers--right" />
      </div>
    </div>
  );
};
