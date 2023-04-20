function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [33.510414, 36.278336];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF5bGFtY2QiLCJhIjoiY2xnOXFkMnU2MGMxcDNmcDd5cGZlYTg4dCJ9.pIWnOMdwkXcxoNANfD3_7Q';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>Syria<br>Damascus</b>").openPopup();

    L.marker([32.927778, 35.081667]).addTo(map)
    .bindPopup("<b>Acre</b>").openPopup();
  
    L.marker([30, 31.233333]).addTo(map)
    .bindPopup("<b>Egypt<br>Fustat</b>").openPopup();

    L.marker([35.833333, 10.633333]).addTo(map)
    .bindPopup("<b>Tunisia<br>Sousse</b>").openPopup();
  
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }

  $('.carousel').carousel({
    interval: 2000
  })

 function addElements(){
  var valueArray = ['How to Add', 'HTML elements', 'to a page'];
  for (i in valueArray) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'row');
    newDiv.setAttribute('id', 'div'+i);
    document.getElementById('addElements').appendChild(newDiv);
    newDiv.innerText = valueArray[i];
  };
 }