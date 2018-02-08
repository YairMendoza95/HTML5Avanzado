window.addEventListener('load', init);
function init () {
	// Sirve para verificar cual de todos es soportado por el navegador
	/* navigator.getUserMedia = {
		navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia
	}*/

	var video = document.getElementById('video');
	if(navigator.getUserMedia){
		navigator.getUserMedia({video: true, audio: true}, (stream) => {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, (e) => {
			console.log(e);
		});
	}
	else {
		alert("Tu navegador no soprta User Media");
	}
}