// type es reservado en TS
type Heroe = { // definicion de tipo
    nombre: string,
    edad: number,
    poderes: string[],
    getNombre: () => string,
}

// multiples tipos permitidos
let loquesea: string | number | Heroe = "Angel";
loquesea = 10;

//nombreObjeto:tipo
let flash: Heroe = {
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

let superman: Heroe = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Volar"],
    getNombre() {
        return this.nombre;
    },
};


flash.getNombre();


export { };