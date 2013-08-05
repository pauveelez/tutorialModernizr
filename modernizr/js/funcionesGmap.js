    var latitud;
    var longitud;

    $(document).ready(function() {
        localizame(); /*Cuando cargue la página, cargamos nuestra posición*/   
    });

    function localizame() {
        navigator.geolocation.getCurrentPosition(coordenadas, errores);
    }

    function coordenadas(position) {
        latitud = position.coords.latitude; /*Guardamos nuestra latitud*/
        longitud = position.coords.longitude; /*Guardamos nuestra longitud*/				
        cargarMapa();
    }

    function errores(err) {
    /*Controlamos los posibles errores */
        if (err.code == 0) {
          alert("Oops! Algo ha salido mal");
        }
        if (err.code == 1) {
          alert("Oops! No has aceptado compartir tu posición");
        }
        if (err.code == 2) {
          alert("Oops! No se puede obtener la posición actual");
        }
        if (err.code == 3) {
          alert("Oops! Hemos superado el tiempo de espera");
        }
    }

    function cargarMapa() {
        $('#map_canvas').gMap({
        	markers: [{ 
                            latitude: latitud, 
                            longitude: longitud,
                            html: 'Tu ubicación',
                            title: "Mi ubicación",
                        }],
            zoom:15,
            controlsStyle: {
                mapType: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                zoom:    google.maps.ZoomControlStyle.LARGE
            }  
        });
    }

