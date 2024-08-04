import React from "react";
import "./BlankAnimalCard.css";

const AnimalCard = React.memo(() => {
  return (
    <ul className="card-wrapper w-[200px]">
      <li className="card w-[200px]">
        <div className="card-inner">
          <img
            src="/cardBack.png"
            alt={`Opponent Card`}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </li>
    </ul>
  );
});

export default AnimalCard;
