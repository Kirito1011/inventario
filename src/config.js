import { config } from "dotenv";

config();

class configVariables{
    PORT = process.env.PORT || 3000
    DB_USER = process.env.DB_USER || "root"
    DB_PASSWORD = process.env.DB_PASSWORD || "romero10_Nishida"
    DB_HOST = process.env.DB_HOST || "localhost"
    DB_DATABASE = process.env.DB_DATABASE || "inventario"
    DB_PORT = process.env.DB_PORT || 3306
}

export default configVariables;