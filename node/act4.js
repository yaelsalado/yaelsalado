import express from "express";

const app = express();

app.get("/nombre", async (req, res) => {
    const nombre = req.query.nombre;

    if (!nombre) {
        res.send("no me diste un nombre de artista");
        return;
    }

    const respuesta = await fetch(`https://www.theaudiodb.com/api/v1/json/123/search.php?s=${nombre}`);
    const data = await respuesta.json();
    res.json(data);

});

app.listen(3000, () => {
    console.log("ingresa el nombre del artista en la url, ejemplo: http://localhost:3000/nombre?nombre=Coldplay");
});