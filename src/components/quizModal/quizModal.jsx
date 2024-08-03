"use client";
import React, { useState } from 'react';
import './quizModal.css';

export function QuizModal({ onNextQuestion }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [result, setResult] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOptionClick = (isCorrect) => {
        setSelectedOption(isCorrect);
    };

    const handleSubmit = () => {
        if (selectedOption !== null) {
            setResult(selectedOption ? 'Correct!' : 'Incorrect!');
            setIsModalVisible(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        onNextQuestion(selectedOption);
    };

    return (
        <div className='quiz-container'>
            <div className='question-container'>
                <p>Q. Which of the following is not an animal that lives on the beach?</p>
            </div>

            <div className='option-container'>
                {[
                    { src: 'dolphin.png', alt: 'Dolphin', isCorrect: false },
                    { src: 'seal.jpg', alt: 'Seal', isCorrect: false },
                    { src: 'kiwiBird.jpg', alt: 'Kiwi Bird', isCorrect: true },
                    { src: 'penguinQuiz.jpg', alt: 'Penguin', isCorrect: false },
                ].map((option, index) => (
                    <div 
                        key={index} 
                        className={`option ${selectedOption === index ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(index, option.isCorrect)}
                    >
                        <img className="image" src={option.src} alt={option.alt} />
                        <div className='option-text'>{option.alt}</div>
                    </div>
                ))}
            </div>

            {selectedOption !== null && (
                <button id="submit-button" onClick={handleSubmit}>
                    Submit
                </button>
            )}

            {isModalVisible && (
                <div className='modal'>
                    <div className='modal-content'>
                        <p className='modal-result'>{result}</p>
                        <div className='modal-explain-container'>
                            <div>
                                <img
                                    className="modal-image"
                                    src='/kiwiBird.jpg'
                                    alt='KiwiBird'
                                />
                            </div>
                            <div>
                                <p className='modal-explain'>
                                    The kiwi bird is a national symbol of New Zealand but it lives in forests, not on beaches. Kiwis are flightless, nocturnal birds.
                                </p>
                            </div>
                        </div>
                        <button id="next-button" onClick={handleCloseModal}>
                            Next Question
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
