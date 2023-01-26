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
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
  />



    )


  })
  return (
    <div>
        <Navbar />
      <section>
        {cards}
    </div>
)
}


