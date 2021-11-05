let variableUno = 10;
let variableDos = 20;
let variableTres = 30;
let variableCuatro = 40;

console.log(variableUno);
console.log(variableDos);
console.log('age3', age3);
age3 = '33 Juan';
console.log('age3', age3);

let nameOneGlobal = 'FN GLOBAL';

function fnOne() {
    let nameOne = 'FN ONE JUAN';
    let nameTwo = 36;

    console.log('nameOne', nameOne, nameTwo);
    console.log('nameOneGlobal en fnOne', nameOneGlobal)
}

function fnTwo() {
    let nameOne = 'FN TWO ANDRES';
    let nameTwo = 35;

    console.log('nameOne', nameOne, nameTwo);
    console.log('nameOneGlobal en fnTwo', nameOneGlobal)
}

fnOne();
fnTwo();
console.log('nameOneGlobal', nameOneGlobal);

// calculadora();