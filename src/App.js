import React from 'react';
import Home from '../src/Components/Pages/Home'
import Products from '../src/Components/Pages/products'
import Contact from '../src/Components/Pages/Contact'
import{Route} from 'react-router-dom'

function App(){
  
  return (
    <div className="App">
    <Route exact path='/' component={Home}/>
    <Route exact path='/Products' component={Products}/>
    <Route exact path='/Contact' component={Contact}/>
   
  </div>
  );
  
}

export default App;
