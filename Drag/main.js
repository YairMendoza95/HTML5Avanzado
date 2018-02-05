window.addEventListener("load", init);

function init(){
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
}

function dragFinalizado(e){
	
}