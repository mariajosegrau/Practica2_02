/* Ejercicio 2 - Multiplicando
Genera una función que imprima por consola las tablas de multiplicar de los números que
van desde el indicado como parámetro (entero positivo mayor a dos) hasta dos. Para ello
recibe dos parámetros: un número y una función.
La función pasada como parámetro será la que calcule las tablas de multiplicar. Habrá
que diseñar primero esa función y luego pasarla como parámetro. Esta función recibe un
número como parámetro e imprime su tabla de multiplicar (debidamente formateada).
Por ejemplo, si se ejecuta tablas(5, multiplicar) imprimirá por consola las tablas del
cinco, la del cuatro, del tres y la del dos, eso sí, debidamente formateadas. */

"use strict";
// Función que muestra la tabla de multiplicar de un número dado
function multiplicar(numero) {
    console.log(`\nTabla del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} 

// Función que imprime las tablas desde el número indicado hasta la del 2
function tablas(numero, funcionMultiplicar) {
    // Verifica que el número sea un entero positivo mayor que 1
    if (typeof numero !== 'number' || numero < 2) {
        console.error('Error: El número debe ser un entero positivo mayor a 1.');
        return;
    }

    // Llama a la función de multiplicar para que muestre las tablas desde el número indicado hasta el 2
    //igualamos i al numero y decrementamos hasta la última tabla a mostrar.
    for (let i = numero; i >= 2; i--) {
        funcionMultiplicar(i);
    }
}

// Ejemplo de uso
//tablas(5, multiplicar);  // Imprimirá las tablas del 5, 4, 3 y 2
tablas(2, multiplicar); //Sólo mostrará la del 2