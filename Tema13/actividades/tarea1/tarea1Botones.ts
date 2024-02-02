interface GenBotones {
    add(): void;
    rest(): void;
}


// Crea los botones
class Boton {
    constructor() { }
}

class GrupoBot implements GenBotones {
    private contador: number = 0;

    add(): void {
        this.contador++;
        new Boton;
    }

    rest(): void {

    }

}