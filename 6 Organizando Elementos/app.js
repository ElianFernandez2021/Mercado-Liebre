const express = require("express");
let app = express();
let path = require("path")//Sirve para traer el dirname y pasarle la ruta absoluta al sendFile
app.use(express.static("public"));//Sirve para poder mostrar las imagenes en el navegador


app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/home.html"))//El __dirname me trae la ubicación exacta en donde estoy 
   //                                                        y el "./views/home.html" a donde quiero llegar.
})

app.get("/register", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/register.html"))//El __dirname me trae la ubicación exacta en donde estoy 
   //                                                        y el "./views/home.html" a donde quiero llegar.
})

app.get("/login", (req,res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"))//El __dirname me trae la ubicación exacta en donde estoy 
   //                                                        y el "./views/home.html" a donde quiero llegar.
})



app.listen(3000, ()=>//app.listen Sirve para levantar el servidor como primer parametro recibe el numero del puerto
    console.log("------------------"),//y en el segundo una función que no es obligatoría
    console.log("Servidor levantado en:"),
    console.log("http://localhost:3030"),
    console.log("------------------")
    
    )