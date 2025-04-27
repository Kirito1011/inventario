import { Router } from "express";
import categoriaController from "../controllers/categorias.controller.js";

const router = Router();
//creo un nuevo objeto de employeesController para poder usar sus funciones
const controller = new categoriaController;

router.get("/categorias", controller.getCategoriasController)

router.get("/categorias/:id", controller.getCategoriaIdController)

router.post("/crearCategorias", controller.postCategoriaController)

router.patch("/actualizarCategorias/:id", controller.updateCategoriaController)

router.delete("/eliminarCategoria/:id", controller.deleteCategoriaController)

export default router;