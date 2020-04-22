// define the fucking alphabet
let pitch_value = 1.0;
let letters = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z,").split(',');
let alphabet = new Howl({
    src: ['sounds/abc3.mp3'],
    volume: 1,
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
        z: [9464, 300],
        silence: [10864, 500]
    }
});


function UpdatePitch(slider){
    console.log(slider.value)
    pitch_value = slider.value;
}

function animalizame(text){
    // first we need to clean this text, people write a lot of shit.
    text = text.toLowerCase().trim();
    // then...
    // this speech to text speaks Español chileno y que wea?
    if(text.length === 0){
        speech('niuna wea');
    }
    else{
        speech(text);
    }
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





