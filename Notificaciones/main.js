if(window.webkitNotifications) {
	alert("Tu navegador no soporta esta funcionalidad");
}
window.addEventListener('load', init);

function init () {
	document.querySelector('#activar').addEventListener('click', () => {
		if(window.webkitNotifications.checkPermission() == 0) createNotification();
		else window.webkitNotifications.requestPermission();
	});
}

function createNotification(){
	var notificacion = window.webkitNotifications.createNotification(""/* Imagen */, "Uso de Notification API", "¡Omedeto!");
	notificacion.show();
	notificacion.addEventListener('display', () => {
		document.querySelector('#aviso').innerHTML = "Mostrando notificación";
	});
	notificacion.addEventListener('close', () => {
		document.querySelector('#aviso').innerHTML = "Notificación cerrada";
	});
}