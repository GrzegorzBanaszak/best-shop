const btnToggle = document.querySelector("#nav_btn");
const btn = document.querySelector(".nav_icon");
const navMenu = document.querySelector(".nav-top__menu");
const links = document.querySelectorAll(".menu_element")


btn.addEventListener("click",showMenu)



function showMenu(){
    navMenu.classList.toggle("nav_show");
}
