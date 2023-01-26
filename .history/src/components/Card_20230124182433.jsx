import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className='card'>
            <img src="shorturl.at/eIKQU" alt="" className='card-photo' />
            <div className='card-stats'>
            <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
        </div>
    )
}


export default Card;