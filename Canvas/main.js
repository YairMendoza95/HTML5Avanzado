window.addEventListener('load', init);
function init () {
	var canvas = document.getElementById('imagen');
	var contexto = canvas.getContext('2d');

	// Cuadrado - Es la unica figura que se puede hacer con un solo método
	// contexto.fillRect(x, y, largo, alto);
	contexto.fillStyle = '#890';
	contexto.fillRect(100, 100, 200, 200);
	
	// Rectangulo con solo borde
	contexto.strokeStyle = '#123456'; // Añade color al borde
	contexto.lineWidth = 5; // Cambia el grosor del borde
	contexto.strokeRect(10, 10, 50, 50);

	// Circulos
	// contexto.arc(x,y,radio,origen, arco(cualquier numero arriba de 6.28 dibujara un circulo)); contexto.fil();
	contexto.fillStyle = "#2bcade";
	contexto.beginPath();
	contexto.arc(400, 400, 50, 0, 7);
	//contexto.closePath(); No siempre se utiliza, sirve para cerrar la figurar de donde inicio hasta donde de dejo de dibujars
	contexto.fill(); // contexto.stroke();

	contexto.strokeStyle = 'blue';
	contexto.lineWidth = 10;
	contexto.beginPath();
	contexto.moveTo(400,400); // Ubica nuestro lápiz en esa posición
	contexto.lineTo(400,10);
	contexto.lineTo(300,400);
	contexto.closePath();
	contexto.fill();
	contexto.lineWidth = 2;
	contexto.font = "36pt Arial";
	contexto.strokeText("Triangulo",135,140);
}