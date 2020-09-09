import React from "react";

function CardBody({ firstname, lastname, phone,dob }) {
  return (
    <td className="align-middle">
      {firstname} {lastname}
      {phone}
      {dob}
    </td>
 
  );
}

export default CardBody;
