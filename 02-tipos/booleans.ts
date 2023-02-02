// nombre:tipo = valor
let esSuperman:boolean = true

// Sin asignar valor
let esBatman:boolean;

// TS es inteligente e infiere el tipo
let esAcuaman:Boolean = true

if(esSuperman) {
    console.log('Estamos salvados!!');
} else {
    console.log('Oops oh!')
}

esSuperman = convertirClark();

if(esSuperman) {
    console.log('Estamos salvados!!');
} else {
    console.log('Oops oh!')
}

function convertirClark() {
    return false;
}

