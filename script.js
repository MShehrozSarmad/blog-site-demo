const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");

function show(){
    nav.classList.add("show");
}

function hide(){
    nav.classList.remove("show");
}

burger.addEventListener('click', show);
cross.addEventListener('click', hide);