import { pool } from "../config.js";

export const getCategorias = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categorias')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getCategoriasProductos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT p.*, c.CategoriaNombre FROM productos p INNER JOIN categorias c ON p.CategoriaID = c.CategoriaID')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//al poner VALUES(?, ?) le estoy diciendo que lo voy a reemplazar valores desde mi biblioteca
//cuando hacemos una insercion, una cosulta, una actualizacion, un eliminar datos o cualquier tipo de operacion con la base de datos esto seimpre tiene que ser asyncrono 
export const createClientes  = async (req, res) => {
    try {
        const {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = req.body
        const [rows] = await pool.query('INSERT INTO clientes (ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax])
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteCategorias = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM categorias WHERE id = ?', [req.params.id])
    if (result.affectedRows <=0) res.status(404).json({
       message: 'categorias not found'
    })
    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}


//el IFNULL me sirve para que si cambio un dato diferente a ese, este se mantenga con el anterior dato
export const updatProductos = async (req, res) => {
    try {
        const {id} = req.params
    const {ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado} = req.body

    const [result] = await pool.query('UPDATE productos SET ProductoID = IFNULL(?, ProductoID), ProductoNombre = IFNULL(?, ProductoNombre), ProveedorID = IFNULL(?, ProveedorID), CategoriaID = IFNULL(?, CategoriaID), CantidadPorUnidad = IFNULL(?, CantidadPorUnidad), PrecioUnitario = IFNULL(?, PrecioUnitario), UnidadesStock = IFNULL(?, UnidadesStock), UnidadesPedidas = IFNULL(?, UnidadesPedidas), NivelReorden = IFNULL(?, NivelReorden), Discontinuado = IFNULL(?, Discontinuado) WHERE id = ?', [ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado, id])
    if (result.affectedRows <=0) res.status(404).json({
        message: 'productos not found'
    })

    const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?', [id])
    console.log(result)
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}