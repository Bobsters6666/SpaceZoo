"use client";

import React from 'react';
import './AnimalCard.css';
import animals from '@/data/animals'; // Adjust import path as necessary

const getRandomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

const AnimalCard = () => {
  const animal = getRandomAnimal();

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

export default AnimalCard;
