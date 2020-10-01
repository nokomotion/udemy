import React from 'react';

export default function Saludar (props){
   const {userInfo,saludafuncion}=props;
   const {nombre,edad,color="Se desconoce"}=userInfo;
   
return (
    <div>
        <h2>Hola {nombre} tiene {edad} años</h2>
<h2>Tomando el nombre desde destructuring: {userInfo.nombre}</h2>
        
        <button onClick={()=>saludafuncion(nombre,color)}>saludar</button>
        

    </div>



);


}