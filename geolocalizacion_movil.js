if ("geolocation" in navigator) {
    /* la geolocalización está disponible */
    alert("localizando");
    navigator.geolocation.getCurrentPosition(
    //navigator.geolocation.watchPosition(
     (position) => {      
       document.getElementById("x").value = position.coords.latitude;
         document.getElementById("y").value=position.coords.longitude;
         document.getElementById("exactitud").value=position.coords.accuracy;
          document.getElementById("z").value=position.coords.altitude;
         document.getElementById("exactitud_altura").value=position.coords.altitudeAccuracy;
        // document.getElementById("form").submit();         
     });
/*uso de cookis */
 
  
} else {
    /* la geolocalización NO está disponible */
    alert("no te puedo localizar");
}
