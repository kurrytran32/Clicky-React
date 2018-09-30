import React from "react";


const Image = props => {
    return (
    <div className='img-thumbnail imageContainer'>
        <img onClick={props.onClick} id={props.id} src={props.src} className='' alt="looney tunes" data-clicked={props.clicked}/>
    </div>
    )
}

export default Image;