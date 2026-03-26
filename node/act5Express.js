import express from "express";
import path from "path";

const app = express();
app.use(express.static("public"));

const mascotas = [
    { nombre: "Luna", tipo: "perro", edad: 3, dueño: "Yael" },
    { nombre: "Max", tipo: "gato", edad: 5, dueño: "Ana" },
    { nombre: "Maya", tipo: "perro", edad: 2, dueño: "Carlos" }
]

const adoptantes = [
    {nombre: "Ana", edad: 30, ciudad: "CDMX"},
    {nombre: "Luis", edad: 25, ciudad: "Gdl"}
]

app.get("/bienvenida", (req, res) => {
    res.sendFile(path.resolve("bienvenida.html"));
});

app.get("/api/mascotas", (req, res) => {
    res.json(mascotas);
});

app.get("/api/adoptantes", (req, res) => {
    res.json(adoptantes);
});

app.get("/mascotas", (req, res) => {
    res.sendFile(path.resolve("mascotas.html"));
});

app.get("/mascotas/:nombre", (req, res) => {
    const nombre = req.params.nombre
    const mascota = mascotas.find(m => m.nombre === nombre)

    if (!mascota) {
        res.status(404).json({ error: `No existe una mascota llamada ${nombre}` })
        return
    }

    res.json(mascota)
})

app.get("/adoptantes", (req, res) => {
    res.sendFile(path.resolve("adoptantes.html"));
});

app.get("/equipo", (req, res) => {
    res.sendFile(path.resolve("equipo.html"));
});

app.get("/opinion", (req, res) => {
    res.sendFile(path.resolve("opinion.html"));
});

app.delete("/api/adoptantes/:nombre", (req, res) => {
    const nombre = req.params.nombre
    res.json({ mensaje: `Adoptante ${nombre} eliminado correctamente` })
})


app.use((req, res) => {
    res.status(404).send(" (._.) no encontré lo que buscas");
});


app.listen(2003, () => {
    console.log("Servidor escuchando en el puerto 2003");
});

// Es mejor usar express para el manejo de rutas ya que si lo comparamos con act5.js, el código
// es más sencillo de implementar y leer