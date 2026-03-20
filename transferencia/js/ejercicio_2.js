/* Ejercicio 2 - Tabla de multiplicar personalizada:
Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de
multiplicar hasta el 12. El ciclo debe permitir repetir el proceso si el usuario desea
consultar otra tabla. */

let repeticion = Number(prompt("¿Cuántas veces deseas repetir el proceso??"));
for (let vuelta = 1; vuelta <= repeticion; vuelta++) {

  let num = Number(prompt("Cuál tabla deseas ver? (del 1 al 12)"));
  for (let i = 1; i <= 12; i++) {
    let resultado = num * i;
    console.log(num + " x " + i + " = " + resultado);
  }
}

/* Le estoy permitiendo al usuario interactuar un poco con el código, permitiendole que establezca cuantas veces desea repetir o ver una tabla distinta y la disponibilidad de que decida la tabla de qué desea ver a partir el mínimo y máximo establecido.
Me he guiado con el for y repitiendolo porque se me hizo más sencillo de esa manera pero también podría usar un Do...while usando el (true) y break para dar un poco más de precisión en las elecciones del usuario
i como ya se ha visto, es la variable contable (indice), es como la variable numero. Cada i vale 1 (i=1), luego vale 2, luego 3 y asi sucesivamente hasta llegar a 12 y permitir crear las tablas de multiplicar (( let resultado = num * i);) eso multiplica el numero en consecutivo (1, 2, 3, 4) por cada vuelta que se ejecute
y las " " las usé para mostrar que el texto debe imprimirse tal cual como se muestra y evitar que rebote errro. */