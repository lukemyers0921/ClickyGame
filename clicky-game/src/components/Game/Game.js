import React from "react";
import "./Game.css";

const Game = props => (

        <div className = "center col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <img  onClick = {() => props.onClick(props.alt)}  key={ props.alt } src={ props.src } alt={ props.alt } />
        </div>
);
export default Game;
