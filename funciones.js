// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    function despedir() {
    console.log("Adiós");
}
// Prueba: despedir(); Respuesta: Adiós



// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    function multiplicarPorDos(numero) {
    return numero * 2;
}
// Prueba: multiplicarPorDos(5); Respuesta: 10



// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    function esMayorDeEdad(edad) {
    return edad > 18;
}
// Prueba: esMayorDeEdad(20); Respuesta: true
// Prueba: esMayorDeEdad(15); Respuesta: false



// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    function multiplicar(a, b) {
    return a * b;
}
// Prueba: console.log(multiplicar(2, 3)); Respuesta: 6



// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    function saludarPersonalizado(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}`;
}
// Prueba: saludarPersonalizado("Jessi", "Bareiro"); Respuesta: "Hola, Jessica Bareiro"



// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}
// Prueba: calcularPotencia(2, 3); Respuesta: 8



// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
function restar(a, b) {
    return a - b;
}
// Prueba: restar(10, 5); Respuesta: 5



// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    function dividir(a, b) {
    return a / b;
}
// Prueba: dividir(10, 2); Respuesta: 5



// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `funcionMultiplicar`.
    const funcionMultiplicar = function(a, b) {
    return a * b;
};
// Prueba: funcionMultiplicar(3, 4); Respuesta: 12



// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
   const saludar = function(nombre) {
    return `Hola, ${nombre}`;
};
// Prueba: saludar("Ana"); Respuesta: "Hola, Ana"



// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    const esPar = function(numero) {
    return numero % 2 === 0;
};
// Prueba: esPar(4); Respuesta: true
// Prueba: esPar(5); Respuesta: false



// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    const multiplicarFlecha = (a, b) => a * b;
// Prueba: multiplicarFlecha(3, 5); Respuesta: 15



// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
   const saludarFlecha = nombre => `Hola, ${nombre}`;
// Prueba: saludarFlecha("Luis"); Respuesta: "Hola, Luis"



// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = (radio) => {
    return Math.PI * Math.pow(radio, 2);
};

// Prueba:
console.log(calcularArea(3)); // Respuesta: 28.27....




// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    if (n === 1) {
        return 1;
    }
    return n + suma(n - 1);
}
// Prueba: suma(3); Respuesta: 6



// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Prueba: fibonacci(6); Respuesta: 8



// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Prueba: factorial(5); Respuesta: 120



// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}
// Prueba: potencia(2, 3); Respuesta: 8




// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    funcionMultiplicar,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};
