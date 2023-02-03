"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Cuando sabemos el largo del arreglo podemos definir tipos
let heroes = ['Dr. Strange', 100, true];
// error
// heroes[0] = 123;
// heroes[1] = "123";
heroes.push(true);
