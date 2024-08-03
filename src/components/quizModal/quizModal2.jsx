"use client";
import React, { useState } from "react";
import "./quizModal.css";
import Image from "next/image";
import Link from "next/link";

export function QuizModal2({ onNextQuestion }) {
  const [result, setResult] = useState("");
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOptionClick = (isCorrect) => {
    setResult(isCorrect ? "Correct!" : "Incorrect!");
    setIsAnswerChecked(true);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="quiz-container w-screen">
      <Image
        src="/90_mile_beach.jpg"
        alt="beach"
        layout="fill"
        className="w-screen h-screen absolute -z-10"
      />
      <div className="question-container">
        <p className="font-semibold text-shadow-xl -mb-8 mt-4">
          Q. Which of the following is <strong>NOT</strong> typically found on a
          beach?
        </p>
      </div>

      <div className="option-container">
        <div className="option">
          <img
            className="image"
            src="/shell.jpg"
            alt="Shell"
            onClick={() => handleOptionClick(false)}
          />
        </div>
        <div className="option">
          <img
            className="image"
            src="/fish.jpg"
            alt="Fish"
            onClick={() => handleOptionClick(true)}
          />
        </div>
        <div className="option">
          <img
            className="image"
            src="/sand.jpg"
            alt="Sand"
            onClick={() => handleOptionClick(false)}
          />
        </div>
        <div className="option">
          <img
            className="image"
            src="/rock.jpg"
            alt="Rock"
            onClick={() => handleOptionClick(false)}
          />
        </div>
      </div>

      {isAnswerChecked && (
        <button id="next-button" onClick={onNextQuestion}>
          Result
        </button>
      )}

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
                    <img className="modal-image" src="/fish.jpg" alt="Fish" />
                  </div>
                  <div>
                    <p className="modal-explain">
                      The kiwi bird is a national symbol of New Zealand but it
                      lives in forests, not on beaches. Kiwis are flightless,
                      nocturnal birds.
                    </p>
                  </div>
                  <Link href={"/shop/booster"}>
                    <button id="next-button" onClick={onNextQuestion}>
                      Collect your Reward!
                    </button>
                  </Link>
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
