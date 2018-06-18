import React from "react";
// Depending on the current path, this component sets the "active" class on the appropriate navigation div item
const Navbar = props => (
<nav className="navbar navbar-dark bg-dark fixed-top">
  
      <span className="navbar-brand mb-0 h1">&nbsp;ClickyGame&nbsp;</span>
    
      <span className="navbar-text">&nbsp;Click an image to begin!&nbsp;</span>  

      <span className="navbar-text">&nbsp;Score: 0&nbsp;&nbsp;&nbsp;Highscore: 0&nbsp;</span>
    
</nav>

);

export default Navbar;
