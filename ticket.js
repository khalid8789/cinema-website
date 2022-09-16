const hamburger = document.querySelector(".hamburger")
const sideBar = document.querySelector(".side-bar") 
const body = document.querySelector("body")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    sideBar.classList.toggle("active")
})