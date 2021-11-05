/* Que es var */

// let
let name = 'JUAN';
let zaca;
let edad = 32;
console.log(name);
console.log(edad);

zaca = 'CUALQUIER VALOR';
console.log(zaca);

// tipo const
const PI = 3.14;
console.log(PI);
// PI = 2; // Dara error

// TIPOS DE DATOS
let user = 'Juan'; // string
let age = 35; // number
let isMan = true;
let isMan2 = false; // boolean - verdadero o falso
let account = null; // Null
let married; // undefinied
let hash = Symbol('123456'); // Symbol -- valor unico
let alumno = {
  sexo: 'm',
  edad: 36,
  grado: 5,
}; // object

console.log(user, typeof user)
console.log(age, typeof age)
console.log(isMan, typeof isMan)
console.log(isMan2, typeof isMan2)
console.log(account, typeof account)
console.log(married, typeof married)
console.log(hash, typeof hash)
console.log(alumno, typeof alumno)

/* CAMBIAR LOS TIPOS DE DATOS */
let age2 = 30;
let age3 = '40';
console.log(age2, typeof age2);
console.log(age2, String(age2).replace('30', 200));
console.log(age2, typeof Boolean(age2));
console.log(age3, Number(age3).toFixed(2));