// leeHtml.js
import { createServer } from "http";
import * as fs from "fs";
createServer(function (req, res) {
	// readfile

	fs.readFile("demo1.html", function (err, data) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		res.end();
	});

	// writefile. Crea un archivo con el contenido especificado. El contenido puede ser una variable

	fs.writeFile("prueba1.txt", "Contenido….", function (err) {
		if (err) throw err;
		console.log("Creado!");
	});

	// appendFile. Añade contenido a un archivo existente.

	fs.appendFile("prueba1.txt", "\n más contenido….", function (err) {
		if (err) throw err;
		console.log("Añadido!");
	});

	// unlink. Elimina un archivo.

	// fs.unlink("prueba1.txt", function (err) {
	// 	if (err) throw err;
	// 	console.log("Archivo borrado!");
	// });

	// rename. Cambia el nombre a un archivo
	fs.rename("prueba1.txt", "prueba2.txt", function (err) {
		if (err) throw err;
		console.log("Archivo renombrado!");
	});
}).listen(8080);
