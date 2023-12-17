var elem1= document.querySelector("#elem1");
var elemImage =document.querySelectorAll("#elem1 img");

// elem1.addEventListener("mousemove",function(move){
//     elemImage.style.left=move.x+"px";
//     // elemImage.style.top=move.y+"px";
//     elemImage.style.opacity=1;
// })
// elem1.addEventListener("mouseenter",function(){
    
//     elemImage.style.opacity=1;
// })
// elem1.addEventListener("mouseleave",function(){
    
//     elemImage.style.opacity=0;
// })
var elem =document.querySelectorAll(".elem");
elem.forEach(function(val)
{
    val.addEventListener("mousemove",function(){
        elemImage.style.left=move.x+"px";
    // elemImage.style.top=move.y+"px";
    elemImage.style.opacity=1;
    })
    val.addEventListener("mouseenter",function(){
        elemImage.style.opacity=1;
    })
    val.addEventListener("mouseleave",function(){
        elemImage.style.opacity=0;
    })
})