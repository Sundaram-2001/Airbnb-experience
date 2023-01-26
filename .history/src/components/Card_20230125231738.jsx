import React from 'react';
import ReactDOM from 'react-dom';


function Card(props){
    let badgeText
    if(props.item.openSpots===0){
        badgeText="SOLD OUT! :("
    }
    else if(props.item.location==="Online"){
        badgeText="Online 💻"
    }
    return(
        <div className="card">
           {badgeText && <div className="card--badge">{badgeText}</div>} 
            <img src={`../images/${props.item.Img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/download.png" className='card--star' />
                <span>{props.item.rating}</span>
                <span>({props.item.reviewCount}) • </span>
                <span>{props.item.location}</span>
            </div>
            <p className='card--title'> {props.item.title}</p>
            <p className="card--price"><span className="bold">From ₹{props.item.price}</span> </p>

        </div>
    )
}


export default Card;