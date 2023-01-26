import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
import data from "./data";

export default function App(){
  const cards=data.map(item => {
    return(
      <Card 
      on
      item={item}
  />



    )


  })
  return (
    <div>
        <Navbar />
        <Hero />
      <section className='cards-list'>
        {cards}
        </section>
        
    </div>
)
}


