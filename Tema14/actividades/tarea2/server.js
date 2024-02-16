import { MongoClient } from "mongodb";
import express from "express";
import path from "path";

const app = express();

const uri =
	"mongodb+srv://jcorvil600:bVjd65W6G6OAc9PH@cluster0.xe4vdla.mongodb.net/Tema14?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.use(express.json());

const router = express.Router();
var __dirname = path.resolve();

router.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

// Obtiene por POST un JSON con los datos de los input y los introduce en la base de datos
app.post("/addDatos", async (req, res) => {
	try {
		const { nombre, apellido } = req.body;
		const db = client.db();
		const collection = db.collection("Tarea2");
		await collection.insertOne({ nombre, apellido });
		res.send("Documento añadido correctamente");
	} catch (err) {
		console.error("Error: ", err);
		res.send("Error al añadir documento");
	}
});

// Obtiene por GET como un JSON todos los datos que tiene actualmente la base de datos
app.get("/mostrarDatos", async (req, res) => {
	try {
		const db = client.db();
		const collection = db.collection("Tarea2");
		const documents = await collection.find({}).toArray();
		res.json(documents);
	} catch (err) {
		console.error("Error: ", err);
		res.send("Error al obtener documentos");
	}
});

app.use("/", router);
app.use(express.static(__dirname));

app.listen(3000, () => {
	console.log("Escuchando en puerto 3000");
});
