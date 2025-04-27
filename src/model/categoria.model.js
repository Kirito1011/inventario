import { pool } from "../db/db.js";

export class CategoriaModel {

  async getCategorias() {
    try {
      const [rows] = await pool.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error obteniendo categorías: " + error.message);
    }
  }

  async getCategoriaByID(id) {
    try {
      const [rows] = await pool.query(
        "SELECT * FROM categorias WHERE CategoriaID = ?", [id]
      );
      return rows[0];
    } catch (error) {
      throw new Error("Error obteniendo categoría: " + error.message);
    }
  }

  async createCategoria({ CategoriaNombre, Descripcion, Imagen }) {
    try {
      const [result] = await pool.query(
        "INSERT INTO categorias (CategoriaNombre, Descripcion, Imagen) VALUES (?, ?, ?)",
        [CategoriaNombre, Descripcion, Imagen]
      );
      return result;
    } catch (error) {
      throw new Error("Error creando categoría: " + error.message);
    }
  }

  async updateCategoria(id, { CategoriaNombre, Descripcion, Imagen }) {
    try {
      const [result] = await pool.query(
        "UPDATE categorias SET CategoriaNombre = IFNULL(?, CategoriaNombre), Descripcion = IFNULL(?, Descripcion), Imagen = IFNULL(?, Imagen) WHERE CategoriaID = ?", 
        [CategoriaNombre, Descripcion, Imagen, id]
      );
      return result;
    } catch (error) {
      throw new Error("Error actualizando categoría: " + error.message);
    }
  }

  async deleteCategoria(id) {
    try {
      const [result] = await pool.query(
        "DELETE FROM categorias WHERE CategoriaID = ?", [id]
      );
      return result;
    } catch (error) {
      throw new Error("Error eliminando categoría: " + error.message);
    }
  }
}

export default CategoriaModel;
