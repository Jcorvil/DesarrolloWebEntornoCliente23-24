function pregunta (){
    /*
        Este script pregunta al usuario cuantos hijos tiene y le pide que introduzca un número.
        Si es válido, devuelve un mensaje con la cantidad de hijos introducida.
    */
    var mensaje
    var opcion = prompt("¿Cuantos hijos tienes?") //Prompt que realiza la pregunta
    
    if (opcion != Number || opcion == ""){          //Si no se introduce nada, o se introduce algo que no sea un número no devuelve nada.
        mensaje = "Introduce un valor válido."
    } else {
        mensaje = "Tienes " + opcion + " hijo(s)";  //Si se introduce un número válido, devuelve el mensaje "Tienes X hijo(s)"
    }
    alert(mensaje);
}