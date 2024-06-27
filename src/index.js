//Importaciones
const express = require('express');
app = express()
libros = require("./database")

//Middlewares
app.use(express.json())

//Se crea el ID automatico
const idGenerado = new Date().getTime()

//Mostrar Libros
app.get("/", (req, res) => {
    res.json(libros)
})

//Mostrar libros por ID
app.get("/:id", (req, res) => {
    id = req.params.id
    const index = libros.findIndex(libro => libro.id == id)
    if (index == -1) {
        res.send("El libro no existe")
    }
    else {
        res.json(libros[index])
    }
})

//Publicar Libros
app.post("/", (req, res) => {
    const datajson = {
        id: idGenerado,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    }
    const titleBook = req.body.title

    const indexTitle = libros.findIndex(libro => libro.title == titleBook)
    if (indexTitle == -1) {
        libros.push(datajson)
        res.send("Libro Agregado")
    }
    else {
        res.send("El libro ya existe")
    }
})

//Actualizaar Libros
app.put("/:id", (req, res) => {
    id = req.params.id
    const datajson = {
        id: id,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    }
    const index = libros.findIndex(libro => libro.id == id)
    if (index == -1) {
        res.send("El libro que quiere actualizar no existe")
    }
    else {
        libros.splice(index, 1, datajson)
        res.send("Libro Actualizado")
    }
})

//Borrar Libros
app.delete("/:id", (req, res) => {
    id = req.params.id
    const index = libros.findIndex(libro => libro.id == id)
    if (index == -1) {
        res.send("El libro que quiere eliminar no existe")
    }
    else {
        libros.splice(index, 1)
        res.send("Libro Eliminado")
    }
    
})

//Se inicia el servidor
app.listen(3000, () => { console.log("Server Running in port", 3000) })