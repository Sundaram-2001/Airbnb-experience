import React from 'react';
import ReactDOM from 'react-dom';


function Hero(){
    return(
        <section className='hero'>
            <img  className='hero--photo' src="https://user-images.githubusercontent.com/78269625/158746508-4cd3f5a4-b6c4-4799-afe7-30777b1e0f5f.png" alt="" />
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home</p>
        </section>
    )
}


export default Hero;