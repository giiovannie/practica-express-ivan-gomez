//controlers

import { herosPersonajes } from "../data/perosnajes.js";

export const crearPersonajes = (req, res)=>{
    res.json(herosPersonajes)
}