'use client';
import React from "react";
import styles from './booster.module.css';
import { useState, useRef, useEffect } from 'react';

export default function page() {
    const [isAnimating, setIsAnimating] = useState(true);
    const [showBooster, setShowBooster] = useState(true);
    const [showFlyingDivs, setShowFlyingDivs] = useState(false);
    const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
    const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
    setShowFlyingDivs(true);
    setIsRotated(true);
    setShowBooster(false);
  };

  const boosterRef = useRef(null);

  useEffect(() => {
    if (boosterRef.current) {
      const rect = boosterRef.current.getBoundingClientRect();
      setDivPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isAnimating]);

  return <div>{showBooster && 
  <div ref={boosterRef} className={styles.booster}
  onClick={handleClick} style={{ animationPlayState: isAnimating ? 'running' : 'paused', transform: isRotated ? 'rotateY(90deg)' : 'none' }}>asdf</div>}
  {showFlyingDivs && (
        <div style={{ position: 'relative', top: divPosition.top, left: divPosition.left }}>
          <div className={styles.flyingdiv} style={{ top: 0, left: 0 }}>Div 1</div>
          <div className={styles.flyingdiv} style={{ top: 60, left: 0 }}>Div 2</div>
          <div className={styles.flyingdiv} style={{ top: 120, left: 0 }}>Div 3</div>
        </div>
      )}</div>;

}
