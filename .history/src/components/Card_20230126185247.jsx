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
        <div onClick={() => alert("Kindly Log-In to proceed for check-out")} className="card">
           {badgeText && <div className="card--badge">{badgeText}</div>} 
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/download.png" className='card--star' />
                <span>{props.item.stats.ratings}</span>
                <span>({props.item.stats.count})•</span>
                <span>{props.item.location}</span>
            </div>
            <p className='card--title'> {props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> </p>

        </div>
    )
}


export default Card;