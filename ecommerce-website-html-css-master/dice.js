var btn = document.querySelector("button");
var img = document.querySelector("image");
var heading = document.querySelector("h1");
var firstX=0;
var secondX=0;

btn.addEventListener('click', function () {
    var x = Math.floor(Math.random() * 6)
    if (x == 0) {
        document.querySelector("img").setAttribute("src", "dice1.png");
    }
    else if (x == 1) {
        document.querySelector("img").setAttribute("src", "dice2.png");
    }
    else if (x == 2) {
        document.querySelector("img").setAttribute("src", "dice3.png");
    }
    else if (x == 3) {
        document.querySelector("img").setAttribute("src", "dice4.png");
    }
    else if (x == 4) {
        document.querySelector("img").setAttribute("src", "dice5.png");
    }
    else if (x == 5) {
        document.querySelector("img").setAttribute("src", "dice6.png");
    }
    firstX=x;
})
btn.addEventListener('click', function () {
    var x1 = Math.floor(Math.random() * 6)
    if (x1 == 0) {
        document.querySelector(".image").setAttribute("src", "dice1.png");
    }
    else if (x1 == 1) {
        document.querySelector(".image").setAttribute("src", "dice2.png");
    }
    else if (x1 == 2) {
        document.querySelector(".image").setAttribute("src", "dice3.png");
    }
    else if (x1 == 3) {
        document.querySelector(".image").setAttribute("src", "dice4.png");
    }
    else if (x1 == 4) {
        document.querySelector(".image").setAttribute("src", "dice5.png");
    }
    else if (x1 == 5) {
        document.querySelector(".image").setAttribute("src", "dice6.png");
    }
    secondX=x1;
    if(firstX>secondX){
        heading.innerHTML = "PLAYER 1 WINS";
    }
    else if(secondX>firstX){
        heading.innerHTML="PLAYER 2 WINS";
    }
    else{
        heading.innerHTML="DRAW"
    }
})
btn.addEventListener('click',function () {
    if (x > x1) {
        
    }
    else {
        heading.innerHTML = "PLAYER 2 WINS";
    }

})

