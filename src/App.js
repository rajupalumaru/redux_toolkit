import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products'
import Store from './Redux/Store';

function App() {
  const [name,setName]=useState("raju");
  return (
    <div>
      <Child data={name}/>
    </div>
  );
}

export default App;

const Child=({data})=>{

  return(
    <div>
      <button >Click Me</button>
    </div>
  )
}
