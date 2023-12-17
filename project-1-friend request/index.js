var btn1=document.querySelector("#add");
var btn2=document.querySelector("#remove");
var flag=0
var h4=document.querySelector(".box h4");
btn1.addEventListener("click",function(){
    if(flag==0){
        btn1.innerHTML="ADDED"
        flag=1
        btn1.style.backgroundColor="rgba(0, 106, 255, 0.415)";
        btn2.style.backgroundColor="rgb(201, 41, 41)";
        btn2.innerHTML="remove"
        h4.innerHTML="FRIENDS"


    }
    
})
btn2.addEventListener("click",function(){
    if(flag==1){
        btn2.innerHTML="REMOVED"
        flag=0
        btn2.style.backgroundColor="rgba(201, 41, 41, 0.442)";
        
        btn1.style.backgroundColor="rgb(0, 106, 255)";
        btn1.innerHTML="ADD friend"
        h4.innerHTML="STRANGER"


        

    }

    
})