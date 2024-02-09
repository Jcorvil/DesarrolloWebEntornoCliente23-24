import express from "express";
import path from "path";
const app = express();
const router = express.Router();
var __dirname = path.resolve(); //Resuelve y adapta para módulos ES6
router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

// Devuelve el contenido de pag1.html
router.get("/pag1", function (req, res) {
	res.sendFile(path.join(__dirname + "/pag1.html"));
});

// Devuelve el contenido de pag2.html
router.get("/pag2", function (req, res) {
	res.sendFile(path.join(__dirname + "/pag2.html"));
});

app.use("/", router);
app.use(express.static(__dirname)); //IMPORTANTE carga archivos js,css, etc.., cargados en los html desde directorio
app.listen(3000);
console.log("Escuchando en puerto 3000");
