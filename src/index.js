import app from "./app.js";

/* Function expression*/
const main = () =>{
    app.listen(app.get("port"))
    console.log(`The company's web server is runing on port: ${app.get("port")}`);
}

main();