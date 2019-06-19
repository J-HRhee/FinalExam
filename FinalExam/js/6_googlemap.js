function myMap(){
  var MyLoc={lat:47.55091657675766, lng:127.07578221189056};
  var map=new google.maps.Map(document.getElementById("card"),{
    center:MyLoc,
    zoom:16,
  });
}
