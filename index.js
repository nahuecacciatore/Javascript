/* for(let i = 0; i <= 5; i++){
    if (i === 3){
        continue;
    }

    console.log(i);
}

let nombre = prompt ("ingrese su nombre");
let mensaje = `Hola ${nombre}`;

alert (mensaje); */

/* PARA CREAR LAS `` DEBO UTILIZAR ALT + 96 */

/* for (let i = 0; i <= 5; i++) {
    let nombre = prompt ("ingrese su nombre");
    let mensaje = `hola ${nombre}`;

    alert (mensaje);
} */



// ALT + 91/93 CORCHETES//



let precioInicial = 120000;

function cuotas (precioInicial, cantidadCuotas) {
    switch (cantidadCuotas) {
        case 3:
            return precioInicial / 3;
            break;
        case 6:
            return precioInicial / 6;
            break;
        case 9:
            return precioInicial / 9;
            break;
        case 12:
            return precioInicial / 12;
            break;
        default:
            return 0;
            break;        
    }
}

console.log(cuotas(precioInicial, 3));


// ARRAYS //
const cuotasDisponibles = [3,6,9,12];
console.log( cuotasDisponibles.join (", "));
// ARRAYS //


