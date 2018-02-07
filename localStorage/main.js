window.addEventListener('load', init);
var storage;
var clave = "tutorialLocalStorage";

function init() {
	var formulario = document.querySelector("#todo_form");
	storage = new Lista(clave);
	formulario.addEventListener("submit", agregarActividad);
	actualizarLista(storage.obtenerActividades());
}

function agregarActividad (e) {
	e.preventDefault();
	var actividad = document.getElementById("todo").value;
	if(storage.agregarActividad(actividad)){
		alert("Se agrego actividad exitosamente");
		actualizarLista(storage.obtenerActividades());
	}
}

function actualizarLista (actividades) {	
	var lista = document.querySelector("#todo_list");
	lista.innerHTML = "";
	if(actividades != null){
		for (i in actividades) {
			var actividad = actividades[i];
			var elemento = document.createElement("li");
			elemento.innerHTML = actividad;
			lista.appendChild(elemento);
		}
	}
}