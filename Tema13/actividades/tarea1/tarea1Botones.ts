interface GenBotones {
    add(): void;
    rest(): void;
}


class Boton {
    constructor(private contador: number) {
        $('<button/>').text(+ this.contador).on('click', () => {
            alert("Hola desde " + this.contador);
        }).appendTo('body');
    }
}

class GrupoBot implements GenBotones {
    private contador: number = 0;

    add(): void {
        this.contador++;
        new Boton(this.contador);
    }

    rest(): void {
        if (this.contador > 0) {
            $('body').children().last().remove();
            this.contador--;
        }
    }
}


let grupoBotones = new GrupoBot();

$(function () {
    $('#bot1').on('click', () => {
        grupoBotones.add();
    });

    $('#bot2').on('click', () => {
        grupoBotones.rest();
    });
});
