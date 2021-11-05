// funcion retorna valores, funcion pura

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

console.log(sumar(1, 2));
console.log(sumar(2, 3));
console.log(sumar(4, 5));
console.log(sumar(6, 7));

console.log(restar(10, 2));
console.log(restar(20, 3));
console.log(restar(40, 5));
console.log(restar(60, 7));

// funcion que solo ejecuta comandos
function calculadora() {
    let a = parseFloat(prompt('Ingresa el primer numero'));
    let b = parseFloat(prompt('Ingresa el segundo numero'));

    console.log('La suma de a + b = ', sumar(a, b));
    console.log('La resta de a - b = ', restar(a, b));
}

calculadora();

// con esto se protege la funcion para ejecutar localmente
(function (){
    function calculadora() {
        let a = parseFloat(prompt('Ingresa el primer numero'));
        let b = parseFloat(prompt('Ingresa el segundo numero'));
    
        console.log('La suma de a + b = ', sumar(a, b));
        console.log('La resta de a - b = ', restar(a, b));
    }
    
    calculadora();
})()