var icon=document.querySelector(".heart");
var icon1=document.querySelector(".save");
var flag=0;
var card=document.querySelector(".card");
var heart_icon=document.querySelector(".in-heart");
card.addEventListener("dblclick",function(){
    heart_icon.style.opacity="0.8";
        icon.className="ri-heart-3-fill"
    
    flag=1;
    setTimeout(function(){
        heart_icon.style.opacity="0";
        icon.className="ri-heart-3-fill"
    },600)
})
icon.addEventListener("click",function(){
    if(flag==0)
    {
        icon.className="ri-heart-3-fill"
        flag=1;
        heart_icon.style.opacity=0.8;
        setTimeout(function(){
            heart_icon.style.opacity="0";
            icon.className="ri-heart-3-fill"
        },600)

        
       
    }
    else{
        icon.className="ri-heart-line";
        flag=0;
    }
})