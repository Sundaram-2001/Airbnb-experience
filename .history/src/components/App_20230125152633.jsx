import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';


function App(){
    return(
        <div >
        <Navbar/>
        <Card
        img="ankur-warikoo.png"
        rating="5"
        reviewCount="6.0"
        />
        </div>
    )
}

export default App;