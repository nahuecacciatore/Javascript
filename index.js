




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

// Fetch
    const traerContactos = async() => {
    const lista = document.getElementById("listado");


    try{
      const response = await fetch('./data.json');
      const numeros = await response.json();

      numeros.forEach(numero => {
        const li = document.createElement("li");
              li.innerHTML = `<h2>${numero.nombre}</h2>
                              <p>${numero.numero} </p>`;


        lista.append(li);                      
      })
    }catch (error){
      console.log(error);
    }

  }
  traerContactos();