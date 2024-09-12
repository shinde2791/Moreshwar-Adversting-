import React from 'react'
import '../App.css';
import Header from '../components/Header'
import About from '../components/About';
import Card1 from '../components/Cards1';
import Slider from '../components/Slider';
import Footer from '../components/footer';

const home = () => {
  return (

    <div className="App">
      <About />
      <Card1 />
      <Slider />
  
    </div>
  )
}

export default home;