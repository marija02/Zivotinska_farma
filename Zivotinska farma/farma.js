// var cow = document.getElementById("myAudio");
// var chicken = document.getElementById("myAudio2");
// var guska = document.getElementById("myAudio3");
// var sheep = document.getElementById("myAudio4");
// var pig = document.getElementById("myAudio5");

// function playAudio() {
//     cow.play();
// }

// function pauseAudio() {
//     cow.pause();
// }

// function playAudio2() {
//     chicken.play();
// }

// function pauseAudio2() {
//     chicken.pause();
// }

// function playAudio3() {
//     guska.play();
// }

// function pauseAudio3() {
//     guska.pause();
// }

// function playAudio4() {
//     sheep.play();
// }

// function pauseAudio4() {
//     sheep.pause();
// }

// function playAudio5() {
//     pig.play();
// }

// function pauseAudio5() {
//     pig.pause();
// }

let obj = {
    'krava': {
        //zvuk: '.audio/ofarm.mp3',
        //slika: '.slika/pig.jpg',
        opis: 'Krava je domaca zivotinja'
    },

    'kokoska': {
        //  zvuk: '.audio/ofarm.mp3',
        //slika: './slike/sheep.jpg',
        opis: 'Kokoska je domaca zivotinja'
    },

    'guska': {
        zvuk: '.audio/ofarm.mp3',
        slika: './slike/sheep.jpg',
        opis: 'Guska je domaca zivotinja'
    },

    'ovca': {
        // zvuk: '.audio/ofarm.mp3',
        //slika: './slike/sheep.jpg',
        opis: 'Ovca je domaca zivotinja'
    },

    'svinja': {
        //  zvuk: '.audio/ofarm.mp3',
        // slika: './slike/sheep.jpg',
        opis: 'Svinja je domaca zivotinja'
    }

}
let slike = document.getElementsByTagName('img');
console.log(slike);
brSlika = slike.lenght;
for (let i = 0; i < brSlika; i++) {
    slike[i].addEventListener('mouseover', function() {
        console.log(this, obj[this.alt].opis);
        //$('.modal-body').text(obj[this.alt].opis);

    });
}