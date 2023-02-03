"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos
let batman = "Bruce";
let superman = "Clark";
let existe = false;
// Tuplas
let parejaHeroes = [batman, superman];
let villano = ["Lex Lutor", 5, true];
// Arreglos
let aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
    Fuerza[Fuerza["batman"] = 1] = "batman";
    Fuerza[Fuerza["flash"] = 5] = "flash";
    Fuerza[Fuerza["superman"] = 100] = "superman";
})(Fuerza || (Fuerza = {}));
let fuerzaFlash = Fuerza.flash;
let fuerzaSuperman = Fuerza.superman;
let fuerzaBatman = Fuerza.batman;
let fuerzaAcuaman = Fuerza.acuaman;
// Retorno de funciones
function actilet_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
let poder = "100";
let largoDelPoder = poder.length;
console.log(largoDelPoder);
