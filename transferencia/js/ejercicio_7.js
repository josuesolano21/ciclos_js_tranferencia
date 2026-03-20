/*Ejercicio 7 – Contador de pares e impares
Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos
fueron pares y cuántos impares.*/

// Arranco los contadores en 0
let pares = 0;
let impares = 0;

// El for me permite repetir exactamente 10 veces, ni más ni menos
for (let i = 1; i <= 10; i++) {

  // Le aviso en qué número va para que no se pierda
    let num = Number(prompt("Ingresa el número " + i + " de 10:"));

  // El módulo (%) me da el residuo de la división
  // Si el residuo es 0, el número es par, de lo contrario es impar
    if (num % 2 === 0) {
    pares++;   // es lo mismo que pares = pares + 1
    } else {
    impares++; // es lo mismo que impares = impares + 1
    }
}

// Ya que terminó el ciclo, muestro el resumen final
console.log("Listo! De los 10 números ingresados:");
console.log("Pares: " + pares);
console.log("Impares: " + impares);