import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className='card'>
            <img src="" alt="" className='card-photo' />
           <div>
            <img src="./star.png" alt="" />
                <span>5</span>
                <span>(6)•</span>
                <span>India</span>
            </div>
        </div>
    )
}


export default Card;