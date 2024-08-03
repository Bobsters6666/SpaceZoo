"use client";
import React, { useState } from 'react';
import './quizModal.css'

export function QuizModal2({onNextQuestion }) {

    const [result, setResult] = useState('');
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOptionClick = (isCorrect) => {
        setResult(isCorrect ? 'Correct!' : 'Incorrect!');
        setIsAnswerChecked(true);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className='quiz-container'>
            <div className='question-container'>
                <p>Q. Which of the following is NOT typically found on a beach?</p>
            </div>

            <div className='option-container'>
                <div className='option'> 
                    <img 
                        className="image" 
                        src='/shell.jpg' 
                        alt='Shell' 
                        onClick={() => handleOptionClick(false)}
                    />
                </div>
                <div className='option'> 
                    <img 
                        className="image" 
                        src='/fish.jpg' 
                        alt='Fish'  
                        onClick={() => handleOptionClick(true)}
                    />
                </div>
                <div className='option'>
                    <img 
                        className="image" 
                        src='/sand.jpg' 
                        alt='Sand' 
                        onClick={() => handleOptionClick(false)}
                    />
                </div>
                <div className='option'>
                    <img 
                        className="image" 
                        src='/rock.jpg' 
                        alt='Rock' 
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
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCloseModal}>&times;</span>
                        <p>{result}</p>
                        <div className='moda-explain-container'>
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
                    </div>
                </div>
            )}
        </div>
    )
}