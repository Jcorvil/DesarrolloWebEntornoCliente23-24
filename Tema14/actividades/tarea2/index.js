document.addEventListener("DOMContentLoaded", () => {
	let nombreInput = document.getElementById("nombreInput");
	let apellidoInput = document.getElementById("apellidoInput");
	let enviarBtn = document.getElementById("enviarBtn");
	let cuerpoTabla = document.getElementById("cuerpoTabla");

	async function obtenerDocumentos() {
		let response = await fetch("/mostrarDatos");
		let documentos = await response.json();
		actualizarTabla(documentos);
	}

	// enviarDocumento obtiene los datos introducidos (que se encuentran en addDatos) y luego
	// los envía al método actualizarTabla para mostrarlos.
	async function enviarDocumento() {
		let nombre = nombreInput.value;
		let apellido = apellidoInput.value;
		if (nombre && apellido) {
			try {
				await fetch("/addDatos", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ nombre, apellido }),
				});
				nombreInput.value = "";
				apellidoInput.value = "";
				obtenerDocumentos();
			} catch (error) {
				console.error("Error al enviar documento:", error);
			}
		} else {
			alert("Por favor, complete ambos campos.");
		}
	}

	// Obtiene los datos de la base de datos junto con los nuevos datos introducidos por los input de
	// nombre y apellido, luego recorre todos los datos y los muestra en la tabla uno a uno.
	async function actualizarTabla(documentos) {
		cuerpoTabla.innerHTML = "";
		documentos.forEach((documento) => {
			let fila = document.createElement("tr");
			let nombreCelda = document.createElement("td");
			let apellidoCelda = document.createElement("td");
			nombreCelda.textContent = documento.nombre;
			apellidoCelda.textContent = documento.apellido;
			fila.appendChild(nombreCelda);
			fila.appendChild(apellidoCelda);
			cuerpoTabla.appendChild(fila);
		});
	}

	// Al enviar los datos por los input, se activa "enviarDocumento"
	enviarBtn.addEventListener("click", enviarDocumento);

	obtenerDocumentos();
});
