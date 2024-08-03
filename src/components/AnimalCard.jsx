import React from "react";
import "./AnimalCard.css";
import animals from "../data/animals"; // Adjust import path as necessary

const getRandomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

const AnimalCard = React.memo(() => {
  const getBorderStyle = (rarity) => {
    switch (rarity) {
      case "Common":
        return "2px solid #cccccc";
      case "Uncommon":
        return "2px solid #00ff00";
      case "Rare":
        return "2px solid #0000ff";
      case "Epic":
        return "2px solid #800080";
      case "Legendary":
        return "2px solid #f80000";
    }
  };

  const animal = getRandomAnimal();

  return (
    <ul className="card-wrapper w-[200px]">
      <li className="card w-[200px]">
        <div className="card-inner">
          <div className="card-front">
            <img src={animal.photoUrl} alt={`${animal.name} Image`} />
            <h3>{animal.name}</h3>
            <p>{animal.description}</p>
          </div>
          <div
            className="card-back"
            style={{ border: getBorderStyle(animal.rarity) }}
          >
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
