
var mainmenu=document.querySelector(".menu-items");
document.querySelector(".hamburger").onclick=function(){
    mainmenu.classList.toggle("open");
}

document.querySelector(".menu-items .close-menu").onclick=function(){
    mainmenu.classList.remove("open");
}