class Vehiculo {
	constructor() {
		this.validarMatricula();
		this.cambiarTitDNI();
		this.fEvento();
	}

	validarMatricula() {
		var matricula = document.getElementById("inputMatricula");
		if (matricula.validity.patternMismatch) {
			matricula.setCustomValidity("Ingrese una matrícula válida (0000XXX)");
		} else {
			matricula.setCustomValidity("");
		}
	}

	cambiarTitDNI() {
		var dniInput = document.getElementById("inputDNI");
		var dniLabel = document.getElementById("labelDNI");

		dniInput.addEventListener("focus", function () {
			dniLabel.textContent = "Editando DNI...";
		});

		dniInput.addEventListener("blur", function () {
			dniLabel.textContent = "DNI:";
		});
	}

	fEvento() {
        document.getElementById("inputMatricula").addEventListener("keyup", this.validarMatricula.bind(this));
        document.getElementById("inputDNI").addEventListener("keyup", this.cambiarTitDNI.bind(this));
    }
}

var vehiculo = new Vehiculo();
