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
        return ["3px solid #b3b3b3", "#b3b3b3"];
      case "Uncommon":
        return ["3px solid #278f3f", "#278f3f"];
      case "Rare":
        return ["3px solid #3131b0", "#3131b0"];
      case "Epic":
        return ["3px solid #ffbf00", "#ffbf00"];
      case "Legendary":
        return ["3px solid #ab2929", "#ab2929"];
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
                Health: {animal.stats.health}{" "}
                <FaHeart size={12} color="#E50000" />
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
