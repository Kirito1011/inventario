import express from "express";
import routesCategorias from "./routes/categorias.routes.js";

/**/
const app = express();

/* Setear un puerto a mi web server */
app.set("port", 5000);
/* routes */
app.use("/api/categorias", routesCategorias);
export default app;