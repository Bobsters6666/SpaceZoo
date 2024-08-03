// pages/title.js
"use client";
import React from 'react';
import styles from './lesson_1.module.css'; // Import the CSS module for styling
import TooltipModal from '@/components/TooltipModal';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TitlePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [index, setIndex] = useState(0);

  const handleMouseEnter = (e) => {
    const { clientX: x, clientY: y } = e;
    setModalPosition({ x: x + 10, y: y + 10 });
    setIsModalVisible(true);
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };

  const handleNext = () => {
    console.log("some")
    setIndex(index + 1);
  }

  const handleBack = () => {
    setIndex(index - 1);
  }

  return (
    <div className={styles.lessonPage}>
      
      <h1 className={styles.title}>What is a beach?</h1>
      <div className={`${styles.content} relative`}>
        <div className={styles.textContainer}>
          {
            index === 0 ? <p className={styles.lessonText}>A <strong
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>beach</strong> is a part of Earth land that is made of very small things. <br></br><br></br> These things include rock, sand and gravel. You can also find shells on the beach, which can come from many <strong onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>marine animals.</strong> 
              </p> : null
          }
          {
            index === 1 ? <p>second page</p> : null
          }
          { 
            index != 2 && <div className={styles.arrowRightContainer} onClick={handleNext} ><FaArrowRight color='white' size={24}
            />
          </div>}
          { 
            index != 0 && <div className={styles.arrowLeftContainer} onClick={handleBack} ><FaArrowLeft color='white' size={24}
            />
          </div>}
          
          
        </div>
      
      </div>
      <TooltipModal        visible={isModalVisible}
        position={modalPosition}
        content="A marine animal is an animal that lives in the ocean. Some examples of marine animals are fish, whales, and dolphins."
      />
    </div>
  );
};

export default TitlePage;