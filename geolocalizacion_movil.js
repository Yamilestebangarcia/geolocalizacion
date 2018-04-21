if ("geolocation" in navigator) {
    /* la geolocalización está disponible */
    alert("localizando");
    navigator.geolocation.getCurrentPosition(
     (position) => {      
       document.getElementById("x").value = position.coords.latitude;
         document.getElementById("y").value=position.coords.longitude;
         document.getElementById("z").value=position.coords.altitude;
         document.getElementById("exactitud").value=position.coords.accuracy;
         document.getElementById("form").submit();         
     });
/*uso de cookis */
 
  
} else {
    /* la geolocalización NO está disponible */
    alert("no te puedo localizar");
}
