const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');

 let showMenu = false;

 menuBtn.addEventListener('click', toggleMenu);

 function toggleMenu() {
    if (!showMenu){
        burger.classList.add('open');
        
        showMenu = true;
    }else{
        burger.classList.remove('open');
        showMenu =false
    }
 }