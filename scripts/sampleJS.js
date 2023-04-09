function howdy(firstName) { firstName = "Layla"
    alert("Howdy " + firstName);
}

function conditional (){ 
    alert("Use Inspect to see the console and inspect the code.");
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
      alert("Good morning!");
    } else if (currentHour < 18) {
      alert("Good day!");
    } else {
      alert("Good evening!");
    }
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
    var inputValue = (prompt("Enter any five-digit number without commas"))
    if (isNaN(inputValue)) {
      alert(inputValue + " is not a number.")
    } else if (inputValue%2==0){
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
