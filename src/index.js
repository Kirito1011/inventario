import app from "./app.js";
import GlobalVariables from "./config.js";

/* Function expression*/
const main = () =>{
    //llamado a las variables locales modo de metodo
    const env = new GlobalVariables();

    //Creacion del puerto
    app.listen(env.PORT);
    console.log("Server running on port ", env.PORT);
}

main();