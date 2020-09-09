import React from "react";

function CardBody({ firstname, lastname, phone,dob }) {
  return (
    <p className="h4 pt-3">
      {firstname} {lastname}
      {phone}
      {dob}
    </p>
 
  );
}

export default CardBody;
