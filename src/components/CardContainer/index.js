import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer({ image, firstname, lastname, phone, dob }) {
  return (
    <tr className="jumbotron card-container">
      {/* <td><img src={image}/></td>
  <td><Name firstName={firstname} /></td> */}
      <Card
        image={image}
        firstname={firstname}
        lastname={lastname}
          phone={phone}
          dob={dob}
      />
    </tr>
  );
}

export default CardContainer;
