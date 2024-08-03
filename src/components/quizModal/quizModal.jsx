"use client";
import React, { useState } from 'react';
import './quizModal.css'

export function QuizModal({onNextQuestion }) {

    const [result, setResult] = useState('');
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOptionClick = (isCorrect) => {
        setResult(isCorrect ? 'Correct!' : 'Incorrect!');
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
        <div className='quiz-container'>
            <div className='question-container'>
                <p>Q. Which of the following is not a animal that lives in the beach?</p>
            </div>

            <div className='option-container'>
                <div className='option'> 
                    <img 
                        className="image" 
                        src='/dolphin.png' 
                        alt='Dolphin' 
                        onClick={() => handleOptionClick(false)}
                    />
                </div>
                <div className='option'> 
                    <img 
                        className="image" 
                        src='/seal.jpg' 
                        alt='Seal'  
                        onClick={() => handleOptionClick(false)}
                    />
                </div>
                <div className='option'>
                    <img 
                        className="image" 
                        src='/kiwiBird.jpg' 
                        alt='KiwiBird' 
                        onClick={() => handleOptionClick(true)}
                    />
                </div>
                <div className='option'>
                    <img 
                        className="image" 
                        src='/penguin.jpg' 
                        alt='Penguin' 
                        onClick={() => handleOptionClick(false)}
                    />
                </div>
            </div>

            {isAnswerChecked && (
                <button id="next-button" onClick={onNextQuestion}>
                    Next Question
                </button>
            )}

            {isModalVisible && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCloseModal}>&times;</span>
                        <p>{result}</p>
                        <div className='moda-explain-container'>
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
                    </div>
                </div>
            )}
        </div>
    )
}