import React from "react";
// Depending on the current path, this component sets the "active" class on the appropriate navigation div item
const Navbar = ({  navText, score, highscore }) => (
<nav className="navbar navbar-dark bg-dark fixed-top">
  
      <span className="navbar-brand mb-0 h1">&nbsp;ClickyGame&nbsp;</span>
    
      <span className="navbar-text">&nbsp;{navText}&nbsp;</span>  

      <span className="navbar-text">&nbsp;Score: {score}&nbsp;&nbsp;&nbsp;Highscore: {highscore}&nbsp;</span>
    
</nav>

);

export default Navbar;
