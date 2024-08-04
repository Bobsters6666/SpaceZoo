"use client";
import React from "react";
import "./AnimalCard.css";
import animals from "../../data/animals";
import { FaHandFist, FaHeart } from "react-icons/fa6";

const getRandomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

const AnimalCard = React.memo(() => {
  const getBorderStyle = (rarity) => {
    switch (rarity) {
      case "Common":
        return ["3px solid #cccccc", "#cccccc"];
      case "Uncommon":
        return ["3px solid #00ff00", "#00ff00"];
      case "Rare":
        return ["3px solid #0000ff", "#0000ff"];
      case "Epic":
        return ["3px solid #800080", "#800080"];
      case "Legendary":
        return ["3px solid #f80000", "#f80000"];
    }
  };

  const animal = getRandomAnimal();

  return (
    <ul className="card-wrapper w-[200px]">
      <li className="card w-[200px]">
        <div className="card-inner">
          <div
            className="card-front"
            style={{
              border: getBorderStyle(animal.rarity)[0],
            }}
          >
            <img src={animal.photoUrl} alt={`${animal.name} Image`} />
            <div className="font-semibold">
              <h3 className="drop-shadow-2xl">{animal.name}</h3>
              <i className="attack-stat flex items-center gap-2">
                Attack: {animal.stats.attack}{" "}
                <FaHandFist size={12} color="white" />
              </i>
              <i className="health-stat flex items-center gap-2">
                Health: {animal.stats.health} <FaHeart size={12} color="red" />
              </i>
            </div>

            <p
              className="back-rarity font-bold drop-shadow-lg text-[18px]"
              style={{ color: getBorderStyle(animal.rarity)[1] }}
            >
              {animal.rarity}
            </p>
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
            <p>{animal.description}</p>
          </div>
        </div>
      </li>
    </ul>
  );
});

export default AnimalCard;
