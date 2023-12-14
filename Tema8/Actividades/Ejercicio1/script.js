class Cesta {
	constructor() {
		this.productosCesta = [];
	}

	agregarCesta(producto) {
		this.productosCesta.push(producto);
	}

	actualizarCesta() {
		const tbodyCesta = document.getElementById("tbodyCesta");
		tbodyCesta.innerHTML = "";

		var precioTotal = 0;

		this.productosCesta.forEach((producto) => {
			const tr = document.createElement("tr");
			tr.innerHTML = `
				<td>${producto.id}</td>
				<td>${producto.nombre}</td>
				<td>${producto.cantidad}</td>
				<td>${producto.precio} €</td>
				<td>${producto.subtotal} €</td>
			`;
			tbodyCesta.appendChild(tr);

			precioTotal += producto.subtotal;
		});
	}
}

class Productos {
	constructor(id, nombre, cantidad, precio, imagen) {
		this.id = id;
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.precio = precio;
		this.imagen = imagen;
	}

	calcularSubtotal() {
		return this.cantidad * this.precio;
	}
}

class ContProductos {
	productos = [
		{
			id: 1,
			nombre: "Bolso",
			cantidad: 0,
			precio: 20,
			imagen: "https://source.unsplash.com/random/500x500?handbag",
		},
		{
			id: 2,
			nombre: "Móvil",
			cantidad: 0,
			precio: 120,
			imagen: "https://source.unsplash.com/random/500x500?smartphone",
		},
		{
			id: 3,
			nombre: "Taza",
			cantidad: 0,
			precio: 10,
			imagen: "https://source.unsplash.com/random/500x500?mug",
		},
		{
			id: 4,
			nombre: "Zapatos",
			cantidad: 0,
			precio: 50.5,
			imagen: "https://source.unsplash.com/random/500x500?shoes",
		},
		{
			id: 5,
			nombre: "Vestido",
			cantidad: 0,
			precio: 30,
			imagen: "https://source.unsplash.com/random/500x500?dress",
		},
		{
			id: 6,
			nombre: "Cámara",
			cantidad: 0,
			precio: 100,
			imagen: "https://source.unsplash.com/random/500x500?camera",
		},
	];

	cesta = new Cesta();

	mostrarProductos() {
		const tablaProductos = document.getElementById("tablaProductos");
		tablaProductos.innerHTML = "";

		this.productos.forEach((producto) => {
			const tr = document.createElement("tr");
			tr.innerHTML = `
			<div id="productoEnTabla">
				<div><img src="${producto.imagen}" alt="${producto.nombre}" width="200" height="200" class="producto__foto"></div>
				<h3>${producto.nombre}</h3>
				<p>${producto.precio}€</p>
				<input type="number" id="cantidad-${producto.id}">
				<button onclick="(new ContProductos()).agregarCesta(${producto.id})">Añadir</button>
			</div>
			`;
			tablaProductos.appendChild(tr);
		});
	}

	agregarCesta(id) {
		const producto = this.productos.find((p) => p.id === id);

		if (producto) {
			producto.cantidad = parseInt(
				document.getElementById(`cantidad-${id}`).value
			);
			this.cesta.agregarCesta(producto);
			this.cesta.actualizarCesta();
		}
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const contProductos = new ContProductos();
	contProductos.mostrarProductos();
});
