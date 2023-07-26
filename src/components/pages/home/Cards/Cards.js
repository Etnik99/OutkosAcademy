import React from "react";
import "./Cards.css";
import { cardData } from "./data";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="cards-container flex-c">
      <h1>Outkos Academy Team Members</h1>

      <div className="card-items flex">
        {cardData.map((card) => {
          return (
            <Link key={card.id} to={card.to} className="card-item flex-c">
              <FaRegUserCircle id="card-icon" />
              <p>{card.name}</p>
              <div className="role flex-b">
                <p id="role">Role:</p>
                <p>{card.role}</p>
              </div>
              <p className="tx">{card.description}</p>
              <Link to={card.to} className="card-link">
                {card.link}
              </Link>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
