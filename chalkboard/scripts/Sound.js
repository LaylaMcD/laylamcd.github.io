var sound = new Howl({
  src: ['/chalkboard/oud.mp3'],
  sprite: {
    oud: [0, 3000]
  }
});

sound.play('oud');

 
  document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("animal01");
    btn1.addEventListener('click', playInstrument('Cow'));

    const btn2 = document.getElementById("animal02");
    btn2.addEventListener('click', playInstrument('Duck'));

    const btn3 = document.getElementById("animal03");
    btn3.addEventListener('click', playInstrument('Horse'));

    const btn4 = document.getElementById("animal04");
    btn4.addEventListener('click', playInstrument('Fox'));

    const btn5 = document.getElementById("Oud");
    btn5.addEventListener('click', playInstrument('Oud'));

    const btn6 = document.getElementById("Sitar");
    btn6.addEventListener('click', playInstrument('Sitar'));

    const btn7 = document.getElementById("Qanun");
    btn7.addEventListener('click', playInstrument('Qanun'));

  });

function playInstrument(Sound) {
  var sound = new Howl({
    src: [`chalkboard/media/Cow.mp3`, `chalkboard/media/Cow.webm`, 
          `chalkboard/media/Duck.mp3`, `chalkboard/media/Duck.webm`, 
          `chalkboard/media/Fox.mp3`, `chalkboard/media/Fox.webm`, 
          `chalkboard/media/Horse.mp3`, `chalkboard/media/Horse.webm`,
          `chalkboard/oud.mp3`, `chalkboard/media/Horse.mp3`,
          `chalkboard/media/Horse.mp3` ],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
      Oud: [0, 3000],
      Sitar: [0, 3000],
      Qanun: [0, 3000],
    }
  });
  sound.play('Sound');
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
