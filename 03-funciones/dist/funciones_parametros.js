"use strict";
// Parametros obligatorios
function nombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
// Parametros opcionales (parametro?tipo)
function hola(nombre, apellido) {
    if (apellido) {
        return `Hola ${nombre} ${apellido}`;
    }
    else {
        return nombre;
    }
}
let nombre = nombreCompleto("clark", "kent");
let nombre2 = hola("barry");
console.log(nombre);
console.log(nombre2);
