// -------------------------Cesta-------------------------------
class Cesta {
	// Array que contiene los productos introducidos en la cesta
	productosCesta = [];

	// Función que introduce productos en la tabla y actualiza el JSON
	agregarCesta(producto) {
		this.productosCesta.push(producto);
		this.guardarEnLocalStorage();
	}

	// Función que se encarga de renderizas los productos en la cesta. Cada vez que se añade un producto,
	// se añade un <tr></tr> con varios <td></td>, cada uno con la información necesaria de cada objeto del
	// array
	actualizarCesta() {
		const tbodyCesta = document.getElementById("tbodyCesta");
		var precioTotal = 0;

		tbodyCesta.innerHTML = "";

		// Obtiene la información del producto y la introduce en varios <td></td>. Luego, actualiza el JSON
		this.productosCesta.forEach((producto) => {
			const tr = document.createElement("tr");
			tr.innerHTML = `
		  <td>${producto.id}</td>
		  <td>${producto.nombre}</td>
		  <td>${producto.cantidad}</td>
		  <td>${producto.precio} €</td>
		  <td>${producto.subtotal.toFixed(2)} €</td>
		  <td><button onclick="contProductos.eliminarDeCesta(${
				producto.id
			})">X</button></td>
		`;
			tbodyCesta.appendChild(tr);

			// Suma todos los subtotales de todos los productos en un único precio total
			precioTotal += producto.subtotal;
		});

		// Muestra el precio total obtenido con la suma de los subtotales y muestra el precio totalIVA
		document.getElementById("totalPrecio").value = precioTotal.toFixed(2);
		document.getElementById("totalIVA").value =
			precioTotal + precioTotal * (0.21).toFixed(2);

		this.guardarEnLocalStorage();
	}

	// Función que se encarga de eliminar un producto de la cesta. Recorre mediante un bucle todos los
	// elementos de la cesta y elimina el producto cuyo id coincida con el id que se le ha pasado y lo
	// elimina con un .splice(), luego, acualiza el JSON de la cesta.
	eliminarProducto(id) {
		for (let i = 0; i < this.productosCesta.length; i++) {
			if (this.productosCesta[i].id === id) {
				this.productosCesta.splice(i, 1);
				this.actualizarCesta();
				break;
			}
		}
		this.guardarEnLocalStorage();
	}

	// Guarda la información de la cesta en JSON
	guardarEnLocalStorage() {
		localStorage.setItem("cesta", JSON.stringify(this.productosCesta));
	}

	// Si detecta que existe una cesta guardada de nombre "cesta", la carga y la renderiza entera llamando
	// al método .actualizarCesta()
	cargarDesdeLocalStorage() {
		const cestaGuardada = localStorage.getItem("cesta");
		if (cestaGuardada) {
			this.productosCesta = JSON.parse(cestaGuardada);
			this.actualizarCesta();
		}
	}
}

// -------------------------Productos-------------------------------
class Productos {
	constructor(id, nombre, cantidad, precio, imagen) {
		this.id = id;
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.precio = precio;
		this.imagen = imagen;
	}
}

// -------------------------contProductos-------------------------------
class ContProductos {

	// Array de objetos que contiene la información de los productos (id, nombre, cantidad, precio e imagen)
	productos = [
		{
			id: 1,
			nombre: "Bolso",
			cantidad: 1,
			precio: 20,
			imagen: "https://source.unsplash.com/random/500x500?handbag",
		},
		{
			id: 2,
			nombre: "Móvil",
			cantidad: 1,
			precio: 120,
			imagen: "https://source.unsplash.com/random/500x500?smartphone",
		},
		{
			id: 3,
			nombre: "Taza",
			cantidad: 1,
			precio: 10,
			imagen: "https://source.unsplash.com/random/500x500?mug",
		},
		{
			id: 4,
			nombre: "Zapatos",
			cantidad: 1,
			precio: 50.5,
			imagen: "https://source.unsplash.com/random/500x500?shoes",
		},
		{
			id: 5,
			nombre: "Vestido",
			cantidad: 1,
			precio: 30,
			imagen: "https://source.unsplash.com/random/500x500?dress",
		},
		{
			id: 6,
			nombre: "Cámara",
			cantidad: 1,
			precio: 100,
			imagen: "https://source.unsplash.com/random/500x500?camera",
		},
	];

	cesta = new Cesta(this.productos);

	// Función que se encarga de renderizar los productos a la izquierda de la cesta con toda su información
	mostrarProductos() {
		const tablaProductos = document.getElementById("tablaProductos");
		tablaProductos.innerHTML = "";

		// Recorre el array de productos e inserta un <tr></tr> para cada producto encontrado. El <div></div> contiene
		// todas las etiquetas necesarias para renderizar la tabla correctamente.
		this.productos.forEach((producto) => {
			const tr = document.createElement("tr");
			tr.innerHTML = `
			<div id="productoEnTabla">
				<div><img src="${producto.imagen}" alt="${producto.nombre}" width="200" height="200" class="producto__foto"></div>
				<h3>${producto.nombre}</h3>
				<p>${producto.precio}€</p>
				<input type="number" id="cantidad-${producto.id}" value="1">
				<button onclick="contProductos.agregarCesta(${producto.id})">Añadir</button>
			</div>
			`;
			tablaProductos.appendChild(tr);
		});
	}

	// Función que se encarga de comprobar los productos en la cesta antes de introducir uno nuevo. Si se intenta
	// introducir un producto y detecta que su id ya está dentro de la cesta, aumenta la cantidad del producto en
	// su lugar. Si no encuentra la id, añade el producto nuevo.
	agregarCesta(id) {
		const producto = this.productos.find((p) => p.id === id);

		if (producto) {
			const prodExistente = this.cesta.productosCesta.find((p) => p.id === id);

			// Si el producto ya existe, modifica la cantidad con la cantidad introducida por el usuario.
			if (prodExistente) {
				prodExistente.cantidad += parseInt(
					document.getElementById(`cantidad-${id}`).value
				);
				prodExistente.subtotal = prodExistente.cantidad * prodExistente.precio;
			// Si el producto no existe, llama a cesta.agregarCesta(producto) para que introduzca el producto nuevo en la
			// cantidad introducida por el usuario.
			} else {
				producto.cantidad = parseInt(
					document.getElementById(`cantidad-${id}`).value
				);
				producto.subtotal = producto.cantidad * producto.precio;
				this.cesta.agregarCesta(producto);
			}

			this.cesta.actualizarCesta();
		}
	}

	// LLama al método de la clase Cesta que se encarga de borrar un producto seleccionado
	eliminarDeCesta(id) {
		this.cesta.eliminarProducto(id);
	}

	// Llama al método de la clase Cesta que se encarga de cargar el JSON de la cesta
	cargarCestaDesdeLocalStorage() {
		this.cesta.cargarDesdeLocalStorage();
	}
}


// Crea una instancia de "ContProductos", carga los productos con "contProductos.mostrarProductos();" y
// carga la cesta desde el JSON en caso de que haya guardado algo
document.addEventListener("DOMContentLoaded", () => {
	contProductos = new ContProductos();
	contProductos.mostrarProductos();

	contProductos.cargarCestaDesdeLocalStorage();
});
