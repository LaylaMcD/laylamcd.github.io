function howdy(firstName) { firstName = "Layla"
    alert("Howdy " + firstName);
}

function conditional (){ 
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
      alert("Good morning!");
    } else if (currentHour < 18) {
      alert("Good day!");
    } else {
      alert("Good evening!");
    }
  }
function getMinutes(){
  var date = new Date();
	var current_time = date.getMinutes();
	document.getElementById("p1").innerHTML = current_time;
}
  

  function myFunction() {
    document.getElementById("myDIV").style.display = "none";
  }

  function scopeValue (){
    if (0==0) {
      var x = 0;
      var y = 1;
    } else {
      alert("Why is 0 not 0?")
    };
    

    
  const z = x;
  alert("Use Inspect to see the console and inspect the code.")
  console.log("Check the sources to see this code and study the scope of the code.")
  console.log("Value of x as originally declared: " + x);
  console.log("Value of y as originally declared: " + y);
  var x = x+2;
  console.log("Value of x + 2:" + x);
  console.log("Value of z: " + z + " does not change.");
};

  function evalNumber(){
    var inputValue = (prompt("Enter any number without commas"))
    if (isNaN(inputValue)) {
      alert(inputValue + " is not a number.")
    } else if (inputValue%2==0){
      alert(inputValue + "is an even number.")
    } else {
      alert(inputValue + "is an odd number.")
    }
  }
  function eval5Number(){
    var inputValue = (prompt("Enter any five-digit number without commas"))
    if (isNaN(inputValue)) {
      alert(inputValue + " is not a number.")
    } else if (inputValue.toString().length !=5){
      alert(inputValue + "is not a 5digit number.")
    } else if(inputValue%2 == 0){
      alert(inputValue + "is an even number.")
    } else {
      alert(inputValue + "is an odd number.")
    }
  }

  function changeTitle(){
    let selectedElement = document.getElementById("programCard");
    console.log(selectedElement);
    selectedElement.innerText = "DIGS";
  }

  function parentFunction(){
    let a = 1;
    function childFunction()
    {
      var b = a + 2;
      return b;
    }
    return childFunction();
  }
  
  function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [34.020882, -6.841650];
  
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
    .bindPopup("<b>Rabat<br>Morocco</b>").openPopup();

    L.marker([31.5125, -9.77]).addTo(map)
    .bindPopup("<b>Essaouira</b>").openPopup();
  
    L.marker([33.873016, -5.540730]).addTo(map)
    .bindPopup("<b>Meknes</b>").openPopup();

    L.marker([31.284832194 -4.27166558]).addTo(map)
    .bindPopup("<b>Rissani</b>").openPopup();
  
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

  function graduate(){
    var inputValue = (prompt("Enter in your graduation date in four digits"))
    if(inputValue == 2023){
        alert("Congratulations on your upcoming graduation!")
    } else if(inputValue > 2023){
        alert("You're almost there!")
    } else(
        alert("You're an alum")
    )
    }

    function handleClick(event){
      event.target.id == 'show' ? showAlert(): evalNumber;
    }
function CountrySpotter(){
  var country = prompt("Enter the country of your choosing")
  if (country == "Germany", "Italy", "Japan"){
    alert("The country you have chosen was an axis power during World War II")
  } else if(country == "USA", "Great Britain" , "Soviet Union"){
    alert("The country you have chosen was an allied power during World War II")
  }

}
    function ArrayFunction() { 
      arrayToPass = ["Greece", "Egypt", "Lebanon"];
            
    unmodifiableFunction.apply(null, arrayToPass);
  }
      
  function unmodifiableFunction(a, b, c) {
    document.getElementById("gfg").innerHTML = `First value is: ${a}
    Second value is: ${b}
    Third value is:  ${c}`
  }

  
  document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("button_01");
    btn1.addEventListener('click', conditional);

    const btn2 = document.querySelector('#button_02');
    btn2.addEventListener('click', howdy);

    const btn3 = document.querySelector('#button_03');
    btn3.addEventListener('click', scopeValue);

    const btn4 = document.querySelector('#button_04');
    btn4.addEventListener('click', evalNumber);

    const btn5 = document.querySelector('#button_05');
    btn5.addEventListener('click', eval5Number);

    const btn6 = document.querySelector('#button_06');
    btn6.addEventListener('click', (e) => {
      console.log(e);
      alert('A nested function has access to variables in the parent function: 2 + 1 = ' + parentFunction());
    })

    const btn7 = document.querySelector('#button_07');
    btn7.addEventListener('click', graduate);
  })