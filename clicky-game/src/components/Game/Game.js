import React from "react";
import "./Game.css";

const Game = ({  array, onClick }) => (
<div className = "container" >
  <div className = "row" id ="imageHolder">
    {array.map(function(images) {
    return (
        <div className = "center col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <img  onClick = {onClick}  key={ images.src } src={ images.src } alt={ images.alt } />
        </div>
    );  
  })}
  </div>
</div>
);

export default Game;
