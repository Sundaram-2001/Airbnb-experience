import React from 'react';
import ReactDOM from 'react-dom';


function Card(props){
    return(
        <div className="card">
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/download.png" className='card--star' />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
            <p className='card--title'> {props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span>
        </div>
    )
}


export default Card;