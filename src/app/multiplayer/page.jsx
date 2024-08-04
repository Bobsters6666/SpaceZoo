"use client";
import React, { useEffect, useRef } from "react";
import styles from "./multiplayer.module.css";
import { Avatar } from "@mui/material";
import { useCombatGame } from "./useCombatHook";

export default function Combat() {
  const audioRef = useRef(null);
  const winAudioRef = useRef(null);
  const loseAudioRef = useRef(null);

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
    playerWon,
  } = useCombatGame();

  // Play background music
  useEffect(() => {
    if (audioRef.current) {
      if (!showStartScreen && !gameOver) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [showStartScreen, gameOver]);

  // Play win/lose audio when game is over
  useEffect(() => {
    if (gameOver) {
      if (playerWon) {
        if (winAudioRef.current) {
          console.log("Playing win audio");
          winAudioRef.current
            .play()
            .catch((e) => console.error("Win audio play failed:", e));
        }
      } else {
        if (loseAudioRef.current) {
          console.log("Playing lose audio");
          loseAudioRef.current
            .play()
            .catch((e) => console.error("Lose audio play failed:", e));
        }
      }
    }
  }, [gameOver, playerWon]);

  return (
    <div className={styles.combat}>
      {showStartScreen && (
        <div className={styles.startScreen}>
          <h1>
            <i>JavaSkunk</i> vs <i>DEVSpacers</i>
          </h1>
          <button onClick={startGame}>Start Game</button>
        </div>
      )}
      {!showStartScreen && (
        <>
          <Avatar
            src="/avatar.jpg"
            sx={{ width: 80, height: 80 }}
            className={styles.player_avatar}
          />
          <p className={styles.player_name}>JavaSkunk</p>
          <Avatar
            src="/astronaut.png"
            sx={{ width: 80, height: 80 }}
            className={styles.opponent_avatar}
          />
          <p className={styles.opponent_name}>DEVSpacers</p>
          <div className={styles.opponent_hand}>
            {opponentCards.slice(0, visibleOpponentCards).map((card, index) => (
              <div
                key={index}
                className={
                  selectedOpponentCard === index
                    ? `${styles.opponent_selected_card} ${
                        isCardCrashing
                          ? styles.card_animation_crash_opponent
                          : ""
                      }`
                    : ""
                }
              >
                {card}
              </div>
            ))}
          </div>

          <div
            className={`${styles.player_hand} ${
              hoverPlayerHand ? styles.hovered_hand : ""
            }`}
            onMouseEnter={handleHandHover}
            onMouseLeave={handleHandLeave}
          >
            {playerCards.slice(0, visiblePlayerCards).map((card, index) => (
              <div
                key={index}
                className={
                  selectedCard === index
                    ? `${styles.selected_card} ${
                        isCardCrashing ? styles.card_animation_crash_player : ""
                      }`
                    : ""
                }
                onClick={() => handleCardClick(index)}
              >
                {card}
              </div>
            ))}
          </div>
          {selectedCard !== null && (
            <div onClick={handleCardDeselect} className={styles.overlay}></div>
          )}
          {playerTurn && selectedCard !== null && (
            <button className={styles.pass_button} onClick={handlePass}>
              Pass to Opponent
            </button>
          )}
          {!playerTurn ? (
            <div className={styles.turn}>Opponent's Turn</div>
          ) : (
            !gameOver &&
            !isCardCrashing && <div className={styles.turn}>Your Turn</div>
          )}
          {winnerMessage && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                fontSize: "24px",
                zIndex: 1000,
              }}
            >
              {winnerMessage}
            </div>
          )}
          {gameOverMessage && (
            <div className={styles.game_over_message}>
              {gameOverMessage}
              <div style={{ marginTop: "20px" }}>
                <button
                  onClick={() => {
                    /* Add logic to exit game */
                  }}
                  style={{
                    fontSize: "18px",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  Exit
                </button>
              </div>
            </div>
          )}
          <div className={styles.turn_counter}>Turn: {turn}</div>
        </>
      )}
      <audio ref={audioRef} loop preload="auto">
        <source src="/Audio/Boss_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={winAudioRef} preload="auto">
        <source src="/Audio/Win_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={loseAudioRef} preload="auto">
        <source src="/Audio/Lose_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
