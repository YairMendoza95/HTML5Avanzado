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