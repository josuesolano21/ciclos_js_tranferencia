/*Ejercicio 8 – Control de acceso
Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta
3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si
acierta, mostrar “Bienvenido”.*/

// Defino las credenciales correctas con const porque no deben cambiar
const usuarioCorrecto = "admin";
const contrasenaCorrrecta = "1234";

// Este booleano me ayuda a saber si el usuario logró entrar o no
let accesoPermitido = false;

// El for me limita exactamente a 3 intentos
for (let intento = 1; intento <= 3; intento++) {

  // Le aviso en qué intento va para que sepa cuántos le quedan
    console.log("Intento " + intento + " de 3");

    let usuarioIngresado = prompt("Ingresa tu usuario: ");
    let contrasenaIngresada = prompt("Ingresa tu contraseña: ");

  // Verifico que tanto el usuario como la contraseña sean correctos
    if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrrecta) {
    accesoPermitido = true;
    break; // si acertó no tiene sentido seguir pidiendo datos, salgo del ciclo
    } else {

    // Le aviso que falló y cuántos intentos le quedan, excepto en el último
    if (intento < 3) {
        console.log("Datos incorrectos. Te quedan " + (3 - intento) + " intento(s).");
    }
    }
}

// Ya fuera del ciclo reviso si logró entrar o no
if (accesoPermitido) {
    console.log("Bienvenido, " + usuarioCorrecto + "!");
} else {
    console.log("Acceso denegado. Has agotado tus 3 intentos.");
}