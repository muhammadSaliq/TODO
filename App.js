import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Cards from './Cards';
import Input from './Input';
import Home from './Home';

function App() {
  const [card , setcard] = useState(1);
  
  return (
<>
     <Home/>
    </>
  );
}

export default App;
