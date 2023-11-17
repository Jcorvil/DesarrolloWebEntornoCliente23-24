class Login {
	#usuarios = [
		{ user: Usuario1, pass: "Abcdefg1" },
		{ user: Usuario2, pass: "1234567A" },
		{ user: Usuario3, pass: "1A2q3g4p" },
	];


    validacion() {
        var patron = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$";
        var user = document.getElementById("user"); 
        var pass = document.getElementById("pass"); 

        if (patron.test(pass.value)) {

        }


    
    }
    
}
