if ("geolocation" in navigator) {
    /* la geolocalización está disponible */
    //alert("localizando");
    navigator.geolocation.getCurrentPosition(
        (position) => {
            document.getElementById("x").value = position.coords.latitude;
            document.getElementById("y").value = position.coords.longitude;
            document.getElementById("exactitud").value = position.coords.accuracy;
            document.getElementById("z").value = position.coords.altitude;
            document.getElementById("exactitud_altura").value = position.coords.altitudeAccuracy;
            document.getElementById("form").submit();
        });
} else {
    /* la geolocalización NO está disponible */
    alert("no te puedo localizar");
    location.href = "http: //localhost/geofoto/tarjeta.php";
}
