// define the fucking alphabet
let pitch_value = 1.0;
let audioSprite = new Audio('sounds/abc3.mp3');
let letters = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z,").split(',');
let alphabet = {
    a: {
        start: 0,
        length: 325
    },
    b: {
        start: 404,
        length: 331
    },
    c: {
        start: 784,
        length: 348
    },
    d: {
        start: 1241,
        length: 200
    },
    e: {
        start: 1593,
        length: 140
    },
    f: {
        start: 1896,
        length: 290
    },
    g: {
        start: 2262,
        length: 200
    },
    h: {
        start: 2600,
        length: 300
    },
    i: {
        start: 3011,
        length: 100
    },
    j: {
        start: 3269,
        length: 250
    },
    k: {
        start: 3596,
        length: 100
    },
    l: {
        start: 3826,
        length: 200
    },
    m: {
        start: 4175,
        length: 250
    },
    n: {
        start: 4558,
        length: 250
    },
    ñ: {
        start: 4945,
        length: 200
    },
    o: {
        start: 5342,
        length: 100
    },
    p: {
        start: 5624,
        length: 100
    },
    q: {
        start: 5934,
        length: 100
    },
    r: {
        start: 6210,
        length: 200
    },
    s: {
        start: 6649,
        length: 200
    },
    t: {
        start: 7067,
        length: 100
    },
    u: {
        start: 7276,
        length: 150
    },
    v: {
        start: 7576,
        length: 200
    },
    w: {
        start: 10249,
        length: 200
    },
    x: {
        start: 8524,
        length: 380
    },
    y: {
        start: 8914,
        length: 400
    },
    z: {
        start: 9464,
        length: 300
    },
    silence: {
        start: 10864,
        length: 500
    }
};

function toSeconds(miliseconds){
    let seconds = Math.floor(miliseconds / 1000);
    if(seconds <= 0){
        seconds += 1;
    }
    return seconds;
}

let currentSprite = {};



let onTimeUpdate = function(){
    if(this.currentTime >= toSeconds(currentSprite.start) + toSeconds(currentSprite.length)){
        this.pause();
    }
};



audioSprite.addEventListener('timeupdate', onTimeUpdate, false);

var playSprite = function(id) {
    if (alphabet[id] && alphabet[id].length) {
        currentSprite = alphabet[id];
        audioSprite.currentTime = toSeconds(currentSprite.start);
        audioSprite.play();
        console.log('play'  +  id);
    }
};

function UpdatePitch(slider){
    pitch_value = slider.value;
}

function animalizame(text){
    // first we need to clean this text, people write a lot of shit.
    text = text.toLowerCase().trim();
    // then...
    // this speech to text speaks Español chileno y que wea?
    playSprite('g');

    playSprite('z');
    // if(text.length === 0){
    //     speech('niuna wea');
    // }
    // else{
    //     speech(text);
    // }
}

function speech(blabla){

    for (let i = 0; i < blabla.length; i++) {
        const letra = blabla[i];
        if(letters.includes(letra)){
            let current = alphabet.play(letra);
            alphabet.rate(pitch_value, current);
            setTimeout(() => {
                //wait
            }, alphabet.duration(current));

        }else if(letra === " "){
            alphabet.play('silence');
            setTimeout(() => {
                //wait
            }, 500);
        }else{
            console.log(`Letter not found: ${letra}. 😱 `);
        }

    }
}

//  vocalize for each letter writen.
function VocalizeInput(inputObj){
    let text = inputObj.value;
    let letra = text.substring(text.length - 1);
    alphabet.play(letra);
}





