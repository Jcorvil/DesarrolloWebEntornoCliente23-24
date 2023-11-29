class Cesta {}

class Productos {
	constructor(id, nombre, cantidad, precio, imagen) {
		this.id = id;
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.precio = precio;
		this.imagen = imagen;
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

	mostrarProductos() {
		const tablaProductos = document.getElementById("tablaProductos");

		this.productos.forEach((producto) => {
			const tr = document.createElement("tr");
			tr.innerHTML = `
                <td><img src="${producto.imagen}" alt="${producto.nombre}" class="producto__foto"></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio} €</td>
                <td><input type="number" placeholder="Cantidad"></td>
                <td><button onclick="ContProductos.agregarALaCesta(${producto.id})">Añadir</button></td>`;
			productosBody.appendChild(tr);
		});
	}
}

const tienda = new Productos();
