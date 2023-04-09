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
    for (i = 0; i < 5; i ++) {
        console.log("the number is" + 1);
    }
  }

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
