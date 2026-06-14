//controlers

import { herosPersonajes } from "../data/perosnajes.js";

export const traerPersonajes = (req, res) => {
  res.json(herosPersonajes);
};

export const traerPersonajesID = (req, res) => {
  let objetoReqParams = Number(req.params.id);

  let errorClient = {
    message: "error en la solicitud",
  };

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
