let clicked = false;
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click',function(){
    clicked = !clicked;
    let menu = document.getElementsByClassName("mobile_nav")[0];
    if(clicked){
        menu.style.display = "flex";
    }else{
        menu.style.display = "none";
    }
});