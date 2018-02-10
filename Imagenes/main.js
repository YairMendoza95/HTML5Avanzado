window.addEventListener('load', init);

var canvas, ctx, video;

function init () {
	video = document.getElementById('video');
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
	});
}

function draw () {
	
}