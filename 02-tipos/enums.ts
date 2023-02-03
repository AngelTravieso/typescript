enum Volumen {
    min = 1,
    medio = 5,
    max = 10
}

let audio:number = Volumen.medio;

console.log(audio);

// imprimir enumeracion completa
console.log(Volumen);

// obtener key
console.log(Volumen[5]);

export {};
