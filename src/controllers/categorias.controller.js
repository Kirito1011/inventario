import CategoriaModel from "../model/categoria.model.js";

const model = new CategoriaModel();

class CategoriaController {

  // Obtener todas las categorías
  getCategoriasController = async (req, res) => {
    try {
      const categorias = await model.getCategorias();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message
      });
    }
  };

  // Obtener una categoría por ID
  getCategoriaIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const categoria = await model.getCategoriaByID(id);

      if (!categoria) {
        return res.status(404).json({ message: "Categoria not found" });
      }

      res.json(categoria);
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message
      });
    }
  };

  // Crear una nueva categoría
  postCategoriaController = async (req, res) => {
    try {
      const { CategoriaNombre, Descripcion, Imagen } = req.body;

      const result = await model.createCategoria({ CategoriaNombre, Descripcion, Imagen });

      res.status(201).json({
        CategoriaID: result.insertId,
        CategoriaNombre,
        Descripcion,
        Imagen
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message
      });
    }
  };

  // Actualizar una categoría
  updateCategoriaController = async (req, res) => {
    try {
      const { id } = req.params;
      const { CategoriaNombre, Descripcion, Imagen } = req.body;

      const result = await model.updateCategoria(id, { CategoriaNombre, Descripcion, Imagen });

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Categoria not found" });
      }

      const updatedCategoria = await model.getCategoriaByID(id);
      res.json(updatedCategoria);
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message
      });
    }
  };

  // Eliminar una categoría
  deleteCategoriaController = async (req, res) => {
    try {
      const { id } = req.params;

      const result = await model.deleteCategoria(id);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Categoria not found" });
      }

      res.sendStatus(204); // Eliminado exitosamente
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message
      });
    }
  };
}

export default CategoriaController;
