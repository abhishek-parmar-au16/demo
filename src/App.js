import React from 'react';
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Hero from './Components/Hero.js'
import FoodCard from './Components/FoodCard.js';
import ThemeProvider from '@mui/material/styles/ThemeProvider'
// import Theme from './MaterialConfig/Theme'
import About from './Components/About.js'
import Product from './Components/Products/Product.js'
import BestSelling from './Components/BestSelling.js'
import Contact from './Components/Contact/Contact.js'
import Counter from './Components/Context/Counter'
import CounterProvider from './Components/Context/CounterContext'



const PageNotFound = () => {
  return (
    <div>
      <h4>Page ni mil rha</h4>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;



//toolbar is used to horizontal wrap