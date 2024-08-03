"use client";
import React, { useState } from "react";
import { QuizModal } from "@/components/quizModal/quizModal";
import { QuizModal2 } from "@/components/quizModal/quizModal2";

export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [totalScore, setTotalScore] = useState(0);

    const handleNextQuestion = (isCorrect) => {
      if (isCorrect) {
          setTotalScore(totalScore + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
  };

    return (
        <div className='app-container'>
            {currentQuestion === 1 && (
                <QuizModal onNextQuestion={handleNextQuestion} />
            )}
            {currentQuestion === 2 && (
                <QuizModal2 onNextQuestion={handleNextQuestion} />
            )}
            {currentQuestion > 2 && (
              <div className='score-container'>
                <p>Total Score: {totalScore}</p>
              </div>
            )}
        </div>
    );
}
