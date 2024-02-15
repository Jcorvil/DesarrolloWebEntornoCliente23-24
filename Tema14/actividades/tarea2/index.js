import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
	"mongodb+srv://jcorvil600:bVjd65W6G6OAc9PH@cluster0.xe4vdla.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);

		const database = client.db("Tema14");
		const coleccion = database.collection("Tarea2");

		coleccion.insertOne(
			{
				nombre: document.getElementById("nombreInput").value,
				apellido: document.getElementById("apellidoInput").value,
			},
			(err, res) => {
				if (err) {
					console.log(err);
				} else {
					console.log(res);
					console.log("Documento insertado");
					document.getElementById("form").reset();
				}
			}
		);
	} finally {
		await client.close();
	}
}
run().catch(console.dir);
