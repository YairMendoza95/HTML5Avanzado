window.addEventListener('load', init);

var canvas, ctx, video, boton, bandera = false;
window.requestAnimationFrame = (function () {
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function (f) {
		window.setTimeout(f, 1000 / 60);
	}
})();

function init () {
	video = document.getElementById('video');
	boton = document.getElementById('scrshot');
	boton.addEventListener('click', srcshot);
	navigator.getUserMedia = (
		navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia
	);

	if(navigator.getUserMedia){
		navigator.getUserMedia({video: true}, (stream) => {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, (error) => {
			console.log(error);
		});
	}
	else {
		alert("Tu navegador no soporta User Media");
	}
	canvas = document.getElementById('foto');
	ctx = canvas.getContext('2d');
	video.addEventListener('loadedmetadata', () => {
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		bandera = true;
		draw();
	});

}

function draw () {
	ctx.drawImage(video, 0, 0);
	invertir(canvas, ctx);
	requestAnimationFrame(draw);
}

function srcshot () {
	if(!bandera){
		alert("No puedes tomar fotos en este momento");
		return;
	}

	var imgData = canvas.toDataURL('image/png');
	document.getElementById('miFoto').setAttribute('src', imgData);
}

function invertir (canvas, ctx) {
	// Guarda los pixeles de la imagen y los guarda en una matriz
	var datosImagen = ctx.getImageData(0, 0, canvas.width, canvas.height); 
	var datos = datosImagen.data;
	for (var i = 0; i < datos.length; i += 4) {
		datos[i] = 255 - datos[i];
		datos[i + 1] = 255 - datos[i + 1];
		datos[i + 2] = 255 - datos[i + 2];
	}
	ctx.putImageData(datosImagen, 0, 0);
}

function blackWhite (canvas, ctx) {
	var datosImagen = ctx.getImageData(0, 0, canvas.width, canvas.height);
	var datos = datosImagen.data;
	for (var i = 0; i < datos.length; i += 4) {
		var auxiliar = 0.34 * datos[i] + 0.5 * datos[i + 1] + 0.16 * datos[i + 2];
		datos[i] = auxiliar;
		datos[i + 1] = auxiliar;
		datos[i + 2] = auxiliar;
	}
	ctx.putImageData(datosImagen, 0, 0);
}

function sepia (canvas, ctx) {
	var datosImagen = ctx.getImageData(0, 0, canvas.width, canvas.height);
	var datos = datosImagen.data;
	for (var i = 0; i < datos.length; i += 4) {
		datos[i] = datos[i] * 0.393 + datos[i + 1] * 0.769 + datos[i + 2] * 0.189;
		datos[i + 1] = datos[i] * 0.393 + datos[i + 1] * 0.686 + datos[i + 2] * 0.168;
		datos[i + 2] = datos[i] * 0.272 + datos[i + 1] * 0.534 + datos[i + 2] * 0.131;
	}
	ctx.putImageData(datosImagen, 0, 0);
}