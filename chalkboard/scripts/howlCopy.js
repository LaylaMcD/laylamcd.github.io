$(function(){
    var animalTitles = $('.animalTitle');
//where element = h2 in html//
    const animalObject = new Object();
    for(element of animalTitles) { 

    animalObject[element.nextElementSibling.id] = element.nextElementSibling.alt;

}

for (const e in animalObject){
    //for every animal01, 02, 03, 04
    //add event listener that passes the animal name to function.
    //where #${e} = for the element on the page that has this id listener, pass to Howler script
    $(`#${e}`).on('click', function(){
        playAnimal(animalObject[e]);
    })
}

for (const property in animalObject){
    $('#' + property).hover(mouseOverHandler, mouseOutHandler)

for (const property in animalObject){
 $('#' + property.on({
    'mouseover': function () {
        $(this).css('border', '3px solid red')
    },
    'mouseout': function () {
        $(this).css('border', '0px');
    }

 }));
}
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
  