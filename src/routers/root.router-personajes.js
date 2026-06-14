//routers
import { Router } from "express";
import { agregarPersonaje, editarPersonaje, traerPersonajes, traerPersonajesID } from "../controllers/root.controller-perosnajes.js";

export const herosPersonajesRouter = Router()

herosPersonajesRouter.get("/", traerPersonajes)
herosPersonajesRouter.get("/:id", traerPersonajesID )

herosPersonajesRouter.post("/new", agregarPersonaje)

herosPersonajesRouter.put("/:id", editarPersonaje)