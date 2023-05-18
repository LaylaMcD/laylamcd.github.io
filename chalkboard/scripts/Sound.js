var sound = new Howl({
  src: ['/media/oud.mp3'],
  sprite: {
    oud: [0, 3000]
  }
});

sound.play('oud');


  document.addEventListener('DOMContentLoaded', () => {

    const images = document.getElementsByTagName('img');
for (let i in images) {

  images[i].addEventListener('click', () => {
    const animal = images[i].getAttribute('id');
    playAnimal(animalsound)});

  images[i].addEventListener('mouseover', function() {
    this.style.border = '3px solid red';
  });

  images[i].addEventListener('mouseout', function() {
    this.style.border = '0px';
  });
}
})

function playAnimal(animalsound) {
  var sound = new Howl({
    src: [`/media/${animalsound}.mp3`, `/media/${animalsound}.webm`],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
      
    }
  });
  sound.play(animalsound);
}


//  document.addEventListener('DOMContentLoaded', () => {  
   // const btn1 = document.getElementById("animal01");
   // btn1.addEventListener('click', () => playAnimal('Cow'));

   // const btn2 = document.getElementById("animal02");
    // btn2.addEventListener('click', () => playAnimal('Duck'));

    // const btn3 = document.getElementById("animal03");
    // btn3.addEventListener('click', () => playAnimal('Horse'));

    // const btn4 = document.getElementById("animal04");
    // btn4.addEventListener('click', () => playAnimal('Fox'));
  //});
