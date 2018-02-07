window.addEventListener('load', init);
var video, volumen, progreso;
function init () {

	video = document.getElementById('video');
	//progreso = document.getElementById('progreso');
	volumen = document.getElementById('volumen');
	document.getElementById('reproducir').addEventListener('click', ponerPlay);
	document.getElementById('pausa').addEventListener('click', pausar);
	document.getElementById('stop').addEventListener('click', parar);
	volumen.addEventListener('change', cambiarVolumen);
	video.addEventListener('timeupdate', actualizarTiempo);
	
	// Roconocimiento de voz
	var sr = new webkitSpeechRecognition();
	sr.continuous = true; // Define si el reconocimiento de voz va a ser continuo
	sr.interinResults = true; // Define si vamos a tener acceso a lo que el usuario este diciendo mientra hable o hasta que termine 
	sr.lang = "es"; // Define el lenguaje
	sr.start();
	sr.onresult = (e) => {
		for (var i = e.resultIndex; i < e.results.length; ++i) {
			if(e.results[i].isFinal){
				var palabra = e.results[i][0].trascript.replace(/\s/g, "");
				if(palabra == "reproducir"){
					ponerPlay();
				}
				if(palabra == "pausar"){
					pausar();
				}
				if(palabra == "silenciar"){
					video.volume = 0;
					cambiarVolumen();
				}
				if(palabra == "escuchar"){
					video.volume = 0.8;
					cambiarVolumen();
				}
				if(palabra == "detener"){
					parar();
				}
				console.log(palabra);
			}
		}
	}
}

function ponerPlay(){
	video.play();
}

function pausar () {
	video.pause();
}

function parar () {
	video.pause();
	video.currentTime = 0;
}

function cambiarVolumen () {
	video.volume = volumen.value;
}

function actualizarTiempo () {
	document.querySelector('#tiempo').innerHTML = video.currentTime;
	var porcentaje = (video.currentTime * 100) / video.duration;
	document.querySelector("#porcentaje").style.width = porcentaje + "%";
}