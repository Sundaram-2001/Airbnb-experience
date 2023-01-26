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
      
      item={item}
  />



    )


  })
  return (
    <div>
        <Navbar />
      <section className='cards-list'>
        {cards}
        </section>
        
    </div>
)
}


