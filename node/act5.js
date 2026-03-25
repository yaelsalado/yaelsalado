//http nos sirve para crear un servidor 
import http from "http";
//fs nos sirve para leer y escribir archivos
import fs from "fs";

//Esta función deberá mostrar una página HTML
//con la bienvenida a tu proyecto

function darBienvenida(req, res) {
    fs.readFile("bienvenida.html", "utf8", (error, data) => {
        if (error) {
            //Error 500 significa que hubo un error en el servidor
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Oh no!!!!");
            return;
        }
        //Estado 200 significa que todo salió bien
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function getMascotas(req, res) {
    //Esto representa un objeto JSON de una mascota
    const mascotas = [
    {
        nombre: "Pikachu",
        color: "Amarillo",
    },

    {
        nombre: "Bulbasaur",
        color: "Verde",
    }

    ]
    res.writeHead(200, { "Content-Type": "application/json" });

    //convierte objetos o arreglos a texto
    res.end(JSON.stringify(mascotas));
}

function mostrarPerfil(req, res) {
    fs.readFile("perfil.html", "utf8", (error, data) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Oh no!!!!");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function mostrarMascotas(req, res) {
    fs.readFile("mascotas.html", "utf8", (error, data) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end("Oh no!!!!")
            return
        }
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end(data)
    })
}

function mostrarAdoptantes(req, res) {
    //Construye una página básica adpotantes.html
    fs.readFile("adoptantes.html", "utf8", (error, data) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Oh no!!!!");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

//Esta función deberá enviar un json con los datos de las adoptantes
function getAdoptantes(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    const adoptantes = [
        {
            nombre: "Yael",
            edad: 22,
            ciudad: "Gdl"
        },

        {
            nombre: "Karla",
            edad: 30,
            ciudad: "CDMX"
        }
    ]
    res.end(JSON.stringify(adoptantes))
}

function manejarRuta404(req, res) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(" (._.) no encontré lo que buscas");
}

function mostrarEquipo(req, res){
    fs.readFile("equipo.html", "utf8", (error, data) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Oh no!!!!");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function mostrarOpinion(req, res){
    fs.readFile("opinion.html", "utf8", (error, data) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Oh no!!!!");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

//Documentación de createServer: https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const servidor = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        darBienvenida(req, res);
    } else if (url === "/api/mascotas") {
        getMascotas(req, res);
    } else if (url === "/api/adoptantes") {
        getAdoptantes(req, res);
    } else if (url === "/mascotas") {
        mostrarMascotas(req, res);
    } else if (url === "/adoptantes") {
        mostrarAdoptantes(req, res);
    } else if (url === "/equipo") {
        mostrarEquipo(req, res);
    } else if (url === "/opinion") {
        mostrarOpinion(req, res);
    } else {
        manejarRuta404(req, res);
    }
});

const puerto = 1984;
servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});

