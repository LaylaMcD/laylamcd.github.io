var sound = new Howl({
    src: ['/chalkboard/oud.mp3']
  });
  
  sound.play();
 
  document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("animal01");
    btn1.addEventListener('click', playAnimal(Cow));
  });

function playAnimal(animalSound) {
  var sound = new Howl({
    src: [`media/${animalSound}.mp3`, `media/${animalSound}.webm`],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
    }
  });
  sound.play(animalSound);
}



 function lastItem(arr) {
    document.getElementById('originalArray').innerHTML = "Original array: " + JSON.stringify(arr);
    var lastItem = arr.slice().sort()[arr.length - 1];
    document.getElementById('lastAlphabetically').innerHTML = "Last item:" + lastItem;
    console.log(lastItem);
  }

  function alphabetize(){
    var fruit = document.getElementById('fruit').value.toLowerCase();
    var animal = document.getElementById('animal').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;


    var alphaOrig = [fruit,animal, state,country];
    document.getElementById('alphaOrig').innerHTML = "Original order: " + alphaOrig.join(", ");

    var alphaOutput = alphaOrig.slice().toLowerCase().sort()
    document.getElementById('alphaOutput').innerHTML = "Alphabetical order: " + alphaOutput.join(", ");
  }
