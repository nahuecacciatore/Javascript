/* for(let i = 0; i <= 5; i++){
    if (i === 3){
        continue;
    }

    console.log(i);
}

let nombre = prompt ("ingrese su nombre");
let mensaje = `Hola ${nombre}`;

alert (mensaje); */



/* for (let i = 0; i <= 5; i++) {
    let nombre = prompt ("ingrese su nombre");
    let mensaje = `hola ${nombre}`;

    alert (mensaje);
} */


// PARA CREAR LAS `` DEBO UTILIZAR ALT + 96 //
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


 // DOM //
  let container = document.getElementById ("contenedor");
  container.innerHTML = `<h2>Su compra de $${precioInicial}
                         sera dividida en ${cantidadCuotas} cuotas</h2>

                         <p>valor de cada cuota = $${valorCuota.toFixed(2)}</p>`;

// Eventos //
  let formulario = document.getElementById("formulario");
      formulario.addEventListener("submit", validarFormulario);

  function validarFormulario(e){
      e.preventDefault();

              if(e.target.children[0].value.includes("@") && e.target.children[0].value.includes(".com")){
                 let mensaje = document.createElement("h2");
                     mensaje.innerHTML = "¡Bienvenido! Gracias por utilizar nuestra calculadora virtual";
                      document.body.append(mensaje);
                      mensaje.className = "bienvenido";
               }
              else {
                 let mensaje = document.createElement("h2");
                     mensaje.innerHTML = "El correo ingresado no es valido";
                     document.body.append(mensaje);
                     mensaje.className = "alerta";
              }
  }