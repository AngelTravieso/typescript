// any puede ser cualquier cosa

let vengador:any = 'Superman';
let existe:any;
let derrotas:any;

vengador = 'Dr. Strange';
console.log(vengador.charAt(0));

vengador = 150.5555;
console.log(vengador.toFixed(2));

vengador = true;
console.log(vengador);

console.log(existe);
console.log(derrotas);

export {};
