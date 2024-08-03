import { useState, useCallback, useEffect } from 'react';
import AnimalCard from '../../components/AnimalCard';
import BlankAnimalCard from '../../components/BlankAnimalCard';

const CARD_COUNT = 4;
const DEAL_INTERVAL = 500;
const CRASH_ANIMATION_DURATION = 1000;
const OPPONENT_TURN_DELAY = 1000;
const WINNER_MESSAGE_DURATION = 600;

export function useCombatGame() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedOpponentCard, setSelectedOpponentCard] = useState(null);
  const [playerCards, setPlayerCards] = useState([...Array(CARD_COUNT)].map(() => <AnimalCard />));
  const [opponentCards, setOpponentCards] = useState([...Array(CARD_COUNT)].map(() => <BlankAnimalCard />));
  const [actualOpponentCards, setActualOpponentCards] = useState([...Array(CARD_COUNT)].map(() => <AnimalCard />));
  const [visiblePlayerCards, setVisiblePlayerCards] = useState(0);
  const [visibleOpponentCards, setVisibleOpponentCards] = useState(0);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [hoverPlayerHand, setHoverPlayerHand] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [isCardCrashing, setIsCardCrashing] = useState(false);
  const [turn, setTurn] = useState(1);
  const [winnerMessage, setWinnerMessage] = useState(null);
  const [gameOverMessage, setGameOverMessage] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleCardClick = useCallback((index) => {
    setSelectedCard(index);
  }, []);

  const handleCardDeselect = useCallback(() => {
    setSelectedCard(null);
  }, []);

  const handleHandHover = useCallback(() => {
    setHoverPlayerHand(true);
  }, []);

  const handleHandLeave = useCallback(() => {
    setHoverPlayerHand(false);
  }, []);

  const dealCards = useCallback(() => {
    let playerCardCount = 0;
    let opponentCardCount = 0;
    
    const dealInterval = setInterval(() => {
      if (playerCardCount < CARD_COUNT) {
        setVisiblePlayerCards(prev => prev + 1);
        playerCardCount++;
      }
      if (opponentCardCount < CARD_COUNT) {
        setVisibleOpponentCards(prev => prev + 1);
        opponentCardCount++;
      }
      if (playerCardCount === CARD_COUNT && opponentCardCount === CARD_COUNT) {
        clearInterval(dealInterval);
      }
    }, DEAL_INTERVAL);
  }, []);

  const selectOpponentCard = useCallback((cards) => {
    return Math.floor(Math.random() * cards.length);
  }, []);

  const updateOpponentCards = useCallback((prevOpponentCards, selectedOpponentCard) => {
    return prevOpponentCards.map((card, index) => 
      index === selectedOpponentCard ? actualOpponentCards[index] : card
    );
  }, [actualOpponentCards]);

  const determineCrashWinner = useCallback(() => {
    return Math.random() < 0.5 ? 'player' : 'opponent';
  }, []);

  const checkGameOver = useCallback((playerCards, opponentCards) => {
    const playerCardsRemaining = playerCards.filter(card => card !== null).length;
    const opponentCardsRemaining = opponentCards.filter(card => card !== null).length;
  
    if (playerCardsRemaining === 0) {
      return 'Game Over! The Opponent Won';
    } else if (opponentCardsRemaining === 0) {
      return 'Game Over! You Won';
    }
    return null;
  }, []);

  const updateCardsAfterCrash = useCallback((winner, playerCards, opponentCards, selectedCardIndex, selectedOpponentCardIndex) => {
    const updatedPlayerCards = winner === 'player' ? playerCards : playerCards.filter((_, index) => index !== selectedCardIndex);
    const updatedOpponentCards = winner === 'opponent' ? opponentCards : opponentCards.filter((_, index) => index !== selectedOpponentCardIndex);
  
    return { playerCards: updatedPlayerCards, opponentCards: updatedOpponentCards };
  }, []);

  const startGame = useCallback(() => {
    setShowStartScreen(false);
    dealCards();
  }, [dealCards]);

  const handlePass = useCallback(() => {
    setPlayerTurn(false);
  
    setTimeout(() => {
      if (selectedCard !== null) {
        const newSelectedOpponentCard = selectOpponentCard(opponentCards);
        setSelectedOpponentCard(newSelectedOpponentCard);
        setOpponentCards(prevOpponentCards => updateOpponentCards(prevOpponentCards, newSelectedOpponentCard));
  
        setTimeout(() => {
          setIsCardCrashing(true);
  
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
            setWinnerMessage(winner === 'player' ? 'Player Wins!' : 'Opponent Wins!');
  
            const gameOverMsg = checkGameOver(newPlayerCards, newOpponentCards);
            if (gameOverMsg) {
              setGameOverMessage(gameOverMsg);
              setGameOver(true);
            } else {
              setSelectedCard(null);
              setSelectedOpponentCard(null);
              setIsCardCrashing(false);
              setPlayerTurn(true);
              setTimeout(() => setWinnerMessage(null), WINNER_MESSAGE_DURATION);
              setTurn(prev => prev + 1);
            }
          }, CRASH_ANIMATION_DURATION);
        }, OPPONENT_TURN_DELAY);
      }
    }, OPPONENT_TURN_DELAY);
  }, [selectedCard, opponentCards, playerCards, selectOpponentCard, updateOpponentCards, determineCrashWinner, updateCardsAfterCrash, checkGameOver]);

  return {
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
  };
}