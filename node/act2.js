import express from "express";
const app = express();

app.get("/saludo", (req, res) => {
    const nombre = req.query.nombre; 

    if (nombre) {
        res.send(`Hola, ${nombre}! Bienvenido al servidor.`);
    } else {
        res.send("Hola! No me dijiste tu nombre.");
    }
});
