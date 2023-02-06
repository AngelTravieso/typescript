"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parámetros rest
function nombreCompleto(nombre, ...losDemasParametros) {
    return `${nombre} ${losDemasParametros.join(" ")} `;
}
let superman = nombreCompleto("Clark", "Joseph", "Kent");
let ironman = nombreCompleto("Anthony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironman);
