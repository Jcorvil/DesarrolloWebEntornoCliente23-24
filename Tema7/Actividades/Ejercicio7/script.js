class Vehiculo {

    constructor() {
        this.validarMatricula();
        this.cambiarTitDNI();
    }

	validarMatricula() {
		var matricula = document.getElementById("inputMatricula");

		if (matricula.validity.typeMismatch) {
			matricula.setCustomValidity("Ingrese una matrícula válida (0000XXX)");
		} else {
			matricula.setCustomValidity("");
		}
	}

	cambiarTitDNI() {
		var titular_dni = document.getElementById("titular-dni");
	}
}

var vehiculo = new Vehiculo();


matricula.addEventListener("keyup", this.#validarMatricula.bind(this));
dni.addEventListener("keyup", this.#cambiarTitDNI.bind(this));