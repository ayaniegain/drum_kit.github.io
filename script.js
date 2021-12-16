document.addEventListener("keypress",hello)


function hello(e) {


    
    if(e.key=="a"){

        const music = new Audio('sounds/boom.wav');
        music.play();

        
var element = document.querySelector(".one");
element.classList.add("btn");
    }else if(e.key=="s"){

        const music = new Audio('sounds/clap.wav');
        music.play();
    }else if(e.key=="d"){

        const music = new Audio('sounds/hihat.wav');
        music.play();
    }else if(e.key=="f"){

        const music = new Audio('sounds/kick.wav');
        music.play();
    
    }else if(e.key=="g"){

        const music = new Audio('sounds/openhat.wav');
        music.play();

    }else if(e.key=="h"){

        const music = new Audio('sounds/ride.wav');
        music.play();
    
    }else if(e.key=="j"){

        const music = new Audio('sounds/snare.wav');
        music.play();
    
    }else if(e.key=="k"){

        const music = new Audio('sounds/tink.wav');
        music.play();
    
    }else if(e.key=="l"){

        const music = new Audio('sounds/tom.wav');
        music.play();
    }
}
