import React from "react";
import CardBody from "../CardBody";
import CardImg from "../CardImage";
// import CardHeading from "../CardHeading";
import "./style.css";

function Card({ title, image, firstname, lastname, phone, dob }) {
  return (
    <div>
      {/* <CardHeading title={title} /> */}
      <CardImg image={image} />
      <CardBody firstname={firstname} lastname={lastname} />
      <CardBody phone = {phone} dob ={dob}/>
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      
    </div>
  );
}

export default Card;
