"use client";
import React, { useState, useEffect } from 'react';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import BlankAnimalCard from '../../components/BlankAnimalCard/BlankAnimalCard';
import styles from './multiplayer.module.css';
import { Avatar } from '@mui/material';

export default function Combat() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedOpponentCard, setSelectedOpponentCard] = useState(null);
  const [playerCards, setPlayerCards] = useState([...Array(4)].map(() => <AnimalCard />));
  const [opponentCards, setOpponentCards] = useState([...Array(4)].map(() => <BlankAnimalCard />));
  const [actualOpponentCards, setActualOpponentCards] = useState([...Array(4)].map(() => <AnimalCard />));
  const [visiblePlayerCards, setVisiblePlayerCards] = useState(0);
  const [visibleOpponentCards, setVisibleOpponentCards] = useState(0);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [hoverPlayerHand, setHoverPlayerHand] = useState(false);

  const [playerTurn, setPlayerTurn] = useState(true);
  const [isCrashing, setIsCrashing] = useState(false);

  const [turn, setTurn] = useState(1);

  const [winnerMessage, setWinnerMessage] = useState(null);
  const [gameOverMessage, setGameOverMessage] = useState(null);
  const [gameOver, setGameOver] = useState(false);


  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleCardDeselect = () => {
    setSelectedCard(null);
  };

  const handleHandHover = () => {
    setHoverPlayerHand(true);
    };

    const handleHandLeave = () => {
    setHoverPlayerHand(false);
    };

  const dealCards = () => {
    let playerCardCount = 0;
    let opponentCardCount = 0;
    
    const dealInterval = setInterval(() => {
      if (playerCardCount < 4) {
        setVisiblePlayerCards(playerCardCount + 1);
        playerCardCount++;
      }
      if (opponentCardCount < 4) {
        setVisibleOpponentCards(opponentCardCount + 1);
        opponentCardCount++;
      }
      if (playerCardCount === 4 && opponentCardCount === 4) {
        clearInterval(dealInterval);
      }
    }, 500); // Adjust this value to change the speed of dealing
  }

  const selectOpponentCard = (opponentCards) => {
    const randomIndex = Math.floor(Math.random() * opponentCards.length);
    return randomIndex;
  };
  
  const updateOpponentCards = (prevOpponentCards, selectedOpponentCard) => {
    const newOpponentCards = [...prevOpponentCards];
    newOpponentCards[selectedOpponentCard] = actualOpponentCards[selectedOpponentCard];
    return newOpponentCards;
  };
  
  const determineCrashWinner = () => {
    return Math.random() < 0.5 ? 'player' : 'opponent';
  };

  const checkGameOver = (playerCards, opponentCards) => {
    const playerCardsRemaining = playerCards.filter(card => card !== null).length;
    const opponentCardsRemaining = opponentCards.filter(card => card !== null).length;
  
    if (playerCardsRemaining === 0) {
      return 'Game Over! The Opponent Won';
    } else if (opponentCardsRemaining === 0) {
      return 'Game Over! You Won';
    }
    return null;
  };
  
  const updateCardsAfterCrash = (winner, playerCards, opponentCards, selectedCardIndex, selectedOpponentCardIndex) => {
    const updatedPlayerCards = playerCards.filter((_, index) => index !== selectedCardIndex);
    const updatedOpponentCards = opponentCards.filter((_, index) => index !== selectedOpponentCardIndex);
  
    return winner === 'player'
      ? {
          playerCards: playerCards,
          opponentCards: updatedOpponentCards
        }
      : {
          playerCards: updatedPlayerCards,
          opponentCards: opponentCards
        };
  };

  const startGame = () => {
    setShowStartScreen(false);
    dealCards();
  };
  
  const handlePass = () => {
    setPlayerTurn(false);
  
    setTimeout(() => {
      if (selectedCard !== null) {
        // Select a random card from the opponent's hand
        const newSelectedOpponentCard = selectOpponentCard(opponentCards);
        setSelectedOpponentCard(newSelectedOpponentCard);
        setOpponentCards(prevOpponentCards => updateOpponentCards(prevOpponentCards, newSelectedOpponentCard));
  
        setTimeout(() => {
          setIsCrashing(true);
  
          setTimeout(() => {
            const winner = determineCrashWinner();
            const { playerCards: newPlayerCards, opponentCards: newOpponentCards } = updateCardsAfterCrash(
              winner,
              playerCards,
              opponentCards,
              selectedCard,
              newSelectedOpponentCard
            );
  
            setPlayerCards(newPlayerCards);
            setOpponentCards(newOpponentCards);
            
            // Set the winner message
            setWinnerMessage(winner === 'player' ? 'Player Wins!' : 'Opponent Wins!');
  
            // Check if the game is over
            const gameOverMsg = checkGameOver(newPlayerCards, newOpponentCards);
            if (gameOverMsg) {
                setGameOverMessage(gameOverMsg);
                setGameOver(true);
            } else {
                // If game is not over, clear the winner message after 1 second
                setSelectedCard(null);
                setSelectedOpponentCard(null);
                setIsCrashing(false);
                setPlayerTurn(true);
                setTimeout(() => {
                setWinnerMessage(null);
                }, 600); // Duration of the winner message
                setTurn(turn + 1);
            }
  
            
          }, 1000); // Duration of the crash animation
        }, 2000); // Delay before the crash animation
      }
    }, 1000);// Delay before the opponent's turn
  };

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
      className={selectedOpponentCard === index ? `${styles.opponent_selected_card} ${isCrashing ? styles.card_animation_crash_opponent : ''}` : ''}
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
      className={selectedCard === index ? `${styles.selected_card} ${isCrashing ? styles.card_animation_crash_player : ''}` : ''}
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
      {!playerTurn ? <div className={styles.turn}>Opponent's Turn</div> : !gameOver && !isCrashing && <div className={styles.turn} >Your Turn</div>}
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