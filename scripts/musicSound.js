

  document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById("instrument01");
    btn1.addEventListener('click', () => playInstrument('Oud'));

    const btn2 = document.getElementById("instrument02");
    btn2.addEventListener('click', () => playInstrument('Sitar'));

    const btn3 = document.getElementById("instrument03");
    btn3.addEventListener('click', () => playInstrument('Qanun'));

  });

function playInstrument(instrumentsound) {
  var sound = new Howl({
    src: [`/musicMedia/${instrumentsound}.mp3`, `/musicMedia/${instrumentsound}.webm`],
    sprite: {
      Oud: [0, 6000],
      Sitar: [0, 6000],
      Qanun: [0, 6000],
    }
  });
  sound.play(instrumentsound);
}

