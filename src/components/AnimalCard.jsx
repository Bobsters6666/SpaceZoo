import React from "react";
import "./AnimalCard.css";
import animals from "../data/animals"; // Adjust import path as necessary

const getRandomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

const AnimalCard = React.memo(() => {
  const animal = getRandomAnimal();

  return (
    <ul className="card-wrapper">
      <li className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={animal.photoUrl} alt={`${animal.name} Image`} />
            <h3>{animal.name}</h3>
            <p>{animal.description}</p>
          </div>
          <div className="card-back">
            <img
              className="back-image"
              src={animal.photoUrl}
              alt={`${animal.name} Image`}
            />
            <p className="back-text">{animal.funFact}</p>

            <p className="back-rarity">{animal.rarity}</p>
          </div>
        </div>
      </li>
    </ul>
  );
});

export default AnimalCard;
//<p className="back-stats">Attack: {animal.stats.attack}</p>
//<p className="back-stats">Health: {animal.stats.health}</p>
