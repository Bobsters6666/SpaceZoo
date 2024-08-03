import React from 'react';
import styles from './TooltipText.module.css'; 
import { useState } from 'react';
import TooltipModal from '@/components/TooltipModal';

const TooltipText = ({ name, description }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const { clientX: x, clientY: y } = e;
    setModalPosition({ x: x - 300, y: y - 350 });
    setIsModalVisible(true);
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };

  return <><strong
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}>{name}</strong><TooltipModal        visible={isModalVisible}
  position={modalPosition}
  content={description}
/></>;
  
};

export default TooltipText;