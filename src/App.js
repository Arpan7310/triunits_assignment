import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client"
import './App.css';
import ClientComponent from './components/ClientComponent'


function App() {

  
  const [loadClient,setLoadClient]=useState(true)

  return (
   <>
<button onClick={()=>setLoadClient(prevState=>!prevState)}>

</button>
{loadClient?<ClientComponent/>:null}
   </>
  );
}

export default App;
