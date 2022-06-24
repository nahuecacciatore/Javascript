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

let entrada = prompt ("Ingrese un usuario");

while (entrada != "nahuel") {
    alert ("Usuario invalido")

    entrada = prompt ("Ingrese un usuario valido")
}

alert ("Bienvenido nahuel")