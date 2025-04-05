const getCategorias = (req, res) => {
    res.json({"categoria": "Electrodomesticos"});
}

/* Si se manda solo la llave el interpreta que la llave tiene el mismo valor con el mismo nombre */
export const methodHTTP = {
    getCategorias
}