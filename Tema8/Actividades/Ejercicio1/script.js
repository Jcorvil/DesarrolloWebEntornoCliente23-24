class Cesta {
	constructor(){
		this.productosCesta = [];
	}

	agregarCesta(producto) {
		this.productosCesta.push(producto);
		this.actualizarCesta();
	}

	actualizarCesta(){
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
		})
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
		tablaProductos.innerHTML = "";

		this.productos.forEach((producto) => {
			const tr = document.createElement("tr");
			tr.innerHTML = `
                <td><img src="${producto.imagen}" alt="${producto.nombre}" width="200" height="200" class="producto__foto"></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio} €</td>
                <td><input type="number" id="cantidad-${producto.id}"></td>
                <td><button onclick="agregarCesta(${producto.id})">Añadir</button></td>`;
			tablaProductos.appendChild(tr);
		});

		const cesta = new Cesta();

		window.agregarCesta = (id) => {
			const cantidadInput = document.getElementById(`cantidad-${id}`);
			const cantidad = parseInt(cantidadInput.value, 10) || 0;

			const producto = this.listaProductos.find((p) => p.id === id);

			if (producto && cantidad > 0) {
				producto.cantidad = cantidad;
				producto.subtotal = cantidad * producto.precio;
				cesta.agregarCesta(producto);
			}
		};
	}
}

const contProductos = new ContProductos();
contProductos.mostrarProductos();
