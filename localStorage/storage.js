function Lista (clave) {
	this.clave = clave;

	this.agregarActividad = (actividad) => {
		if(this.validarNavegador()){
			if (localStorage.getItem(this.clave)) {
				// Conviert el json a un arreglo
				var actividades = JSON.parse(localStorage.getItem(this.clave)); // Se recupera la informacion que hay 
			}
			else {
				var actividades = []; // En caso de no haber informacion crea el arreglo desde cero
			}
			actividades.push(actividad);
			// Convierte un arreglo en un json
			localStorage.setItem(this.clave, JSON.stringify(actividades));
			return true;
		}
		return false;
	}

	this.obtenerActividades = () => {
		if(localStorage.getItem(this.clave) != "undefined"){
			return JSON.parse(localStorage.getItem(this.clave));
		}
		return null;
	}

	this.eliminarActividades = () => {
		localStorage.removeItem(this.clave);
	}

	this.eliminarActividad = (actividad) => {
		var activi = JSON.parse(localStorage.getItem(this.clave));
		actividades = actividades.filter((i) => {
			return i != actividad;
		});
		localStorage.setItem(this.clave, JSON.stringify(actividades));
	}

	// Valida si el navegador soporta Local Storage
	this.validarNavegador = () => {
		if(typeof(Storage) !== "undefined") return true;
		return false;
	}
}