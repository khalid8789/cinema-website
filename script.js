const myvideo = document.querySelector(".myvideo")
const btn = document.querySelector("#playbtn")
const btn1 = document.querySelector("#pausebtn")

const hamburger = document.querySelector(".hamburger")
const sideBar = document.querySelector(".side-bar") 
const body = document.querySelector("body")


btn.addEventListener('click', function(){
    myvideo.play()
})

btn1.addEventListener('click', function(){
    myvideo.pause()
})

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
    
 }, 1500)

jQuery(document).ready(function(){
    setTimeout(function(){
        myvideo.play()
    },3000)
})




// function playPause(){
//     if (myvideo === isPaused) {
//         myvideo.play()
//         myvideo = false
        
        
//     } else {
//         myvideo.pause()
//     }
        
        
    
// }

