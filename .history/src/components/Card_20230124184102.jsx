import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className='card'>
            <img  className src="data:image/jpeg;base64,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" alt="" className='card-photo' />
           <div className='card--stats'>
            <img src="./star.png" alt="" />
                <span>5</span>
                <span>(6)•</span>
                <span>India</span>
            </div>
        </div>
    )
}


export default Card;