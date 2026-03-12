import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const moveTimerRef = useRef(null);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer || !cursorRef.current) {
      return undefined;
    }

    const cursor = cursorRef.current;
    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.classList.remove('is-hidden');
      cursor.classList.add('is-moving');

      if (moveTimerRef.current) {
        window.clearTimeout(moveTimerRef.current);
      }

      moveTimerRef.current = window.setTimeout(() => {
        cursor.classList.remove('is-moving');
      }, 120);
    };

    const handleMouseDown = () => {
      cursor.classList.add('is-pressed');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('is-pressed');
    };

    const handleMouseLeave = () => {
      cursor.classList.add('is-hidden');
    };

    const handleMouseEnter = () => {
      cursor.classList.remove('is-hidden');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      if (moveTimerRef.current) {
        window.clearTimeout(moveTimerRef.current);
      }
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor-ball is-hidden" aria-hidden="true" />;
}
