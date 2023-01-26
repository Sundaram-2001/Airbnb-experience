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
            <p> {props.desc}</p>
            <p className='bold'>From  ₹{props.price} /- person</p>
        </div>
    )
}


export default Card;