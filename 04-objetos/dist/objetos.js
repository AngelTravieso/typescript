"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// multiples tipos permitidos
let loquesea = "Angel";
loquesea = 10;
let cosa = 123;
if (typeof cosa === "number") {
    console.log("Cosa, es un numero");
}
else {
    console.log("Este codigo, indica que no es un string");
}
//nombreObjeto:tipo
let flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr rápido", "Viajar por el tiempo"],
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
let superman = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Volar"],
    getNombre() {
        return this.nombre;
    },
};
flash.getNombre();
