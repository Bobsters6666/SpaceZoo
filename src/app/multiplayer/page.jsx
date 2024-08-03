"use client";
import React, { useState, useEffect } from 'react';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import BlankAnimalCard from '../../components/BlankAnimalCard/BlankAnimalCard';
import styles from './multiplayer.module.css';
import { Avatar } from '@mui/material';
import { useCombatGame } from './useCombatHook';

export default function Combat() {
  const {
    selectedCard,
    selectedOpponentCard,
    playerCards,
    opponentCards,
    visiblePlayerCards,
    visibleOpponentCards,
    showStartScreen,
    hoverPlayerHand,
    playerTurn,
    isCardCrashing,
    turn,
    winnerMessage,
    gameOverMessage,
    gameOver,
    handleCardClick,
    handleCardDeselect,
    handleHandHover,
    handleHandLeave,
    startGame,
    handlePass,
  } = useCombatGame();

  return (
    <div className={styles.combat}>
    {showStartScreen && <div className={styles.startScreen}><h1>JavaSkunk vs DEVSpacers</h1><button onClick={startGame}>Start Game</button></div>}
    {!showStartScreen && <><Avatar src="/avatar.jpg" sx={{ width: 80, height: 80 }} className={styles.player_avatar}/>
    <p className={styles.player_name}>JavaSkunk</p>
    <Avatar src="/opponentavatar.jpg" sx={{ width: 80, height: 80 }} className={styles.opponent_avatar}/>
    <p className={styles.opponent_name}>DEVSpacers</p>
      <div className={styles.opponent_hand}>
  {opponentCards.slice(0, visibleOpponentCards).map((card, index) => (
    <div
      key={index}
      className={selectedOpponentCard === index ? `${styles.opponent_selected_card} ${isCardCrashing ? styles.card_animation_crash_opponent : ''}` : ''}
    >
      {card}
    </div>
  ))}
</div>

<div 
  className={`${styles.player_hand} ${hoverPlayerHand ? styles.hovered_hand : ''}`} 
  onMouseEnter={handleHandHover} 
  onMouseLeave={handleHandLeave}
>
  {playerCards.slice(0, visiblePlayerCards).map((card, index) => (
    <div
      key={index}
      className={selectedCard === index ? `${styles.selected_card} ${isCardCrashing ? styles.card_animation_crash_player : ''}` : ''}
      onClick={() => handleCardClick(index)}
    >
      {card}
    </div>
  ))}
</div>
      {selectedCard !== null && (
        <div onClick={handleCardDeselect} className={styles.overlay}></div>
      )}
      {playerTurn && selectedCard !== null && <button className={styles.pass_button} onClick={handlePass}>Pass to Opponent</button>}
      {!playerTurn ? <div className={styles.turn}>Opponent's Turn</div> : !gameOver && !isCardCrashing && <div className={styles.turn} >Your Turn</div>}
      {winnerMessage && (
  <div 
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      fontSize: '24px',
      zIndex: 1000
    }}
  >
    {winnerMessage}
  </div>)}
  {gameOverMessage && <div className={styles.game_over_message}>{gameOverMessage}<div style={{ marginTop: '20px' }}><button 
        onClick={() => {/* Add logic to exit game */}}
        style={{
          fontSize: '18px',
          padding: '10px 20px',
          cursor: 'pointer'
        }}
      >
        Exit
      </button></div></div>}
        <div className={styles.turn_counter}>Turn: {turn}</div>
    </>}
    </div>
  );
}