/*Ejercicio 1 – Números primos
Crear un programa que: muestre todos los números primos entre 1 y 50. Utilizar ciclos y
condicionales para verificar qué números cumplen la condición de ser primos.*/

for (let num = 1; num <= 50; num++) {
  let primo = true;
  if (num < 2) {
    primo = false;
  }

  for (let divisor = 2; divisor < num; divisor++) {
    if (num % divisor === 0) {
      primo = false; 
    }
  }
  if (primo) {
    console.log(num);
  }
}

/* Ciclo FOR, repite el bloque de código varias veces, da un inicio, una condición y una actualización. 
++, le suma 1 a una variable ej: número = número + 1 
% (módulo)  devuelve el residuo de una división. */

/* Si lo catalogo tal como la imagen IA que está adjunta en el classroom, creo que sería así:
1. Inicialización: for (let num = 1; y for (let divisor = 2;
2. Condición: num <=50; y divisor < num;
3. Código de ejecución: let primo = true; 
if (num < 2) {
primo = false;
}
y
if (num % divisor === 0) {
primo = false;
}
yyyy
if (primo) {
console.log(num)
}
4. Incremento / Actualización: num++) y divisor++