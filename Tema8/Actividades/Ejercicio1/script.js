// -------------------------Cesta-------------------------------
class Cesta {
	productosCesta = [];

	agregarCesta(producto) {
		this.productosCesta.push(producto);
		this.guardarEnLocalStorage();
	}

	actualizarCesta() {
		const tbodyCesta = document.getElementById("tbodyCesta");
		var precioTotal = 0;

		tbodyCesta.innerHTML = "";

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

			precioTotal += producto.subtotal;
		});

		document.getElementById("totalPrecio").value = precioTotal.toFixed(2);
		document.getElementById("totalIVA").value =
			precioTotal + precioTotal * (0.21).toFixed(2);
	}

	eliminarProducto(id) {
		for (let i = 0; i < this.productosCesta.length; i++) {
			if (this.productosCesta[i].id === id) {
				this.productosCesta.splice(i, 1);
				this.actualizarCesta();
				break;
			}
		}
	}

	guardarEnLocalStorage() {
		localStorage.setItem("cesta", JSON.stringify(this.productosCesta));
	}

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
				<input type="number" id="cantidad-${producto.id}" value="1">
				<button onclick="contProductos.agregarCesta(${producto.id})">Añadir</button>
			</div>
			`;
			tablaProductos.appendChild(tr);
		});
	}

	agregarCesta(id) {
		const producto = this.productos.find((p) => p.id === id);

		if (producto) {
			const prodExistente = this.cesta.productosCesta.find((p) => p.id === id);

			if (prodExistente) {
				prodExistente.cantidad += parseInt(
					document.getElementById(`cantidad-${id}`).value
				);
				prodExistente.subtotal = prodExistente.cantidad * prodExistente.precio;
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

	eliminarDeCesta(id) {
		this.cesta.eliminarProducto(id);
	}

	cargarCestaDesdeLocalStorage() {
		this.cesta.cargarDesdeLocalStorage();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	contProductos = new ContProductos();
	contProductos.mostrarProductos();

	contProductos.cargarCestaDesdeLocalStorage();
});
