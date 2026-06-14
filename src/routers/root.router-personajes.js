//routers
import { Router } from "express";
import { traerPersonajes, traerPersonajesID } from "../controllers/root.controller-perosnajes.js";

export const herosPersonajesRouter = Router()

herosPersonajesRouter.get("/", traerPersonajes)
herosPersonajesRouter.get("/:id", traerPersonajesID )
