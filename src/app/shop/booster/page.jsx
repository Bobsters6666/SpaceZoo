"use client";
import React from "react";
import styles from "./booster.module.css";
import AnimalCard from "../../../components/AnimalCard";
import { useState, useRef, useEffect } from "react";

export default function page() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showBooster, setShowBooster] = useState(true);
  const [showFlyingDivs, setShowFlyingDivs] = useState(false);
  const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
  const [isRotated, setIsRotated] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [cardAnimations, setCardAnimations] = useState([false, false, false]);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
    setIsRotated(true);
    setIsShaking(true);
    console.log("Shake!");
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

  useEffect(() => {
    // Add a new card animation every 1 seconds by setting each card animation to true in sequence
    const interval = setInterval(() => {
      setCardAnimations((prev) => {
        const newAnimations = [...prev];
        const index = newAnimations.findIndex((animation) => !animation);
        if (index !== -1) {
          newAnimations[index] = true;
        }
        return newAnimations;
      });
    }, 1000);
    // stop the interval after 3 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 2000);
  }, [showFlyingDivs]);

  return (
    <div className={styles.page}>
      {showBooster && (
        <div
          ref={boosterRef}
          className={`${styles.booster} ${isShaking ? styles.grow : ""}`}
          onClick={handleClick}
          style={{
            animationPlayState: isAnimating ? "running" : "paused",
            transform: isRotated ? "rotateY(90deg)" : "none",
          }}
        ></div>
      )}
      {cardAnimations[0] && (
        <div
          style={{
            position: "relative",
            top: divPosition.top + 100,
            left: divPosition.left,
          }}
        >
          <div className={styles.flyingdiv} style={{ top: 0, left: 0 }}>
            <AnimalCard />
          </div>
        </div>
      )}
      {cardAnimations[1] && (
        <div
          style={{
            position: "relative",
            top: divPosition.top + 100,
            left: divPosition.left,
          }}
        >
          <div className={styles.flyingdiv} style={{ top: 80, left: 150 }}>
            <AnimalCard />
          </div>
        </div>
      )}
      {cardAnimations[2] && (
        <div
          style={{
            position: "relative",
            top: divPosition.top + 100,
            left: divPosition.left,
          }}
        >
          <div className={styles.flyingdiv} style={{ top: 160, left: 300 }}>
            <AnimalCard />
          </div>
        </div>
      )}
    </div>
  );
}
