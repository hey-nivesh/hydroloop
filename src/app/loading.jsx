'use client';
import HydroloopLoader from "../components/HydroloopLoader";

export default function Loading() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff' }}>
      <HydroloopLoader />
    </div>
  );
}