"use client";
import React from 'react';
import './ProfileAnimalCard.css';
import { FaLock } from "react-icons/fa";


const ProfileAnimalCard = ({animal, locked = false}) => {

  return (
    <ul className="card-wrapper">
      <li className={`card ${locked? 'locked': ''}`}>
        <img 
          src={animal.photoUrl} 
          alt={`${animal.name} Image`} 
        />
        <h3>{animal.name}</h3>
        <p>{animal.description}</p>
        {locked && <FaLock className="lockIcon" size="5rem"
        />}
      </li>
      
    </ul>
    
  );
};

export default ProfileAnimalCard;
