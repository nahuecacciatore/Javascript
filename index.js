




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




let transferencias = JSON.parse(localStorage.getItem("transferencias")) ?? [];  

class Transferencia {
  constructor(nombre, email, cbu){
    this.nombre = nombre;
    this.email = email;
    this.cbu = cbu;
  }
}
const contenedorTransferencia = document.getElementById("transferencias");

function mostrarHistorial (transferencias){
      contenedorTransferencia.innerHTML = ""
     
      transferencias.forEach(transferencia=> {
                    const li = document.createElement ("li")
                    li.innerHTML = `<h2> ${transferencia.nombre}
                                         ${transferencia.email}
                                         ${transferencia.cbu}</h2>`
                    contenedorTransferencia.append(li)
    })
}
mostrarHistorial(transferencias);

// Storage //
  let boton = document.getElementById("boton");
  
  let nombre   = document.getElementById("nombre");
  let email    = document.getElementById("email");
  let numero   = document.getElementById("numero");

  boton.addEventListener("click", (e) => {
    e.preventDefault();

    let nuevaTransferencia = new Transferencia(nombre.value, email.value, numero.value);

    transferencias.push(nuevaTransferencia); 

    console.log(transferencias);

    localStorage.setItem("transferencias", JSON.stringify(transferencias));

    mostrarHistorial(transferencias);
// Librerias SweetAlert
      Swal.fire(
        'Transferencia completa!',
        'La primer cuota de su transferencia fue enviada con exito!',
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

  // Historial de transferencias

                       