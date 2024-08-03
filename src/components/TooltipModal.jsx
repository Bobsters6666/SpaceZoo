import React from 'react';
import styles from './TooltipModal.module.css'; // Import CSS module for styling

const TooltipModal = ({ visible, position, content }) => {
  if (!visible) return null; // Do not render if not visible

  return (
    <div
      className={styles.modal}
      style={{ top: position.y, left: position.x }}
    >
      {content}
    </div>
  );
};

export default TooltipModal;