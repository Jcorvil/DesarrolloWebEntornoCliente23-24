import express from "express";
import path from "path";
const app = express();
const router = express.Router();
var __dirname = path.resolve();

router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/json", function (req, res) {
	res.json({ nombre: "Joselito", apellidos: "Pérez" });
});

app.use("/", router);
app.use(express.static(__dirname));
app.listen(3000);
console.log("Escuchando en puerto 3000");
