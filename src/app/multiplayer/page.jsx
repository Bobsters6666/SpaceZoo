"use client";
import React, { useState } from 'react';
import AnimalCard from '../../components/AnimalCard';
import styles from './multiplayer.module.css';

export default function Combat() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleCardDeselect = () => {
    setSelectedCard(null);
  };

  return (
    <>
    
      <div className={styles.player_hand}>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={selectedCard === index ? styles.selected_card : ''}
            onClick={() => handleCardClick(index)}
          >
            <AnimalCard />
          </div>
        ))}
      </div>
      {selectedCard !== null && (
        <div onClick={handleCardDeselect} className={styles.overlay}></div>
      )}
    </>
  );
}