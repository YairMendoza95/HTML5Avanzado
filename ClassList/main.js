window.addEventListener('load', init);

// El objeto classList nos permite la manipualación de clases de una manera más fácil
function init () {
	var bandera = false;
	var el = document.querySelector('#elemento');
	el.onclick = () => {
		if(!bandera) { 
			el.classList.add('rojo');
			bandera = true;
		}
		else {
			el.classList.remove('rojo');
			bandera = false;
		}

		/* Hace lo mismo que la comparación anterior
		if(!el.classList.contains('rojo'))
			el.classList.add('rojo');
		else
			el.classList.remove('rojo');

		
		Hace lo mismo pero con una sola línea de código

		el.classList.toggle('rojo');

		*/
	}
}