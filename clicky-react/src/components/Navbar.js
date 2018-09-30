import React from "react";

//contains from left to right Name of game, responsive score feedback, and score(current score | top score)
const Navbar = props => (
    <nav className= "navbar bg-info click-nav">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="/"> Clicky Game </a>
            </li>
            <li className="nav-item">
                <h4>Click to start</h4>
            </li>
            <li className="nav-item">
                Score: 
                {
                    // dynamic scoring
                    props.score
                } | Top Score: {
                    props.topScore
                }
            </li>
        </ul>
    </nav>
);

export default Navbar;