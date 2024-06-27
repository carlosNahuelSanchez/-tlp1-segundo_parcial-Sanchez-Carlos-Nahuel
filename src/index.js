const express = require('express');
app = express()
libros = require("./database")

app.use(express.json())

app.get("/", (req,res) => {
    res.json(libros)
})
app.get("/:id", (req,res) => {
    id = req.params.id
    res.json(libros[id-1])
})

app.post("/",(req,res)=>{
    const datajson = {
        id: req.body.id,
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
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    }
    libros.splice(id-1,1,datajson)
    res.send("Libro Actualizado")
})

app.delete("/:id", (req,res)=>{
    id = req.params.id
    libros.splice(id-1,1)
    res.send("Libro Eliminado")
})

app.listen(3000, () => {console.log("Server Running in port", 3000)})