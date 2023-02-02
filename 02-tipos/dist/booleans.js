"use strict";
// nombre:tipo = valor
let esSuperman = true;
// Sin asignar valor
let esBatman;
// TS es inteligente e infiere el tipo
let esAcuaman = true;
if (esSuperman) {
    console.log('Estamos salvados!!');
}
else {
    console.log('Oops oh!');
}
esSuperman = convertirClark();
if (esSuperman) {
    console.log('Estamos salvados!!');
}
else {
    console.log('Oops oh!');
}
function convertirClark() {
    return false;
}
