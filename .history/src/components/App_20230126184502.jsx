import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
import data from "./data";

export default function App(){
  function onCard(){
    alert("Please Log-In to book tickets!")
  }

  const cards=data.map(item => {
    return(
      <Card 
      onClic
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


