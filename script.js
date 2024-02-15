
  function mostrarCreditos() {

    var autor = "Mario Santos Baños";
    var cursoGrupo = "2ºB";

    var mensaje = "Autor: " + autor + "\nCurso y Grupo: " + cursoGrupo;

    alert(mensaje);
  }

  function ocultarPrimeraSeccion() {
    var header = document.querySelector(".cuadro1");
    if (header) {
      header.style.display = "none";
    }
  }

  function mostrarPrimeraSeccion() {
    var header = document.querySelector(".cuadro1");
    if (header) {
      header.style.display = "block";
    }
  }

function cambiocolor() {
    var seccion = document.querySelector(".cuadro1");

    var nuevocolor = "#4287f5";

    seccion.style.backgroundColor = nuevocolor;
}

document.getElementById("cuadro1").addEventListener("mouseover", function() {
  var fechaActual = new Date();
  var fechaString = fechaActual.toLocaleDateString();
  alert("La fecha de hoy es: " + fechaString);
});

document.getElementById("cuadro2").addEventListener("mouseover", function() {
  var cuadro2 = document.getElementById("cuadro2");
  cuadro2.style.backgroundColor = "#e6dddc"; 
});

document.getElementById("cuadro2").addEventListener("mouseout", function() {
  var cuadro2 = document.getElementById("cuadro2");
  cuadro2.style.backgroundColor = "#baaead";
});


const getLocationBtn = document.getElementById('getLocationBtn');
const coordinatesDiv = document.getElementById('coordinates');


getLocationBtn.addEventListener('click', () => {
   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        coordinatesDiv.innerHTML = "Geolocalización no es compatible con este navegador.";
    }
});


function showPosition(position) {
    coordinatesDiv.innerHTML = "Latitud: " + position.coords.latitude +
    "<br>Longitud: " + position.coords.longitude;
    

    showMap(position.coords.latitude, position.coords.longitude);
}


function showMap(latitude, longitude) {
 
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = "";


    const mymap = L.map('map').setView([latitude, longitude], 13);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

   
    L.marker([latitude, longitude]).addTo(mymap)
        .bindPopup('¡Estás aquí!')
        .openPopup();
}
