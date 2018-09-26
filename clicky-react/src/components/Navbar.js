import React from "react";

//contains from left to right Name of game, responsive score feedback, and score(current score | top score)
const Navbar = props => (
    <nav className= "navbar bg-info fixed-top">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="/"> Clicky Game </a>
            </li>
            <li className="nav-item">
            funny
                {
                    // content for dynamically making responses based on correct guess
                }
            </li>
            <li className="nav-item">
                Score: 
                {
                    // dynamic scoring
                } | Top Score: {

                }
            </li>
        </ul>
    </nav>
);

export default Navbar;