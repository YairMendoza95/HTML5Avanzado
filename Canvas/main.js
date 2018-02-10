window.addEventListener('load', init);
function init () {
	var canvas = document.getElementById('imagen');
	var contexto = canvas.getContext('2d');
	// Cuadrado - Es la unica figura que se puede hacer con un solo método
	contexto.fillStyle = '#890';
	contexto.fillRect(100, 100, 200, 200);

	// Rectangulo con solo borde
	contexto.fillStyle = '#123456';
	contexto.strokeRect(10, 10, 50, 50);


}