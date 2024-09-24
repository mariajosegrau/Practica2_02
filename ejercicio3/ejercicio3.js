/*Ejercicio 3 - Sumando vectores
Escribe la función calcular() para que maneje tres arrays (no serán pasados como
parámetros a esta función sino declarados dentro de ella). Lo que sí se pasará como
parámetros serán tres funciones con el siguiente comportamiento:
• una para generar un array con números aleatorios comprendidos entre 1 y 100, la
cantidad de números generados será pasado como parámetro,
• otra que recibe dos arrays como parámetros y genera un array que contenga la
suma de las cifras que ocupen posiciones contrarias, es decir, la primera posición
del primero sumada a la última posición del segundo (los arrays deben tener la
misma longitud),
• y la última para imprimir un array por consola debidamente formateado.
La ejecución del programa se realizará a través de la función calcular() del siguiente
modo: calcular(funcion1, funcion2, funcion3);
Nota: para generar números aleatorios en JavaScript usa: Math.floor(Math.random()*101);
  */
 "use strict";

 // Función para generar un array de números aleatorios
function generarArrayAleatorio(cantidad) {
    let array = [];
    for (let i = 0; i < cantidad; i++) {
        array.push(Math.floor(Math.random() * 101));  // Genera un número aleatorio entre 1 y 100
    }
    return array;
}

// Función para sumar las posiciones contrarias de dos arrays
function sumarPosicionesContrarias(array1, array2) {
    let resultado = [];
    let longitud = array1.length;
   
    for (let i = 0; i < longitud; i++) {
        resultado.push(array1[i] + array2[longitud - 1 - i]);
    }
    return resultado;
}

// Función para imprimir un array debidamente formateado
function imprimirArray(array) {
    console.log('[' + array.join(', ') + ']');
}

// Función calcular que recibe tres funciones como parámetros
function calcular(funcionGenerar, funcionSumar, funcionImprimir) {
    // Declarar tres arrays
    let array1 = funcionGenerar(5);  // Genera un array con 5 números aleatorios
    let array2 = funcionGenerar(5);  // Genera otro array con 5 números aleatorios
    let arraySuma = funcionSumar(array1, array2);  // Suma de posiciones contrarias

    // Imprimir los tres arrays
    console.log('Array 1:');
    funcionImprimir(array1);

    console.log('Array 2:');
    funcionImprimir(array2);

    console.log('Array suma de posiciones contrarias:');
    funcionImprimir(arraySuma);
}

// Ejecución del programa
calcular(generarArrayAleatorio, sumarPosicionesContrarias, imprimirArray);
