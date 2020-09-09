import React from "react";

function CardBody({ firstname, lastname, phone,dob }) {
  return (
    <p className="h4 pt-3">
      Name: {firstname} {lastname}
      Phone: {phone}
      DOB: {dob}
    </p>
 
  );
}

export default CardBody;
