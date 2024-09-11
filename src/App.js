
import React from 'react';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Card1 from './components/Cards1';
import Slider  from './components/Slider';

function App() {
  return (
    <div className="App">
   <Header/>
   <About/>
   <Card1/>
   <Slider/>
    </div>
  );
}

export default App;
