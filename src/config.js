//createpool es una especie de connunto de conexiones que se puede reutilizar
import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'inventario'
})