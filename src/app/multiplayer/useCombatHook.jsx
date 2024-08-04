import { useState, useCallback, useEffect } from "react";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import BlankAnimalCard from "../../components/BlankAnimalCard/BlankAnimalCard";
import CustomAnimalCard from "../../components/CustomAnimalCard/CustomAnimalCard";
import animals from "../../data/animals";

const CARD_COUNT = 4;
const DEAL_INTERVAL = 500;
const CRASH_ANIMATION_DURATION = 1000;
const OPPONENT_TURN_DELAY = 1000;
const WINNER_MESSAGE_DURATION = 600;

const getRandomAnimals = (count) => {
  return Array.from({ length: count }, () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
  });
};

export function useCombatGame() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedOpponentCard, setSelectedOpponentCard] = useState(null);
  const [playerAnimals, setPlayerAnimals] = useState(getRandomAnimals(CARD_COUNT));
  const [opponentAnimals, setOpponentAnimals] = useState(getRandomAnimals(CARD_COUNT));
  const [playerCards, setPlayerCards] = useState(playerAnimals.map((animal) => <CustomAnimalCard animal={animal} />));
  const [opponentCards, setOpponentCards] = useState(
    [...Array(CARD_COUNT)].map(() => <BlankAnimalCard />)
  );
  const [actualOpponentCards, setActualOpponentCards] = useState(opponentAnimals.map((animal) => <CustomAnimalCard animal={animal} />));
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
  const [playerWon, setPlayerWon] = useState(false);

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
        setVisiblePlayerCards((prev) => prev + 1);
        playerCardCount++;
      }
      if (opponentCardCount < CARD_COUNT) {
        setVisibleOpponentCards((prev) => prev + 1);
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

  const updateOpponentCards = useCallback(
    (prevOpponentCards, selectedOpponentCard) => {
      return prevOpponentCards.map((card, index) =>
        index === selectedOpponentCard ? actualOpponentCards[index] : card
      );
    },
    [actualOpponentCards]
  );

  const determineCrashWinner = useCallback((playerCard, opponentCard) => {
    console.log(playerCard, opponentCard);
    const playerWins = playerCard.stats.attack > opponentCard.stats.health;
    const opponentWins = opponentCard.stats.attack > playerCard.stats.health;

    if (playerWins && !opponentWins) return "player";
    if (opponentWins && !playerWins) return "opponent";
    return "tie";
  }, []);

  const checkGameOver = useCallback((playerCards, opponentCards) => {
    const playerCardsRemaining = playerCards.filter(
      (card) => card !== null
    ).length;
    const opponentCardsRemaining = opponentCards.filter(
      (card) => card !== null
    ).length;

    if (playerCardsRemaining === 0) {
      setPlayerWon(false);
      return "Game Over! The Opponent Won";
    } else if (opponentCardsRemaining === 0) {
      setPlayerWon(true);
      return "Game Over! You Won";
    }
    return null;
  }, []);

  const updateCardsAfterCrash = useCallback(
    (
      winner,
      playerCards,
      opponentCards,
      selectedCardIndex,
      selectedOpponentCardIndex
    ) => {
      const updatedPlayerCards =
        winner === "player" || winner === "tie"
          ? playerCards
          : playerCards.map((card, index) => index === selectedCardIndex ? null : card);
      const updatedOpponentCards =
        winner === "opponent" || winner === "tie"
          ? opponentCards
          : opponentCards.map((card, index) => index === selectedOpponentCardIndex ? null : card);

      return {
        playerCards: updatedPlayerCards,
        opponentCards: updatedOpponentCards,
      };
    },
    []
  );

  const startGame = useCallback(() => {
    setShowStartScreen(false);
    dealCards();
  }, [dealCards]);

  const handlePass = useCallback(() => {
    setPlayerTurn(false);

    setTimeout(() => {
      if (selectedCard !== null) {
        const newSelectedOpponentCard = selectOpponentCard(actualOpponentCards);
        setSelectedOpponentCard(newSelectedOpponentCard);
        setOpponentCards((prevOpponentCards) =>
          updateOpponentCards(prevOpponentCards, newSelectedOpponentCard)
        );

        setTimeout(() => {
          setIsCardCrashing(true);

          setTimeout(() => {
            const winner = determineCrashWinner(playerAnimals[selectedCard], opponentAnimals[newSelectedOpponentCard]);
            const {
              playerCards: newPlayerCards,
              opponentCards: newOpponentCards,
            } = updateCardsAfterCrash(
              winner,
              playerCards,
              opponentCards,
              selectedCard,
              newSelectedOpponentCard
            );

            setPlayerCards(newPlayerCards);
            setOpponentCards(newOpponentCards);
            setWinnerMessage(
              winner === "player" ? "Player Wins!" : "Opponent Wins!"
            );

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
              setTurn((prev) => prev + 1);
            }
          }, CRASH_ANIMATION_DURATION);
        }, OPPONENT_TURN_DELAY);
      }
    }, OPPONENT_TURN_DELAY);
  }, [
    selectedCard,
    opponentCards,
    playerCards,
    selectOpponentCard,
    updateOpponentCards,
    determineCrashWinner,
    updateCardsAfterCrash,
    checkGameOver,
  ]);

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
    playerWon,
  };
}