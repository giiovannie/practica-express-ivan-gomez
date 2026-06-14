//controlers

import { herosPersonajes } from "../data/perosnajes.js";

let errorClient = {
  message: "error en la solicitud",
};

export const traerPersonajes = (req, res) => {
  res.json(herosPersonajes);
};

export const traerPersonajesID = (req, res) => {
  let objetoReqParams = Number(req.params.id);

  if (objetoReqParams < 0 || isNaN(objetoReqParams)) {
    return res.status(400).json(errorClient)
  }else{
    let personaID = herosPersonajes.find((skin) => {
      return objetoReqParams === skin.id;
    });

    if (!personaID) {
      return res.status(404).json(errorClient);
    } else {
      return res.json(personaID);
    }
  }  
};


export const agregarPersonaje = (req,res)=>{
  
  const body = req.body;
  console.log(req.body);


  
  if(body.nombre === undefined || body.imagen === undefined){
    return res.status(400).json(errorClient);
  }else{
    const nombre = req.body.nombre;
    const imagen = req.body.imagen;

    let inyeccionReq = {
      id: herosPersonajes[herosPersonajes.length - 1].id + 1,
      nombre,
      imagen
    }

    herosPersonajes.push(inyeccionReq)
    console.log(herosPersonajes)

    return res.json(herosPersonajes)
  }
}