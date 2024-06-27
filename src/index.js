const express = require('express');
app = express()
libros = require("./database")

app.use(express.json())

app.get("/", (req,res) => {
    res.json(libros)
})
app.get("/:id", (req,res) => {
    idLibro = req.params.id
    res.json(libros[idLibro-1])
})

app.post("/",(req,res)=>{
    const {idLibro, nombre} = req.body
    const datajson = {
        idLibro: req.body.idLibro,
        nombre: req.body.nombre
    }
    libros.push(datajson)
    res.send("Libro Agregado")
})

app.listen(3000, () => {console.log("Server Running in port", 3000)})