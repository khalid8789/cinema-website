const hamburger = document.querySelector(".hamburger")
const sideBar = document.querySelector(".side-bar") 
const body = document.querySelector("body")
const btn = document.querySelector(".pro")

btn.addEventListener('click', function(){
    alert("You will recieve an email from us shortly!")
})
console.log(btn)

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    sideBar.classList.toggle("active")
})



