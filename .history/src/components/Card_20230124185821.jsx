import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className="card">
            <img src="../images/ankur-warikoo.png" className="card--image" />
            <div className="card--stats">
                <img src="./components//star.png" />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}


export default Card;