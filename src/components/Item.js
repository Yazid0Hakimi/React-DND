import React from "react";
import "./App.css";


const Item = (props) => {
  return (
    <>
      <div className="item">{props.item}</div>
    </>
  );
};

export default Item;
