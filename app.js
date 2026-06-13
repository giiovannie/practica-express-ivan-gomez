//app.js
import express from 'express';
import { crearPersonajes } from './src/controllers/root.controller-perosnajes.js';
import { herosPersonajesRouter } from './src/routers/root.router-personajes.js';

const server = express();
server.use(express.json())

server.use("/heroe", herosPersonajesRouter)

server.listen("3000", ()=>{
    console.log("se prendio el server en el puerto 3000");
})