import React from "react";
import "../components/Card.css"
import { Link } from "react-router-dom";

const Card = ({titulo, descripcion}) => {
  return (
    <div className="card">
      <Link to={titulo}><h2>{titulo}</h2></Link>
      <p>
       {descripcion}
      </p>
    </div>
  );
};

export default Card;
