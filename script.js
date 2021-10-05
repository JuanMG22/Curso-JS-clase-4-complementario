// Variables de precios con y sin iva
let precioSinIva;
let precioConIva;

// Función del proceso general 
function proceso() {
    ingresoCosto()
    sumarIva()
    mostrarPrecios()
}

function ingresoCosto () {
    precioSinIva = parseInt(prompt("Ingrese el precio del producto"));
    if (precioSinIva < 0) {
        console.log("Ingrese un precio válido")
    }
    return precioSinIva;
}

function sumarIva () {
    precioConIva =  precioSinIva * 1.21;
    return precioConIva;
}

function mostrarPrecios() {
    console.log( "El precio del producto sin IVA es de "  + precioSinIva);
    console.log("El precio del producto con IVA es de "  + precioConIva);
}