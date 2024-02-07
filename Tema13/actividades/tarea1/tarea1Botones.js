"use strict";
class Boton {
    constructor(contador) {
        this.contador = contador;
        $('<button/>').text(+this.contador).on('click', () => {
            alert("Hola desde " + this.contador);
        }).appendTo('body');
    }
}
class GrupoBot {
    constructor() {
        this.contador = 0;
    }
    add() {
        this.contador++;
        new Boton(this.contador);
    }
    rest() {
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
