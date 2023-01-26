import React from 'react';
import ReactDOM from 'react-dom';

function Navbar(){
    var Languages=["English" , "हिंदी" , "मराठी" , "తెలుగు" , "ಕನ್ನಡ" , "മലയാളം"];
    function handleClick(){
        prompt("Enter Your Address:");
    }
    function moreClick(){
        alert("You need to Log-");
    }

    return(
    
        <nav>
            <img className='nav--logo' src="../images/airbnb.png" alt="Air-bnb logo" width="120px" />
            <button title='Click Here!' onClick={handleClick} type='button' class = "button--home">Airbnb your home</button>
            <button  title="Available Languages" onClick={globeClick} className='button--globe'><img  className='button--image' src="../images/world-wide-web(1).png" alt="" /></button>
            <button title="More" class="button--menu"><i class="fa fa-bars"></i> </button>
        </nav>
        
    )
}

export default Navbar;

//https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg
//margin: 4px 4px;