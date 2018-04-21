if ("geolocation" in navigator) {
    /* la geolocalización está disponible */
    alert("localizando");
    navigator.geolocation.getCurrentPosition(
     (position) => {      
       let  latitud = position.coords.latitude;
       let longitud= position.coords.longitude;
       let altitud = position.coords.altitude;
       let  exactitud= position.coords.accuracy;
       document.cookie = `latitud=${latitud}`;
       document.cookie = `longitud=${longitud}`;
       document.cookie = `altitud=${altitud}`;
       document.cookie = `exactitud=${exactitud}`;
         
        /*location.href ="http://localhost/geofoto/nuevodestino.php";*/
     });

 
  
} else {
    /* la geolocalización NO está disponible */
    alert("no te puedo localizar");
}
