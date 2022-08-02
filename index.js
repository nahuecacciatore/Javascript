




// PARA CREAR LAS `` DEBO UTILIZAR ALT + 96 //
// ALT + 91/93 CORCHETES//





//Estableciendo variables//
  let precioInicial = parseInt(document.getElementById("inicial").value);
  let cantidadCuotas = parseInt(document.getElementById("cuotas").value);
  
  
//Estableciendo funciones//
  function calcular (){
      const inicial = parseFloat(document.getElementById("inicial").value);
      const cuotas = parseInt(document.getElementById("cuotas").value);

      document.getElementById("resultado").innerHTML = inicial/cuotas;
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

  /* let formulario = document.getElementById("formulario");
      formulario.addEventListener("submit", validarFormulario);

  function validarFormulario(e){
      e.preventDefault();

              if(e.target.children[3].value.includes("@") && e.target.children[3].value.includes(".com")){
                 let mensaje = document.createElement("h2");
                     mensaje.innerHTML = "¡Gracias! Sus datos fueron registrados";
                     document.body.append(mensaje);
                     mensaje.className = "bienvenido";
               }
              else {
                 let mensaje = document.createElement("h2");
                     mensaje.innerHTML = "El correo o numero ingresado no es valido";
                     document.body.append(mensaje);
                     mensaje.className = "alerta";
              }
  } */


// Storage //
  let boton = document.getElementById("boton");

  boton.addEventListener("click", (e) => {
      e.preventDefault();

      let nombre   = document.getElementById("nombre");
      let email    = document.getElementById("email");
      let numero   = document.getElementById("numero");


      nombre   = nombre.value;
      localStorage.setItem("nombre", nombre);

      email    = email.value;
      localStorage.setItem("email", email);

      numero   = numero.value;
      localStorage.setItem("numero", numero);

// Librerias SweetAlert
      Swal.fire(
        'Felicidades!',
        'Sus datos fueron registrados!',
        'success'
      )

})
                                                    


