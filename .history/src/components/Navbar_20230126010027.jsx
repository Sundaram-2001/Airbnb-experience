import React from 'react';
import ReactDOM from 'react-dom';

function Navbar(){
    return(
    
        <nav>
            <img className='nav--logo' src="../images/airbnb.png" alt="Air-bnb logo" width="120px" />
            <button  class = "button--home">Airbnb your home</button>
            <button class=""> 🌐 </button>
        </nav>
        
    )
}

export default Navbar;

//https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg
//margin: 4px 4px;