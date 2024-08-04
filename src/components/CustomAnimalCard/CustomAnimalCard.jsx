"use client";
import React from "react";
import "./AnimalCard.css";
import { FaHandFist, FaHeart } from "react-icons/fa6";

const getBorderStyle = (rarity) => {
  switch (rarity) {
    case "Common":
      return ["3px solid #c0c0c0", "#c0c0c0"];
    case "Uncommon":
      return ["3px solid #008000", "#008000"];
    case "Rare":
      return ["3px solid #0000cc", "#0000cc"];
    case "Epic":
      return ["3px solid #ffbf00", "#ffbf00"];
    case "Legendary":
      return ["3px solid #940c0c", "#940c0c"];
  }
};

const CustomAnimalCard = React.memo(({ animal, health = animal.stats.health, tinted = false }) => {
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
            <img
              src={animal.photoUrl}
              alt={`${animal.name} Image`}
              className={tinted ? "tinted-image" : ""}
            />
            <div className="font-semibold">
              <h3 className="drop-shadow-2xl">{animal.name}</h3>
              <i className="attack-stat flex items-center gap-2">
                Attack: {animal.stats.attack}{" "}
                <FaHandFist size={12} color="white" />
              </i>
              <i className="health-stat flex items-center gap-2">
                Health: {health} <FaHeart size={12} color="red" />
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
              className={`back-image ${tinted ? "tinted-image" : ""}`}
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

export default CustomAnimalCard;
