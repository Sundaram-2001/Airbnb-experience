import React from 'react';
import ReactDOM from 'react-dom';


function Card(props){
    let badgeText
    if(props.openSpots===0){
        badgeText="SOLD OUT! :("
    }
    else if(props.location==="Online"){
        badgeText="Online 💻"
    }
    return(
        <div className="card">
           {badgeText && <div className="card--badge">{badgeText}</div>} 
            <img src={`../images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/download.png" className='card--star' />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p className='card--title'> {props.title}</p>
            <p className="card--price"><span className="bold">From ₹{props.price}</span> </p>

        </div>
    )
}


export default Card;