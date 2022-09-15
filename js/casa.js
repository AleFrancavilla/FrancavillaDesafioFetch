let images = document.getElementById('images')
let detalles = document.getElementById('detalles')
const propiedadLS = JSON.parse(localStorage.getItem("propiedad")) || {}
console.log(propiedadLS);

function mostrarCasa(){
  
  images.innerHTML = `<li><img src=${propiedadLS.img} alt="Picture 1"></li>
                  <li><img src=${propiedadLS.img1} alt="Picture 2"></li>
                  <li><img src=${propiedadLS.img2} alt="Picture 3"></li>
                `
detalles.innerHTML = `<div id="caracteristicas">
                      <h3 class="titCasa">Características del inmueble</h3>
                      <ul class="lista">
                        <li class="dl">Referencia: <span>${propiedadLS.id}</span></li>
                        <li class="dl">Precio: <span>$${propiedadLS.precio}</span></li>
                        <li class="dl">Tipo: <span>${propiedadLS.tipoDePropiedad}</span></li>
                        <li class="dl">Superficie: <span>${propiedadLS.m2}</span></li>
                        <li class="dl">Estado: <span> Excelente Estado para ingresar hoy</span></li>
                        <li class="dl">Cocina: <span>Si</span></li>
                        <li class="dl">Habitaciones: <span>${propiedadLS.habitaciones}</span></li>
                        <li class="dl">Baños: <span>2</span></li>
                      </ul>
                      </div>
                      <div class="desc">
                      <h3>Descripcion</h3>
                      <p id="descripcion">
                        Se vende propiedad en el barrio ${propiedadLS.barrio}, con ${propiedadLS.m2}M2.
                       Sala, ${propiedadLS.habitaciones} habitaciones amplias, cocina comedor equipada, baño, aseo. Piso muy luminoso. Excelente situación.
                      </p>
                      </div>
                      <div class="deta">
                      <h3>Servicios</h3>
                      <div class="span3">
                        <i class="fa fa-check" aria-hidden="true"></i><p>Cocherra</p>
                        <i class="fa fa-check" aria-hidden="true"></i><p>Luz</p>
                        <i class="fa fa-check" aria-hidden="true"></i><p>Gas</p>
                        <i class="fa fa-check" aria-hidden="true"></i><p>Agua</p>
                        <i class="fa fa-check" aria-hidden="true"></i><p>Telefono / Internet</p>
                      </div>
                      </div>`
  
}

// CARRUSEL DE FOTOS 
mostrarCasa()
const viewer = new Viewer(images, {
  inline: true,
  viewed() {
    viewer.zoomTo(0.6);
  }
});

//BOTON SIMULADOR DE GARANTIA
document.querySelector('#irGarantia').addEventListener('click',()=>{
  location.href = 'http://127.0.0.1:5500/vs/garantia.html'
})