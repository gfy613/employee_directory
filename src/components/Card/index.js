import React from "react";
import CardBody from "../CardBody";
import CardImg from "../CardImage";
import "./style.css";

function Card({ title, image, firstname, lastname, phone, dob }) {
  return (
    <React.Fragment>
      <CardImg image={image} />
      <CardBody firstname={firstname} lastname={lastname} />
      <CardBody phone = {phone} />
      <CardBody dob ={dob}/>
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </React.Fragment>
  );
}

export default Card;
