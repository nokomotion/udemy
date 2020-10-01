import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

 

function App() {
  
const persona={
nombre:"Jorge Isaac Gaspariano Rivera",
edad:31,

}

const saludarfn=(names,colores)=>{
  alert("Hola como estas "+names+"? tienes "+(31+1)+"+y tu color favorito es: "+colores )
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Saludar 
        userInfo={persona} saludafuncion={saludarfn}>
      </Saludar>
     
      </header>
    </div>
  );
}

export default App;
