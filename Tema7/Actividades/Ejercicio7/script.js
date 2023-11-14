class Vehiculo {
	constructor() {
		this.validarMatricula();
		this.cambiarTitDNI();
	}

	validarMatricula() {
		document
			.getElementById("inputMatricula")
			.addEventListener("input", function () {
				if (this.validity.patternMismatch) {
					this.setCustomValidity("Ingrese una matrícula válida (0000XXX)");
				} else {
					this.setCustomValidity("");
				}
			});
	}

	cambiarTitDNI() {
		var dniInput = document.getElementById("inputDNI");
		var dniLabel = document.getElementById("labelDNI");

		dniInput.addEventListener("focus", function () {
			dniLabel.textContent = "Editando DNI...";
		});

		dniInput.addEventListener("blur", function () {
			dniLabel.textContent = "DNI";
		});
	}
}

var vehiculo = new Vehiculo();

document.getElementById("inputDNI").addEventListener("focus", function () {
	vehiculo.cambiarTitDNI();
});

document.getElementById("inputDNI").addEventListener("blur", function () {
	vehiculo.cambiarTitDNI();
});
