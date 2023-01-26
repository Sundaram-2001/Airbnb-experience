import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className='card'>
            <img src="shorturl.at/eIKQU" alt="" className='card-photo' />
            <div className='card-stats'>
                <span><h4>☆</h4></span>
                <span>5</span>
                <span>(6)•</span>
                <span>India</span>
            </div>
        </div>
    )
}


export default Card;