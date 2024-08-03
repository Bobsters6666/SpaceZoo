"use client";
import React, { useState } from "react";
import "./quizModal.css";
import Image from "next/image";

export function QuizModal({ onNextQuestion }) {
  const [result, setResult] = useState("");
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOptionClick = (isCorrect) => {
    setResult(isCorrect ? "Correct!" : "Incorrect!");
    setIsAnswerChecked(true);
    setIsModalVisible(true);
  };

  // const handleNextButtonClick = () => {
  //     window.location.href = '/quizModal2.jsx';
  // };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="quiz-container">
      <Image
        src="/90_mile_beach.jpg"
        alt="beach"
        layout="fill"
        className="w-screen h-screen absolute -z-10"
      />
      <div className="question-container">
        <p className="font-semibold drop-shadow-xl mt-4 -mb-8">
          Q. Which of the following is <strong>NOT</strong> a animal that lives
          in the beach?
        </p>
      </div>

      <div className="option-container">
        <div className="option">
          <img
            className="image"
            src="/dolphin.png"
            alt="Dolphin"
            onClick={() => handleOptionClick(false)}
          />
        </div>
        <div className="option">
          <img
            className="image"
            src="/seal.jpg"
            alt="Seal"
            onClick={() => handleOptionClick(false)}
          />
        </div>
        <div className="option">
          <img
            className="image"
            src="/kiwiBird.jpg"
            alt="KiwiBird"
            onClick={() => handleOptionClick(true)}
          />
        </div>
        <div className="option">
          <img
            className="image"
            src="/penguin.jpg"
            alt="Penguin"
            onClick={() => handleOptionClick(false)}
          />
        </div>
      </div>

      {isModalVisible && (
        <>
          {result == "Correct!" ? (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <p className="text-green-600 text-xl font-bold mb-4">
                  {result}
                </p>
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <img
                      className="modal-image"
                      src="/kiwiBird.jpg"
                      alt="KiwiBird"
                    />
                  </div>
                  <div>
                    <p className="modal-explain">
                      The kiwi bird is a national symbol of New Zealand but it
                      lives in forests, not on beaches. Kiwis are flightless,
                      nocturnal birds.
                    </p>
                  </div>

                  <button id="next-button" onClick={onNextQuestion}>
                    Next Question
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModal}>
                    &times;
                  </span>
                  <p className="text-red-600 text-xl font-bold mb-4">
                    {result}
                  </p>
                  <div className="moda-explain-container">
                    <div>
                      <p className="modal-explain">
                        You have selected the wrong answer <br /> Try Again!
                      </p>
                    </div>
                  </div>
                  <button id="next-button" onClick={handleCloseModal}>
                    Try again
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
