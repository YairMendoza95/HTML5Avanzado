window.addEventListener("load", init);
function init () {
	var el = document.getElementById("elemento");
	//var elemntos = document.querySelectorAll("[data-ejemplo]"); Obtiene todos los elementos en unarreglo con el mismo dataset
	//$("elemento").data("identficador","valor"); dataset con JQuery
	el.dataset.ejemplo = "Nuevo";
	console.log(el.dataset.ejemplo);
}