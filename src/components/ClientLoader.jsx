'use client';
import React, { useEffect, useState } from 'react';
import HydroloopLoader from './HydroloopLoader';

export default function ClientLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setReady(true);
      return;
    }
    const handleLoad = () => setReady(true);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (ready) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#ffffff', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HydroloopLoader />
    </div>
  );
}