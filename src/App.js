import React from 'react';
import './App.css';
import img from './images/shiba.png';
import Flip from './components/flip';

const App = () => {
  return(
    <div className='root'>
      <Flip src={img}/>
    </div>
  )
}

export default App;
