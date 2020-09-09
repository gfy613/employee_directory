import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({ image, firstname, lastname, phone, dob }) {
  return (
    <div className="jumbotron card-container">
      <Card
        image={image}
        firstname={firstname}
        lastname={lastname}
          phone={phone}
          dob={dob}
      />
    </div>
  );
}

export default CardContainer;
