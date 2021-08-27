import React from 'react';

function App() {
  const data = { saludo: 'Esto lo hizo ', 
    names: { 
      name1: 'Julio'
    }, 
    apellido: 'Gutierrez' 
  };
  const nombre = data?.names?.name1 + (data?.names?.name2 || " Cesar"); 
  return(
    <div>
      <h1>{data?.saludo} {nombre} {data?.apellido}</h1>
    </div>
  )
}

export default App;