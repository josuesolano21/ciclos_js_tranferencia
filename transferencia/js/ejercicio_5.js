/*Ejercicio 5 – Tienda de productos
Crea un programa que: simule la venta de productos. El usuario podrá registrar la compra
de varios artículos hasta que decida no comprar más. Se debe calcular el total de la
compra y aplicar un descuento del 10% si el valor supera los $100.000.*/
let total = 0;
let respuesta = "si";

// Mientras la respuesta sea "si", el ciclo sigue
while (respuesta == "si") {
    
    // Pedimos el precio
    let precio = prompt("Ingrese el precio del producto:");
    
    // Lo sumamos al total (Number lo convierte a número)
    total = total + Number(precio);
    
    // Preguntamos si quiere seguir
    respuesta = prompt("¿Desea comprar otro producto? (escriba 'si' o 'no')");
}

// Revisamos si el total es mayor a 100000 para aplicar descuento
if (total > 100000) {
    let descuento = total * 0.10;
    total = total - descuento;
    alert("Tienes descuento del 10%. El total es: $" + total);
} else {
    alert("El total de tu compra es: $" + total);
}