
// Parametros obligatorios
function nombreCompleto(nombre:string, apellido: string) : string {
    return `${nombre} ${apellido}`;
}

// Parametros opcionales (parametro?tipo)
function hola(nombre:string, apellido?:string): string {
    if(apellido) {
        return `Hola ${nombre} ${apellido}`;
    } else {
        return nombre;
    }
}

let nombre = nombreCompleto("clark","kent");

let nombre2 = hola("barry");

console.log(nombre);
console.log(nombre2);
