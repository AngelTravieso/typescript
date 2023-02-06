"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return `I'm ${nombre}`;
}
function salvarMundo() {
    console.log("El mundo está salvado!");
}
// reglas para la variable tipo funcion
// => retorno
// let miFuncion: (a:number, b:number) => number;
// let miFuncion: (a:string) => string;
let miFuncion;
// miFuncion = 10;
// miFuncion = sumar;
// console.log(miFuncion(5, 5));
// miFuncion = saludar;
// console.log(miFuncion("Batman"));
miFuncion = salvarMundo;
miFuncion();
