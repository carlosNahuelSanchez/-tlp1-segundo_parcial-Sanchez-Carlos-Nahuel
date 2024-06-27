const express = require('express');
app = express()
libros = require("./database")

app.use(express.json())

const idGenerado = new Date().getTime()

app.get("/", (req,res) => {
    res.json(libros)
})

app.get("/:id", (req,res) => {
    id = req.params.id
    const index = libros.findIndex(libro => libro.id == id)
    res.json(libros[index])
})

app.post("/",(req,res)=>{
    const datajson = {
        id: idGenerado,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    }
    libros.push(datajson)
    res.send("Libro Agregado")
})

app.put("/:id", (req,res)=>{
    id = req.params.id
    const datajson = {
        id: idGenerado,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    }
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index,1,datajson)
    res.send("Libro Actualizado")
})

app.delete("/:id", (req,res)=>{
    id = req.params.id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index,1)
    res.send("Libro Eliminado")
})



app.listen(3000, () => {console.log("Server Running in port", 3000)})