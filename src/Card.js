import React from "react";
import "./card.css";

const Card = ({ value }) => {
  return (
    <div className="card" id={value.id}>
      <img src={value.image} width={40} height={40} />
      <div className="card-heading">{value.title}</div>
      <div className="card-description">{value.desc}</div>
    </div>
  );
};

export default Card;
