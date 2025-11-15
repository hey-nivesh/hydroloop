'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  direction = 'up',
  distance = 40,
  duration = 600,
  delay = 0
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return `translateX(-${distance}px)`;
      case 'right':
        return `translateX(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'up':
      default:
        return `translateY(${distance}px)`;
    }
  };

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate(0, 0)' : getInitialTransform(),
    transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
    willChange: 'transform, opacity'
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}