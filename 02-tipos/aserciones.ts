let cualquierValor:any = 'Cualquier cosa';

// Casting en ts
let largoString:number = (<string>cualquierValor).length;

console.log(largoString);