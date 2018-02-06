var marcador, marcadorReal;

//google.maps.event.addDomListener(window, "load", drawMap);
function drawMap () {
	var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        	var pos = {
            	lat: position.coords.latitude,
            	lng: position.coords.longitude
        	};

        	infoWindow.setPosition(pos);
        	infoWindow.setContent('Posición Actual');
        	map.setCenter(pos);
        	marcador = new google.maps.Marker({
        		map: map,
        		position: pos,
        		visible: true
        	});

        	marcadorReal = new google.maps.Marker({
        		map: map,
        		position: pos,
        		visible: true
        	});
        	navigator.geolocation.watchPosition(actualizarPosicion, (error)=>{console.log(error)}, {maximumAge: 0})
    	}, function() {
	        handleLocationError(true, infoWindow, map.getCenter());
        });
   } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
function actualizarPosicion (posicion) {
	var geolocation = new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude);
	marcadorReal = setPosition(geolocation);
	map.setCenter(geolocation);
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: El servicio de geolocalización falló.' : 'Error: Tu navegador no soporta la geolocalización');
}