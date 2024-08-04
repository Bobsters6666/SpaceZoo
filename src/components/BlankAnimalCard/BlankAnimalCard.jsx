import React from "react";
import "./BlankAnimalCard.css";

const AnimalCard = React.memo(() => {
  return (
    <ul className="card-wrapper w-[200px]">
      <li className="card w-[200px]">
        <div className="card-inner">
            <img src="/crate.jpg" alt={`Opponent Card`} />
        </div>
      </li>
    </ul>
  );
});

export default AnimalCard;
