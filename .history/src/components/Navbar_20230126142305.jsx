import React from 'react';
import ReactDOM from 'react-dom';

function Navbar(){

    function handleClick(){
        prompt("Enter Your Address:");
    }
    return(
    
        <nav>
            <img className='nav--logo' src="../images/airbnb.png" alt="Air-bnb logo" width="120px" />
            <button onClick={handleClcik} type='button' class = "button--home">Airbnb your home</button>
            <button className='button--globe'><img  className='button--image' src="../images/world-wide-web(1).png" alt="" /></button>
            <button class="button--menu"><i class="fa fa-bars"></i> </button>
        </nav>
        
    )
}

export default Navbar;

//https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg
//margin: 4px 4px;