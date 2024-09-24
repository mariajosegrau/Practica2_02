/* Crea una función que permita sumar todos los números pasados como parámetros. 
Deberá seguir estas premisas: 
• comprobará si son de tipo numérico antes de realizar 
la operación, si no lo es, lanzará un mensaje de error por consola y detendrá la 
ejecución del programa, 
• debe tener como mínimo dos parámetros o no se ejecutará. 
Debe insultar informar al usuario, 
• la salida debe estar debidamente formateada. 
Nota: usa el pseudoarray arguments. */

"use strict";
function sumarNumeros() {
    // Comprobar que se han pasado al menos dos parámetros
    if (arguments.length < 2) {
        console.error(`Parece que estas despistado! Debes proporcionar al menos dos números para sumar.`);
        //return;
    }

    let suma = 0;

    // Iterar sobre el pseudoarray arguments
    for (let i = 0; i < arguments.length; i++) {
        // Comprobar si cada parámetro es de tipo numérico
        if (typeof arguments[i] !== 'number') {
            console.error(`Error: El argumento en la posición ${i + 1} (${arguments[i]}) no es un número.`);
            return;
        }
        suma += arguments[i];
    }

    // Devolver la suma formateada
    console.log(`La suma de los números proporcionados es: ${suma}`);
}

// Ejemplos de uso:
 sumarNumeros(1, 2, 3);   // La suma de los números proporcionados es: 6
 sumarNumeros(1);         // Parece que estas despistado! Debes proporcionar al menos dos números para sumar..
