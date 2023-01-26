import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className="card">
            <img src="../images/ankur-warikoo.png" className="card--image" />
            <div className="card--stats">
                <img src="../image/star.png" className='card--star ' />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Ankur Warikoo</p>
            <p>From $136 / person</p>
        </div>
    )
}


export default Card;