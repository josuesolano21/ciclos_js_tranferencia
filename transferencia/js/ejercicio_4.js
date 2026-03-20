/*Ejercicio 4 – Promedio de notas
Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y

determina, mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba. Usa ciclos para
ingresar los datos de manera ordenada.*/
// Definimos la cantidad de estudiantes y de notas por estudiante
const totalEstudiantes = 5;
const totalNotas = 3;

// Ciclo principal que pasará por cada uno de los 5 estudiantes
for (let i = 1; i <= totalEstudiantes; i++) {
    // Pedimos el nombre del estudiante
    let nombre = prompt("Ingrese el nombre del estudiante #" + i + ":");
    
    let sumaNotas = 0;

    // Ciclo secundario para ingresar las notas del estudiante actual
    for (let j = 1; j <= totalNotas; j++) {
        // Leemos la nota, la convertimos a número decimal con parseFloat
        let nota = parseFloat(prompt("Ingrese la nota " + j + " de " + nombre + " (ejemplo: 3.5):"));
        
        // Sumamos la nota al acumulado
        sumaNotas += nota;
    }

    // Calculamos el promedio
    let promedio = sumaNotas / totalNotas;
    let estado = "";

    // Condicional para determinar si aprueba o reprueba
    if (promedio >= 3.0) {
        estado = "Aprobado ";
    } else {
        estado = "Reprobado ";
    }

    // Mostramos el resultado usando alert()
    alert(
        "Resumen del estudiante: " + nombre + "\n" +
        "Promedio: " + promedio.toFixed(2) + "\n" +
        "Estado: " + estado
    );
}

alert("¡Proceso finalizado para los " + totalEstudiantes + " estudiantes!");