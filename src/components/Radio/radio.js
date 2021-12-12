import React from "react";
import classes from "./radio.module.css";

const Radio = ({ name, label, value, onClicked, icon }) => {
  return (
    <div className={classes.radioContainer}>
      <input onClick={onClicked} value={value} type="radio" name={name && name} />
      {icon && <img src={icon} alt="" />}
      {label && <label>{label}</label>}
    </div>
  );
};

export default Radio;
