window.addEventListener("load", init);
var container;
var elementoArrastrandose;
function init(){
	container = document.querySelector('.container');
	container.addEventListener("dragover", dragSobreContainer, false);
	container.addEventListener("dragleave", dragSalioContainer, false);
	container.addEventListener("drop", manejarDrop, false);
	var circles = document.getElementsByClassName('circle');
	for (i in circles){
		var circle = circles[i];
		var x = random(0, 90);
		var y = random(0, 90);
		if(typeof circle.style != "undefined"){
			circle.style.top = y + '%';
			circle.style.left = x + '%';
			circle.addEventListener("dragstart", dragIniciado, false);
			circle.addEventListener("dragend", dragFinalizado, false);
		}
	}
}

function random(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function dragIniciado(e){
	this.style.backgroundColor = 'blue';
	elementoArrastrandose = this;
	var padre = document.createElement("p");
	var clon = this.cloneNode(true);
	padre.appendChild(clon);
	e.dataTransfer.setData("text", padre.innerHTML);
}

function dragFinalizado(e){
	this.style.backgroundColor = 'red';	
}

function dragSobreContainer(e){
	// Este evento sirve para cuando el navegador esta haciendo otra cosa lo dejo y pueda hacer el drag
	e.preventDefault();
	this.classList.add('over');
	return false;
}

function dragSalioContainer(e){
	this.classList.remove('over');
}

function manejarDrop (e) {
	e.preventDefault();
	var datos = e.dataTransfer.getData('text');
	this.innerHTML += datos;
	elementoArrastrandose.parentNode.removeChild(elementoArrastrandose);
	this.classList.remove('over');
}