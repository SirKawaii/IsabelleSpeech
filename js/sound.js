// define the fucking alphabet
var letters = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z").split(',');
var alphabet = new Howl({
    src: ['sounds/abc.mp3'],
    onplayerror: function(){
        alphabet.once('unlock', function(){
            console.log("audio unlocked");
        });
    },
    html5: 'true',
    preload : 'true',
    pool : 100,
    html5PoolSize : 100,
    sprite: {
        a: [0, 325],
        b: [404, 331],
        c: [784, 348],
        d: [1241, 200],
        e: [1593, 140],
        f: [1896, 290],
        g: [2262, 200],
        h: [2600, 300],
        i: [3011, 100],
        j: [3269, 250],
        k: [3596, 100],
        l: [3826, 200],
        m: [4175, 250],
        n: [4558, 250],
        ñ: [4945, 200],
        o: [5342, 100],
        p: [5624, 100],
        q: [5934, 100],
        r: [6210, 200],
        s: [6649, 200],
        t: [7067, 100],
        u: [7276, 150],
        v: [7576, 200],
        w: [10249, 200],
        x: [8524, 380],
        y: [8914, 400],
        z: [9464, 300]
    }
});

function animalizame(text){
    // first we need to clean this text, people write a lot of shit.
    text = text.trim();
    console.log(text);
    // then...
    // this speech to text speaks Español chileno y que wea?
    if(text.length === 0){
        speech("niuna wea");
    }
    else{
        speech(text);
    }
}

function speech(blabla){
    for (let i = 0; i < blabla.length; i++) {
        const letra = blabla[i];
        if(letra in letters){
            console.log(letra);
            Vocalize(letra);
        }else{
            Vocalize("e");
        }
    }
    console.log("Animal says:  ${blabla}.")
}


function Vocalize(letter_spoke){
    // need work, hard work
    setTimeout(() => {
        alphabet.play(letter_spoke);
    }, alphabet.duration(letter_spoke));
    alphabet.stop(letter_spoke);
}

//  vocalize for each letter writen.
function VocalizeInput(inputObj){
    let text = inputObj.value;
    let letra = text.substring(text.length - 1);
    alphabet.play(letra);
}





