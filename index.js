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








//Estableciendo variables//
let precioInicial = parseInt(
    prompt("Por favor, ingrese el valor de su producto")
  );
  alert("El precio de su producto es " + precioInicial);
  
  let cantidadCuotas = parseInt(
    prompt("Por favor indique cantidad de cuotas (3,6,9,12)")
  );
  let valorCuota = cuotas(precioInicial, cantidadCuotas);

  alert(
    "El valor de cada cuota sera de $" + valorCuota.toFixed(2)
      
    );
  
//Estableciendo funciones//
  function cuotas(precioInicial, cantidadCuotas) {
//Estableciendo ciclos//    
    do {
        switch (cantidadCuotas) {
            case 3:
              console.log("3= ", parseInt(precioInicial / 3));
              return precioInicial / 3;
              break;
            case 6:
              console.log("3= ", parseInt(precioInicial / 6));
              return precioInicial / 6;
              break;
            case 9:
              console.log("3= ", parseInt(precioInicial / 9));
              return precioInicial / 9;
              break;
            case 12:
              console.log("3= ", parseInt(precioInicial / 12));
              return precioInicial / 12;
              break;
            default:
              cantidadCuotas = parseInt (prompt("Ingrese una cantidad de cuotas validas"));    
          }
    } while (cantidadCuotas);
  }


// Arrays //
    const cuotasDisponibles = [3,6,9,12];
    console.log( cuotasDisponibles.join (", "));