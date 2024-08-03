"use client";
import React, { useState } from 'react';
import './quizModal.css';

export function QuizModal2({ onNextQuestion }) {
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
                <p>Q. Which of the following is NOT typically found on the beach?</p>
            </div>

            <div className='option-container'>
                {[
                    { src: '/shell.jpg', alt: 'Shell', isCorrect: false },
                    { src: '/fish.jpg', alt: 'Fish', isCorrect: true },
                    { src: '/sand.jpg', alt: 'Sand', isCorrect: false },
                    { src: '/rock.jpg', alt: 'Rock', isCorrect: false },
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
                                    src='/fish.jpg'
                                    alt='Fish'
                                />
                            </div>
                            <div>
                                <p className='modal-explain'>
                                    Fish live in the ocean, not on the beach. You can find rocks, sand, and shells on a beach, but not fish.
                                </p>
                            </div>
                        </div>
                        <button id="next-button" onClick={handleCloseModal}>
                            Result
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}