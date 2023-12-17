var btn= document.querySelector(".stone");

var btn1= document.querySelector(".paper");
var btn2= document.querySelector(".scissor");
var comp=["stone","paper","scissor"];
var heading=document.querySelector('.head');
var ai=document.querySelector(".ai img");
var man=document.querySelector(".manual img");
var game=document.querySelector(".game img")
btn.addEventListener("click",function(){
    game.style.display="block"
    man.style.display="block"
    

    // man.setAttribute('src','stone.png')
    man.src='stone.png'
    
    let num=Math.floor(Math.random()*comp.length)
    if(num==0)
    {
        ai.src='stone.png'
        heading.innerHTML="It's a draw";
    }
    else if(num==1)
    {
        ai.src='paper.png'
        heading.innerHTML="Player 1 Wins";
    }
    else{
        ai.src='scissor.png'
        heading.innerHTML="player 2 Wins"
    }
    
})
btn1.addEventListener("click",function(){
    game.style.display="block"
    man.style.display="block"

    // man.setAttribute('src','stone.png')
    man.src='paper.png'
    let num=Math.floor(Math.random()*comp.length)
    if(num==0)
    {
        ai.src='stone.png'
        heading.innerHTML="player 2 Wins"


    }
    else if(num==1)
    {
        ai.src='paper.png'
        heading.innerHTML="Its a Draw"

    }
    else{
        ai.src='scissor.png'
        heading.innerHTML="player 1 Wins"

    }
    
    

})
btn2.addEventListener("click",function(){
    man.style.display="block"

    game.style.display="block"
    // man.setAttribute('src','stone.png')
    man.src='scissor.png'
    let num=Math.floor(Math.random()*comp.length)
    if(num==0)
    {
        ai.src='stone.png'
        heading.innerHTML="player 1 Wins"

    }
    else if(num==1)
    {
        ai.src='paper.png'
        heading.innerHTML="player 2 Wins"

    }
    else{
        ai.src='scissor.png'
        heading.innerHTML="Its a Draw"

    }
    
    
})

function game(){
    if(man.getAttribute('src')===ai.getAttribute('src')){
        heading.innerHTML="It's a draw";
    }
    else if(man.getAttribute('src')==='stone.png' && num==1)
    {
        heading.innerHTML="player 1 wins";
    }
    
}   
