/*Ejercicio 3 – Cajero automático
Crea un programa que: simule un cajero automático. El usuario inicia con un saldo
definido en una variable constante. Podrá retirar dinero varias veces mientras tenga
fondos suficientes. Si intenta retirar más de lo que tiene, debe aparecer un mensaje de
error y no permitir la transacción.*/

// defino un saldo inicial con una constante
const saldoInicial = 500000;

// Acá sí necesito let porque el saldo va a ir cambiando con cada retiro
let saldo = saldoInicial;

// Esta variable me sirve para controlar cuándo el usuario quiere salir
let continuar = true;[]

// El while se repite mientras continuar sea true, o sea, hasta que el usuario decida salir
// o se le acabe el saldo
while (continuar) {

  // Le muestro el saldo antes de cada retiro para que sepa con cuánto cuenta
    console.log(" Saldo actual: $" + saldo);

  // Le pregunto cuánto quiere retirar, el 0 es la señal para salir
    let retiro = Number(prompt("¿Cuánto deseas retirar? (0 para salir)"));

  // Si escribe 0, asumimos que ya no quiere hacer más retiros
    if (retiro === 0) {
    console.log("Gracias por usar el cajero. ¡Hasta luego!");
    continuar = false; // esto hace que el while se detenga

  // No tiene sentido retirar un valor negativo, así que lo controlo acá
    } else if (retiro < 0) {
    console.log("No puedes ingresar un valor negativo.");

  // Si lo que quiere retirar es más de lo que tiene arroja el siguiente mensaje
    } else if (retiro > saldo) {
    console.log("Fondos insuficientes. Tu saldo es $" + saldo);

  // Si todo está bien, hago el descuento y muestro el saldo actualizado
    } else {
    saldo = saldo - retiro;
    console.log("Retiro exitoso. Saldo restante: $" + saldo);

    // Si el saldo quedó en 0, no tiene caso seguir, salgo automáticamente
    if (saldo === 0) {
        console.log("Tu saldo es $0. No puedes realizar más retiros.");
        continuar = false;
    }
    }
}