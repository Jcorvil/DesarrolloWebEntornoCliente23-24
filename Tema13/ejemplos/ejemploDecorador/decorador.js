"use strict";
// Decoradores
// Modifica constructor de la clase
function decorClase(target) {
    return function () { console.log('Constructor modificado'); };
}
// Modifica método de la clase
function decorMetodo(target, propName, descriptor = {}) {
    descriptor.value = function () { console.log('Método modificado'); };
    return descriptor;
}
//@decorClase
class MiClase {
    constructor() {
        console.log('Constructor de clase');
    }
    //@decorMetodo
    get() { console.log('Método de clase'); }
    ;
}
var dat = new MiClase();
dat.get();
