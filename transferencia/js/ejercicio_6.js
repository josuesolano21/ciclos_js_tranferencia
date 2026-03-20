/*Ejercicio 6 – Juego del adivinador:
Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará
adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, el
programa debe indicar si el número buscado es mayor o menor que el ingresado.*/

let numero = Math.floor(Math.random() * 20) + 1;
let intento = Number(prompt("Adivina el número del 1 al 20:"));
while (intento !== numero) {

  if (intento < numero) {
    prompt("El número es MAYOR al seleccionado. Intenta nuevamente:");
  } else {
    prompt("El número es MENOR al seleccionado. Intenta nuevamente:");
  }

  intento = Number(prompt("Adivina el número del 1 al 20:"));

}
console.log("Felicidades, el número era: " + numero);

/* CVon la primer linea de codigo, la maquina elige aleatoreamente un número el cual será el que hay que adivinar y el while hace que se el codigo se repita las veces que sean necesarias hasta que el usuario adivine el número que escogío la maquina.
Con ayuda de la IA, me mostró que utilizar el math.random ayuda a generar con mayor precisión un número aleatorio entre los números establecidos pero tiene un problema, y es que elige números DECIMALES. Por eso, se utiliza el math.floor, ya que hace que esos números decimales dejen de serlo quitando todo lo que hay después de la coma convirtiendolos en números enteros. */