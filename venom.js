const myvideo = document.querySelector(".myvideo")
const btn = document.querySelector("#playbtn")
const btn1 = document.querySelector("#pausebtn")

btn.addEventListener('click', function(){
    myvideo.play()
})

btn1.addEventListener('click', function(){
    myvideo.pause()
})