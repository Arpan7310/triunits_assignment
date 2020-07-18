import React, { useState, useEffect } from 'react';
import io from "socket.io-client"


const ENDPOINT="wss://www.bitmex.com/realtime?subscribe=orderBookL2_25,orderBook:XBTUSD"

function ClientComponent() {

  const [response,setResponse]=useState("")
 const webSocket=new WebSocket(ENDPOINT) 
  useEffect (()=>{

   webSocket.onopen=function(event){
     webSocket.send({op: "subscribe", args: "orderBookL2_25:XBTUSD"})
    
   }
   webSocket.onmessage=function(event){
    setResponse(event.data)
   
   }
 
 


   
  },[])
  return (
   <div>
<p>Its {response}</p>

   </div>
  );
}

export default ClientComponent;
