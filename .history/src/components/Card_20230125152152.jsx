import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/download.png" className='card--star' />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) • </span>
                <span>{USA}</span>
            </div>
            <p>Life Lessons with Ankur Warikoo</p>
            <p className='bold'>From $136 / person</p>
        </div>
    )
}


export default Card;