import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo-container">
          <div className="logo-3d">
            <span>&lt;</span>
            <span>DEV</span>
            <span>/&gt;</span>
          </div>
        </div>
        
        <div className="loading-text">
          <h2>Loading Portfolio</h2>
          <p>Preparing 3D experience...</p>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{progress}%</span>
        </div>

        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}
