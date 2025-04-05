import { Router } from "express";
import {methodHTTP as categoriaController} from "../controllers/categorias.controller.js";

const router = Router();

router.get("/", categoriaController.getCategorias);

export default router;