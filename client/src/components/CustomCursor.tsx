import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseOut = () => setIsVisible(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [data-testid^="button-"], [data-testid^="link-"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    />
  );
}