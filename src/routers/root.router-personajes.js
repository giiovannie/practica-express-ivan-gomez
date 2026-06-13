//routers
import { Router } from "express";
import { crearPersonajes } from "../controllers/root.controller-perosnajes.js";

export const herosPersonajesRouter = Router()

herosPersonajesRouter.get("/", crearPersonajes)

