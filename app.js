import express from 'express';

const server = express();
server.use(express.json())

server.listen("3000", ()=>{
    console.log("se prendio el server en el puerto 3000");
})