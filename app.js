// SELECTORS 
const shuffleButton = document.getElementById("shuffleButton");
let inputAttempts = document.getElementById("inputAttempts");
let inputScores = document.getElementById("inputScores");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");

// VARIABLES FOR TO THE BEGINNING
let count = 0;
let scores = 0;
let failedAttempts = 0;

let alpaca = 0;
let jellyfish = 0;
let redpanda = 0;
let chameleon = 0;
let penguins = 0;
let animal = 0;
let img;

let imgList = 
   [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 ];


// EVENT LISTENERS
shuffleButton.addEventListener('click', shuffle);


// FUNCTIONS
function shuffle() {
    let gallery = document.getElementById("gallery");
    let elementsArray = Array.prototype.slice.call(gallery.getElementsByClassName('shuffleMe'));
    elementsArray.forEach(function(element){
        gallery.removeChild(element);
    })
    shuffleArray(elementsArray);

    elementsArray.forEach(function(element){
        gallery.appendChild(element);
    })
}

function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// functions for callback functions
function notPair() {
    alert("Not a pair, sorry!");
}
function pair() {
    alert("It's a pair!");
}

 // callback functions to hide images if pair is not a match
 // and also to reset the counters
 function addImageHidden() {
   for(let image of imgList) {
     image.classList.add("imageHidden");
     image.classList.remove("imageVisible"); 
          }
      count = 0;
      alpaca = 0;
      jellyfish = 0;
      redpanda = 0;
      chameleon = 0;
      penguins = 0; 
    }
        
   function operationsIfPair(){
     setTimeout(pair,100);
        scores++;
        inputScores.value = scores;
   }

   function operationsIfNotPair(){
     setTimeout(notPair, 100);
        setTimeout(addImageHidden, 1000);
        failedAttempts++;
        inputAttempts.value = failedAttempts;
   }
 

   function toggle(id) {
           switch(id) {
            case "reverseSide1":
            alpaca++;
            animal = alpaca;
            img = img1;
            break;
            case "reverseSide2":
            jellyfish++;
            animal = jellyfish;
            img = img2;
            break;
            case "reverseSide3":
            redpanda++;
            animal = redpanda;
            img = img3;
            break;
            case "reverseSide4":
            chameleon++;
            animal = chameleon;
            img = img4;
            break;
            case "reverseSide5":
            penguins++;
            animal = penguins;
            img = img5;
            break;
            case "reverseSide6":
            alpaca++;
            animal = alpaca;
            img = img6;
            break;
            case "reverseSide7":
            jellyfish++;
            animal = jellyfish;
            img = img7;
            break;
            case "reverseSide8":
            redpanda++;
            animal = redpanda;
            img = img8;
            break;
            case "reverseSide9":
            chameleon++;
            animal = chameleon;
            img = img9;
            break;
            case "reverseSide10":
            penguins++;
            animal = penguins;
            img = img10;
            break;
       }
      
        count++; 
        console.log(animal);
        console.log(count);
        img.classList.add("imageVisible");
        img.classList.remove("imageHidden");
        if(count==2 || count==4 || count==6 || count==8 || count==10){
            if(animal==2){
            operationsIfPair();
            }else{
            operationsIfNotPair();
           }
         }      
       }
