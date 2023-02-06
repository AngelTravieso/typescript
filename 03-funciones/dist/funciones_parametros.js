"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parámetros obligatorios
function nombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
// Parámetros opcionales (parametro?tipo)
function hola(nombre, apellido) {
    if (apellido) {
        return `Hola ${nombre} ${apellido}`;
    }
    else {
        return nombre;
    }
}
// Parámetros por defecto
function nombreCompleto2(nombre, apellido, capitalizado = true) {
    if (capitalizado) {
        return `${capitalizar(nombre)} ${capitalizar(apellido)}`;
    }
    else {
        return `${nombre} ${apellido}`;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
let nombre = nombreCompleto("clark", "kent");
let nombre2 = hola("barry");
let nombre3 = nombreCompleto2("clark", "kent");
console.log(nombre);
console.log(nombre2);
console.log(nombre3);
