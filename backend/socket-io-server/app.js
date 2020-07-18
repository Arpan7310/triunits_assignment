const express=require('express')
const http=require("http")
const socketIo=require("socket.io");


const port=process.env.port || 4001;
const index=require("./routes/index.js")

const app=express();
var cors=require('cors')

app.use(index)
app.use(cors())
const server=http.createServer(app);
const io=socketIo(server);


let interval 
io.on("connection",(socket)=>{
    console.log("New client connected")
    if(interval){
        clearInterval(interval)
    }
interval=setInterval(()=>getApiAndEmit(socket),1000)
socket.on("disconnect", () =>{
    console.log("Client disconnected")
    clearInterval(interval)
})
})

server.listen(port, ()=>console.log(`listening on port ${port}`))

const getApiAndEmit = socket =>{
    const response=new Date ();
    socket.emit("FromApi",response)

}