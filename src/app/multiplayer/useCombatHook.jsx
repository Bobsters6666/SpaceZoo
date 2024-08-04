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
  const [playerAnimalHealths, setPlayerAnimalHealths] = useState(playerAnimals.map((animal) => animal.stats.health));
  const [opponentAnimalHealths, setOpponentAnimalHealths] = useState(opponentAnimals.map((animal) => animal.stats.health));
  const [playerCards, setPlayerCards] = useState(playerAnimals.map((animal) => <CustomAnimalCard animal={animal}
    health={playerAnimalHealths[playerAnimals.indexOf(animal)]} />));
  const [opponentCards, setOpponentCards] = useState(
    [...Array(CARD_COUNT)].map(() => <BlankAnimalCard />)
  );
  const [actualOpponentCards, setActualOpponentCards] = useState(opponentAnimals.map((animal) => <CustomAnimalCard animal={animal} health={opponentAnimalHealths[opponentAnimals.indexOf(animal)]} />));
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
    const validCards = cards.filter(card => card !== null && card.props.health > 0 && cards.indexOf(card) !== -1);
    return validCards.length ? Math.floor(Math.random() * validCards.length) : -1;
  }, []);

  const updateOpponentCards = useCallback(
    (prevOpponentCards, selectedOpponentCard) => {
      if (selectedOpponentCard === -1) return prevOpponentCards;

      // Ensure that the actualOpponentCards do not contain null values
      const filteredActualOpponentCards = actualOpponentCards.filter(card => card !== null);

      return prevOpponentCards.map((card, index) =>
        index === selectedOpponentCard ? filteredActualOpponentCards[index] : card
      );
    },
    [actualOpponentCards]
  );

  useEffect(() => {
    console.log("Updated player healths: " + playerAnimalHealths);
  }, [playerAnimalHealths]);

  useEffect(() => {
    console.log("Updated opponent healths: " + opponentAnimalHealths);
  }, [opponentAnimalHealths]);



  const updateHealth = (playerIndex, newPlayerHealth, opponentIndex, newOpponentHealth) => {
    console.log("Before updating healths:");
    console.log("Player healths: ", playerAnimalHealths);
    console.log("Opponent healths: ", opponentAnimalHealths);

    setPlayerAnimalHealths((prevHealths) => {
      const updatedHealths = [...prevHealths];
      updatedHealths[playerIndex] = newPlayerHealth;
      return updatedHealths;
    });

    setOpponentAnimalHealths((prevHealths) => {
      const updatedHealths = [...prevHealths];
      updatedHealths[opponentIndex] = newOpponentHealth;
      return updatedHealths;
    });

    // Note: The following log will not show updated values immediately
    // Use the useEffect hooks above to verify updates.
    console.log("Update initiated.");
  };


  const determineCrashWinner = useCallback((playerCard, opponentCard, playerIndex, opponentIndex) => {
    const playerWins = playerCard.stats.attack >= opponentAnimalHealths[opponentIndex];
    const opponentWins = opponentCard.stats.attack >= playerAnimalHealths[playerIndex];

    console.log("Player card attack: " + playerCard.stats.attack);
    console.log("Opponent card attack: " + opponentCard.stats.attack);

    const playerHealth = playerAnimalHealths[playerIndex] - opponentCard.stats.attack;
    const opponentHealth = opponentAnimalHealths[opponentIndex] - playerCard.stats.attack;
    console.log("Health of player " + playerIndex + ": " + playerHealth);
    console.log("Health of opponent " + opponentIndex + ": " + opponentHealth);

    updateHealth(playerIndex, playerHealth, opponentIndex, opponentHealth);

    if (playerWins && !opponentWins) return "player";
    if (opponentWins && !playerWins) return "opponent";
    return "tie";
  }, [opponentAnimalHealths, playerAnimalHealths, updateHealth]);


  const checkGameOver = useCallback((playerCards, opponentCards) => {
    const playerCardsRemaining = playerCards.filter(
      (card) => card !== null
    ).length;
    const opponentCardsRemaining = opponentCards.filter(
      (card) => card !== null
    ).length;

    if (playerCardsRemaining === 0) {
      1
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
        winner === "player"
          ? playerCards
          : playerCards.map((card, index) =>
            index === selectedCardIndex || playerAnimalHealths[index] <= 0
              ? null : card
          );
      const updatedOpponentCards =
        winner === "opponent"
          ? opponentCards
          : opponentCards.map((card, index) =>
            index === selectedOpponentCardIndex || opponentAnimalHealths[index] <= 0
              ? null : card
          );

      return {
        playerCards: updatedPlayerCards,
        opponentCards: updatedOpponentCards,
      };
    },
    []
  );

  useEffect(() => {
    setPlayerCards(
      playerAnimals.map((animal, index) => (
        playerAnimalHealths[index] > 0 ? (
          <CustomAnimalCard
            key={index}
            animal={animal}
            health={playerAnimalHealths[index]}
          />
        ) : null
      ))
    );
    setActualOpponentCards(
      opponentAnimals.map((animal, index) => (
        opponentAnimalHealths[index] > 0 ? (
          <CustomAnimalCard
            key={index}
            animal={animal}
            health={opponentAnimalHealths[index]}
          />
        ) : null
      ))
    )
  }, [playerAnimalHealths, playerAnimals]); // Ensure playerAnimals is included in the dependency array


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

        // Print healths before
        console.log("Player healths before: " + playerAnimalHealths);
        console.log("Opponent healths before: " + opponentAnimalHealths);

        setTimeout(() => {
          setIsCardCrashing(true);

          setTimeout(() => {
            const winner = determineCrashWinner(
              playerAnimals[selectedCard],
              opponentAnimals[newSelectedOpponentCard],
              selectedCard,
              newSelectedOpponentCard
            );

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
              winner === "player" ? "Opponent card is down!" : winner === "opponent" ? "Player card is down!" : "It's a tie!"
            );

            const gameOverMsg = checkGameOver(newPlayerCards, newOpponentCards);
            if (gameOverMsg) {
              setGameOverMessage(gameOverMsg);
              setGameOver(true);
            } else {
              // Print healths after
              console.log("Player healths after: " + playerAnimalHealths);
              console.log("Opponent healths after: " + opponentAnimalHealths);

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