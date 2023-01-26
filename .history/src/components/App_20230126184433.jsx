import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
import data from "./data";

export default function App(){
  function onCard(){

  }

  const cards=data.map(item => {
    return(
      <Card 
      
      item={item}
  />



    )


  })
  return (
    <div>
        <Navbar />
        <Hero />
        <h4>Online and in-person events</h4>
      <section className='cards-list'>
        
        {cards}
        </section>
        
    </div>
)
}


