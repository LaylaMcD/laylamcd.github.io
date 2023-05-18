document.addEventListener('DOMContentLoaded', () => {
    
    const images = document.getElementsByTagName('img');
for (let i in images) {

    images[i].addEventListener('click', () => {
      const animal = images[i].getAttribute('id');
      playAnimal(animal)});

    images[i].addEventListener('mouseover', function() {
      this.style.border = '3px solid blue';
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