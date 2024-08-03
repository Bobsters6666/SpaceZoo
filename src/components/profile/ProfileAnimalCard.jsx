"use client";
import React from 'react';
import './ProfileAnimalCard.css';


const ProfileAnimalCard = ({animal}) => {

  return (
    <ul className="card-wrapper">
      <li className="card">
        <img 
          src={animal.photoUrl} 
          alt={`${animal.name} Image`} 
        />
        <h3>{animal.name}</h3>
        <p>{animal.description}</p>
      </li>
    </ul>
  );
};

export default ProfileAnimalCard;
