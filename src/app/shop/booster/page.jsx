"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./booster.module.css";
import AnimalCard from "../../../components/AnimalCard/AnimalCard";

export default function Page() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showBooster, setShowBooster] = useState(true);
  const [showFlyingDivs, setShowFlyingDivs] = useState(false);
  const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
  const [isRotated, setIsRotated] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [cardAnimations, setCardAnimations] = useState([false, false, false]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [boosterDone, setBoosterDone] = useState(false);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
    setIsRotated(true);
    setIsShaking(true);
    console.log("Shake!");
    setTimeout(() => {
      setShowFlyingDivs(true);
      setIsShaking(false);
      setShowBooster(false);
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
        setBoosterDone(true);
      }, 3000);
    }, 500);
  };

  const boosterRef = useRef(null);
  setTimeout(() => {
    setLoading(false);
  }, 200);

  useEffect(() => {
    if (boosterRef.current) {
      const rect = boosterRef.current.getBoundingClientRect();
      setDivPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isAnimating]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
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
          {cardAnimations.map(
            (showCard, index) =>
              showCard && (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    top: divPosition.top + 100,
                    left: divPosition.left,
                    zIndex: hoveredIndex === index ? 1000 : 1, // Set high z-index on hover
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={styles.flyingdiv}
                    style={{ top: index * 80, left: index * 150 }}
                  >
                    <AnimalCard />
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </>
  );
}
