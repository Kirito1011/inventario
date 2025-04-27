import express from "express";
import cors from "cors";
import { pool } from "./db/db.js";
import routesCategorias from "./routes/categorias.routes.js";

//creo una lista en donde guardo los puertos que tienen acceso a mi API
const whiteList = ['http://localhost:3000']

//ejecutamos express
const app = express();

//con este metodo recive los datos, los convierte en json o objeto de javaScript y luego se los pasa a la ruta
app.use(express.json())

//cors es para limitar el acceso de las urls o host bases de http y dar acceso a las peticiones que este nos mande
app.use(cors())
//cors limitando el acceso de los puertos con su metodo de origen
app.use(cors({ origin: whiteList }))

/* routes */
app.use("/api/categorias", routesCategorias);

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'endpoint Not found'
    })
})

export default app;