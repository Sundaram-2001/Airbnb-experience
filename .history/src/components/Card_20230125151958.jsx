import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className="card">
            <img src= className="card--image" />
            <div className="card--stats">
                <img src="../images/download.png" className='card--star' />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Ankur Warikoo</p>
            <p className='bold'>From $136 / person</p>
        </div>
    )
}


export default Card;