import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';


function App(){
    return(
        <div className='card'>
        <Navbar/>
        <Card/>
        </div>
    )
}

export default App;