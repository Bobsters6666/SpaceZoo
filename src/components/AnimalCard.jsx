"use client";

import React, { useEffect, useState } from 'react';
import './AnimalCard.css';
//import Button from '@mui/material/Button';

const animals = [ // List of animals. When API key is added, randomly picked. 
  'kiwi',
  'penguin',
  'tuatara',
  'fur seal',
  'blue whale'
];

const randomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

const exampleAnimal = randomAnimal();

export default function AnimalCard() {
  const [animalDetails, setAnimalDetails] = useState({ detailedName: '', slogan: '' });

  const fetchAnimalDetails = async (animal) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
        headers: {
          'X-Api-Key': '' // API key
        }
      });
      const data = await response.json();
      if (data.length > 0) {
        const [{ characteristics: { slogan }, name: detailedName }] = data;
        setAnimalDetails({ detailedName, slogan });
      } else {
        setAnimalDetails({ detailedName: 'Example name', slogan: 'Example animal' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setAnimalDetails({ detailedName: 'Error fetching data', slogan: 'Error fetching data' });
    }
  };

  useEffect(() => {
    fetchAnimalDetails(exampleAnimal);
  }, []);

  return (
    <ul className="card-wrapper">
      <li className="card">
        <img 
          src={`/${animalDetails.animal}.jpg`} 
          alt={`${animalDetails.detailedName} Image`}
        />
        <h3>{animalDetails.detailedName}</h3>
        <p>{animalDetails.slogan}</p>
      </li>
    </ul>
    
    
  );// Route the button or delete if not used. <Button class="card-button" variant="text">More</Button>
}
