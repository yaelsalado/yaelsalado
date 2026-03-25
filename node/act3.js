import express from "express";
const app = express();

app.get("/mascota", (req, res) => {
    res.json({
        nombre: "Max",
        tipo: "Perro",
        edad: 2
    });
});

app.listen(3000, () => {
});