//createpool es una especie de connunto de conexiones que se puede reutilizar
import { createPool } from "mysql2/promise";
import GlobalVariables from "../config.js";

const env = new GlobalVariables;

export const pool = createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    database: env.DB_DATABASE
})