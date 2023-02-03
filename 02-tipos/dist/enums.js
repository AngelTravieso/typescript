"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let audio = Volumen.medio;
console.log(audio);
// imprimir enumeracion completa
console.log(Volumen);
// obtener key
console.log(Volumen[5]);
