let counter = 1

 setInterval(function(){
   document.getElementById('radio' + counter).checked = true
    counter++
    if(counter > 25){
        counter = 1
    }
    
 }, 1500)

 const hamburger = document.querySelector(".hamburger")
const sideBar = document.querySelector(".side-bar") 
const body = document.querySelector("body")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    sideBar.classList.toggle("active")
})
 