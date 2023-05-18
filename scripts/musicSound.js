

  document.addEventListener('DOMContentLoaded', () => {
    
    const images = document.getElementsByTagName('img');
for (let i in images) {

    images[i].addEventListener('click', () => {
      const instrument = images[i].getAttribute('id');
      playInstrument(instrument)});

    images[i].addEventListener('mouseover', function() {
      this.style.border = '3px solid blue';
  });

    images[i].addEventListener('mouseout', function() {
      this.style.border = '0px';
      });
    }
  })

function playInstrument(instrumentsound) {
  var sound = new Howl({
    src: [`/musicMedia/${instrumentsound}.mp3`],
    sprite: {
      Oud: [0, 6000],
      Sitar: [0, 6000],
      Qanun: [0, 6000],
    }
  });
  sound.play(instrumentsound);
}

//const btn1 = document.getElementById("instrument01");
    //btn1.addEventListener('click', () => playInstrument('Oud'));

    //const btn2 = document.getElementById("instrument02");
    //btn2.addEventListener('click', () => playInstrument('Sitar'));

    //const btn3 = document.getElementById("instrument03");
    //btn3.addEventListener('click', () => playInstrument('Qanun'));
