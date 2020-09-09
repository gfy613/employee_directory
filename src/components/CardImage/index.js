import React from "react";

function CardImg({ image }) {
  return (
    <td className="align-middle">
      <img className="card-img  " src={image} alt="user thumbnail" />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </td>
  );
}

export default CardImg;