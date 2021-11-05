function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function potencia(a, b) {
    return a ** b;
}

console.log(sumar(6, 4));
console.log(restar(6, 4));
console.log(multiplicar(6, 4));
console.log(dividir(6, 4));
console.log(potencia(6, 4));

function calculadora(){
    let a = parseFloat(prompt('Ingresa el primer numero'));
    let b = parseFloat(prompt('Ingresa el segundo numero'));

    console.log('La suma de a + b = ', sumar(a, b));
    console.log('La resta de a - b = ', restar(a, b));
    console.log('La resta de a * b = ', multiplicar(a, b));
    console.log('La resta de a / b = ', dividir(a, b));
    console.log('La resta de a ^ b = ', potencia(a, b));
}

calculadora();