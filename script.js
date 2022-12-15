const open=document.querySelector(".menu-open");
const menu=document.querySelector(".menu-mobile");
const close=document.querySelector(".close");
const navItems=document.querySelector(".nav-items-mobile");
const photo=document.querySelector(".img-mob");


open.addEventListener('click', function() {
    // If the menu is hidden, show it, otherwise hide it
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        navItems.style.display = 'flex'
        document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
        photo.style.filter = "brightness(50%)";

    } else {
        menu.style.display = 'none';
        navItems.style.display = 'none'
    }
});

close.addEventListener("click", function (){
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        navItems.style.display = 'none'
        document.body.style.backgroundColor = "white";
    }
});



