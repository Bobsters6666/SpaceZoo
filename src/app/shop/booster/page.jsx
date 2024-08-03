'use client';
import React from "react";
import styles from './booster.module.css';
import AnimalCard from "@/components/AnimalCard";
import { useState, useRef, useEffect } from 'react';

export default function page() {
    const [isAnimating, setIsAnimating] = useState(true);
    const [showBooster, setShowBooster] = useState(true);
    const [showFlyingDivs, setShowFlyingDivs] = useState(false);
    const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
    const [isRotated, setIsRotated] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
    setIsRotated(true);
    
    setIsShaking(true);
    console.log("Shake!")
    setTimeout(() => {
        setShowFlyingDivs(true);
        setIsShaking(false);
        setShowBooster(false);
      }, 500);
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

  return <div className={styles.page}>{showBooster && 
  <div ref={boosterRef} className={`${styles.booster} ${isShaking ? styles.shake : ''}`}
  onClick={handleClick} style={{ animationPlayState: isAnimating ? 'running' : 'paused', transform: isRotated ? 'rotateY(90deg)' : 'none' }}></div>}
  {showFlyingDivs && (
        <div style={{ position: 'relative', top: divPosition.top+20, left: divPosition.left }}>
          <div className={styles.flyingdiv} style={{ top: 0, left: 0 }}><AnimalCard /></div>
          <div className={styles.flyingdiv} style={{ top: 60, left: 0 }}><AnimalCard /></div>
          <div className={styles.flyingdiv} style={{ top: 120, left: 0 }}><AnimalCard /></div>
        </div>
      )}</div>;

}
