"use client";
import React, { useState } from 'react';
import AnimalCard from '../../components/AnimalCard';
import BlankAnimalCard from '../../components/BlankAnimalCard';
import styles from './multiplayer.module.css';

export default function Combat() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedOpponentCard, setSelectedOpponentCard] = useState(null);
  const [playerCards, setPlayerCards] = useState([...Array(4)].map(() => <AnimalCard />));
  const [opponentCards, setOpponentCards] = useState([...Array(4)].map(() => <BlankAnimalCard />));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [isCrashing, setIsCrashing] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState(null);
  const [gameOverMessage, setGameOverMessage] = useState(null);
  const [gameOver, setGameOver] = useState(false);


  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleCardDeselect = () => {
    setSelectedCard(null);
  };

  const selectOpponentCard = (opponentCards) => {
    const randomIndex = Math.floor(Math.random() * opponentCards.length);
    return randomIndex;
  };
  
  const updateOpponentCards = (prevOpponentCards, selectedOpponentCard) => {
    const newOpponentCards = [...prevOpponentCards];
    newOpponentCards[selectedOpponentCard] = <AnimalCard />;
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
  
  const updateCardsAfterCrash = (winner, playerCards, opponentCards, selectedCard, selectedOpponentCard) => {
    if (winner === 'player') {
      return {
        playerCards,
        opponentCards: opponentCards.map((card, index) => index === selectedOpponentCard ? null : card)
      };
    } else {
      return {
        playerCards: playerCards.map((card, index) => index === selectedCard ? null : card),
        opponentCards
      };
    }
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
                }, 600);
            }
  
            
          }, 1000); // Duration of the crash animation
        }, 1000);
      }
    }, 1000);
  };

  return (
    <div className={styles.combat}>
      <div className={styles.opponent_hand}>
        {opponentCards.map((card, index) => (
          <div
            key={index}
            className={selectedOpponentCard === index ? `${styles.opponent_selected_card} ${isCrashing ? styles.card_animation_crash_opponent : ''}` : ''}
          >
            {card}
          </div>
        ))}
      </div>
      <div className={styles.player_hand}>
        {playerCards.map((card, index) => (
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
      {!playerTurn ? <div className={styles.turn}>Opponent's Turn</div> : <div className={styles.turn} >Your Turn</div>}
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
  {gameOverMessage && <div className={styles.game_over_message}>{gameOverMessage}</div>}

    </div>
  );
}