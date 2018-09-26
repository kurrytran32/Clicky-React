import React from "react";

// static jumbotron with name of game and short instructions
const Header = () => (
    <header className="header jumbotron-fluid bg-danger">
        <h1>Clicky Game</h1>
        <h2>Click on an image to start! You can't click on the same picture twice or you lose!</h2>
    </header>

);

export default Header;