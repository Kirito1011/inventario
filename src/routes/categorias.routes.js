import { Router } from "express";
import {getCategorias, createClientes, updatProductos, deleteCategorias} from "../controllers/categorias.controller.js";

const router = Router();

router.get("/employees", getCategorias)

router.post("/crearEmpleado", createClientes)

router.patch("/actualizarProducto/:id", updatProductos)

router.delete("/eliminarCategoria/:id", deleteCategorias)

export default router;