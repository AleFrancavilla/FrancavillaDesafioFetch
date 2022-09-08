class Casa {
  constructor(
    id,
    tipoDeOperacion,
    barrio,
    habitaciones,
    m2,
    precio,
    tipoPropiedad,
    img
  ) {
    this.id = id;
    this.tipoDeOperacion = tipoDeOperacion.toUpperCase();
    this.barrio = barrio;
    this.habitaciones = habitaciones;
    this.m2 = parseInt (m2)||1;
    this.precio =parseInt (precio)||1;
    this.img = img;
    this.tipoDePropiedad =tipoPropiedad;
  }
}
let Casas = []
let barrios = []
let tipoDeOperacion = []
let tipoDePropiedad = []
localStorage.clear()
let divVivienda = document.getElementById("viviendas");

const selectBarrio = document.querySelector("#seleccionarBarrio");
const selectOperacion = document.querySelector("#selectOperacion");
const selectTipo = document.querySelector("#selectTipoDePropiedad");
const search = document.querySelector('#search')
const barrioSearch = document.querySelector('#barrioSearch')

function cargoArrayBarrios() {
  barrios.forEach((barrio) => {
    selectBarrio.innerHTML += `<option value="${barrio}">${barrio}</option>`;
  });
  tipoDeOperacion.forEach(operacion => {
    selectOperacion.innerHTML += `<option value="${operacion}">${operacion}</option>`
  });
  tipoDePropiedad.forEach(propiedad => {
    selectTipo.innerHTML += `<option value="${propiedad}">${propiedad}</option>`
  });
  
}




search.addEventListener('click',()=>{
  mostrarCards(Casas.filter(item=> item.barrio.toLocaleLowerCase().includes(barrioSearch.value.toLowerCase())))
})

selectBarrio.addEventListener("change", () => {
  selectBarrio.value == "todos" ?
    mostrarCards(Casas)
  :
    mostrarCards(Casas.filter((item) => item.barrio == selectBarrio.value));
  
  });

selectTipo.addEventListener("change", () => {
 
    mostrarCards(Casas.filter((item) => item.tipoDePropiedad == selectTipo.value.toUpperCase()));
  
});
selectOperacion.addEventListener("change", () => {
  mostrarCards(Casas.filter((item)=> item.tipoDeOperacion==selectOperacion.value.toUpperCase()));

  const garantia=(selectOperacion.value==="Alquiler") 
garantia && 

Swal.fire({
  title: '¿Necesita Garantia?',
  text: 'Elija una propiedad y simule el valor de la Garantia',
  imageUrl: 'https://www.portoseguro.com.uy/image/journal/article?img_id=2150299&t=1601295634261',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',

})
})

  //---------------------------------------------------------------------
//FETCH CON JSON

fetch('data/datos.json')
.then(respuesta => respuesta.json())
.then(data =>{
  Casas = data.bbdd
  barrios = data.barrio
  tipoDeOperacion = data.tipoOp
  tipoDePropiedad = data.tipoProp

  mostrarCards(Casas)
  cargoArrayBarrios();
})
.catch(error=>console.log(error))

//DESESTRUCTURACION
    
function mostrarCards(array) {
  divVivienda.innerHTML = "";
  array.forEach((item) => {
    // console.log(elemento);
const{img,barrio,precio,tipoDeOperacion,id}=item

    let div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `<div class="card" style="width: 15rem;">
                          <img src="${img}" class="card-img-top img-fluid" alt="foto casa">
                          <div class="card-body">
                          <h5 class="card-title"> Barrio ${barrio}</h5>
                          <p class="card-text">precio $${precio}</p>
                          <p class="card-text"> ${tipoDeOperacion}</p>
                          <button class="btn btn-outline-primary btn-block" id="${id}">Ver</button>
                          </div>
                  </div>`;
    divVivienda.appendChild(div);

   let btn = document.getElementById(`${id}`);
  btn.addEventListener("click", () => {
    let casa = Casas.find((item) => item.id == id);
    localStorage.setItem("propiedad", JSON.stringify(casa));
    location.href = "http://127.0.0.1:5500/vs/casa.html";
  });
});
}

//Desafio DOM agrego un parrafo

const titulo1 = document.getElementById("titulo1");
const titulo2 = document.getElementById("titulo2");

function cambiarTitulos() {
  titulo1.innerText = "Bienvenidos AF Propiedades";
  titulo2.innerText = "Estamos para dar solucion a sus necesidades!";
}
cambiarTitulos();



