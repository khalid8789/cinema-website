const myvideo = document.querySelector(".myvideo")
const btn = document.querySelector("#playbtn")

const hamburger = document.querySelector(".hamburger")
const sideBar = document.querySelector(".side-bar") 
const body = document.querySelector("body")




hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    sideBar.classList.toggle("active")
})

let counter = 1

 setInterval(function(){
   document.getElementById('radio' + counter).checked = true
    counter++
    if(counter > 5){
        counter = 1
    }
    
 }, 3000)

jQuery(document).ready(function(){
    setTimeout(function(){
        myvideo.play()
    },3000)
})

myvideo = isPlayed

function playPause(){
    if (myvideo.paused) {
        myvideo.play()
        btn.style.display = "none"
        
    } else {
        myvideo.pause()
        btn.style.display = "block"
        
    }
}

