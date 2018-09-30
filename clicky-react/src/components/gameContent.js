import React from "react";

// contains content for games, functions written in parent with props passed down, images are positioned randomly
const Content = props => {
    return (
        <div className="gameContent">
            <div className="">{props.children}</div>
        </div>
    )

};



export default Content;