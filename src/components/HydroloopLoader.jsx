'use client';
import React from 'react';

export default function HydroloopLoader() {
  return (
    <div className="loader-container" style={{ textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div className="droplet">
          <div className="ripple"></div>
        </div>
        <div className="circuit-line line-1"></div>
        <div className="circuit-line line-2"></div>
        <div className="circuit-line line-3"></div>
      </div>
      <div className="loading-text">HYDROLOOOP</div>
      <div className="loading-subtitle">Loading...</div>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>

      <style>{`
        .droplet {
          width: 80px;
          height: 80px;
          background: linear-gradient(180deg, #4dd0e1 0%, #4dd0e1 50%, #1e3a5f 50%, #1e3a5f 100%);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: relative;
          animation: drop 2s ease-in-out infinite;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        .droplet::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%);
          border-radius: 50% 50% 50% 0;
        }
        .droplet::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #ffffff;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        .circuit-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #4dd0e1 50%, transparent 100%);
          opacity: 0;
        }
        .line-1 { width: 150px; top: 30px; left: -160px; animation: lineFlow 2s ease-in-out infinite; }
        .line-2 { width: 120px; top: 50px; right: -130px; animation: lineFlow 2s ease-in-out infinite 0.3s; }
        .line-3 { width: 100px; top: 70px; left: -110px; animation: lineFlow 2s ease-in-out infinite 0.6s; }
        .loading-text { margin-top: 60px; font-size: 28px; font-weight: bold; color: #1e3a5f; letter-spacing: 4px; animation: pulse 2s ease-in-out infinite; }
        .loading-subtitle { margin-top: 10px; font-size: 14px; color: #1e3a5f; letter-spacing: 2px; opacity: 0.7; }
        .progress-container { width: 300px; height: 4px; background: rgba(0, 0, 0, 0.08); border-radius: 10px; margin-top: 30px; overflow: hidden; }
        .progress-bar { height: 100%; background: linear-gradient(90deg, #4dd0e1, #00acc1); border-radius: 10px; animation: progress 2s ease-in-out infinite; box-shadow: 0 0 10px #4dd0e1; }
        @keyframes drop { 0%, 100% { transform: rotate(-45deg) translateY(0); } 50% { transform: rotate(-45deg) translateY(-20px); } }
        @keyframes lineFlow { 0% { opacity: 0; transform: translateX(-20px);} 50% { opacity: 1; } 100% { opacity: 0; transform: translateX(20px);} }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        @keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }
        .ripple { position: absolute; width: 80px; height: 80px; border: 2px solid #4dd0e1; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); animation: ripple 2s ease-out infinite; top: 0; left: 0; }
        @keyframes ripple { 0% { transform: rotate(-45deg) scale(1); opacity: 1; } 100% { transform: rotate(-45deg) scale(1.8); opacity: 0; } }
      `}</style>
    </div>
  );
}