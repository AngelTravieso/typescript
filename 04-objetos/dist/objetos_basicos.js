"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//nombreObjeto:tipo
let flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr rápido", "Viajar por el tiemp"],
    getNombre() {
        return this.nombre;
    }
};
// Permite reasignar el objeto, pero debe ser con todos sus propiedades
flash = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Volar"],
    getNombre() {
        return this.nombre;
    },
};
flash.getNombre();
