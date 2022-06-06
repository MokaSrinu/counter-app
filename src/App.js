
import './App.css';
import React from 'react';

function App() {
  const [counter,setcounter]=React.useState(10);
  function handleincreament(val){
     setcounter(Number(counter)+val)
  }
  function handleincreament1(val){
    setcounter(Number(counter)*val)
 }
 let Displaycolor=()=>{
   if(counter%2===0){
     document.querySelector("h2").style="color:green"
   }else{
     document.querySelector("h2").style="color:red"
   }
   
 }
  return (
   <div>
     <h1>Counter</h1>
     <h2 id="counterele" >{counter}</h2>
     <button onClick={()=>handleincreament(1)}>increase</button>
     <button onClick={()=>handleincreament(-1)}>reduce</button>
     <button onClick={()=>handleincreament1(2)}>multi</button>
     <Displaycolor/>
   </div>
  );
  
}

export default App;

