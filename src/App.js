
import React from 'react';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Card1 from './components/Cards1';
import Slider from './components/Slider';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="bg-gradient-to-r from-violet-200 to-pink-200">
        <Header />
        <About />
        <Card1 />
        <Slider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
