
function animalizame(text){

    // first we need to clean this text, people write a lot of shit.
    text = text.trim();
    // then...
    // this speech to text speaks Español chileno y que wea?
    if(text.length === 0){
        speech("niuna wea");
    }else{
        speech(text);
    }

    
}

function speech(blabla){
    for (let i = 0; i < blabla.length; i++) {
        const letra = blabla[i];
        if(letra === 'a'){ 
            Talk(letra);
        }
    }
    alert(blabla)
}


function Talk(file){
    var sound = new Howl({
        src: ['sounds/'+file+'.mp3'],
        html5: 'true',
        preload : 'true'
      });
    sound.play();
}

