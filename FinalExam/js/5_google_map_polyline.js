<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Google map basic</title>
  </head>
  <body>
    <h1>My First Google Map</h1>

    <div id="googleMap" style="width:100%;height:400px;"></div>

    <script>
    function myMap() {
      var myLatLng={lat: 51.508742, lng: -0.120850};

      var map = new google.maps.Map(document.getElementById("googleMap"), {
        center: myLatLng,
        zoom:4
      });

      var myTrip = [
        {lat: 58.969975, lng: 5.733107}, //stavanger
        {lat: 52.370216, lng: 4.895168}, //amsterdam
        {lat: 51.508742, lng: -0.120850} //London
      ];
      var flightPath = new google.maps.Polyline({
        path:myTrip,
        strokeColor:"#0000FF",
        strokeOpacity:0.8,
        strokeWeight:2
      });
      flightPath.setMap(map);
    }
    </script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhsBnVJLEWy6V-dAW-yDL8Z5KLCeHZ9gQ&callback=myMap"></script>

  </body>
</html>
