
let toggle=document.getElementsByClassName("toggle-button")[0]
let navlink=document.getElementsByClassName("newmenu")[0]
let lines=document.getElementsByClassName("toggle-1")[0]
let closes=document.getElementsByClassName("clse")[0]


toggle.addEventListener('click', ()=>{
    lines.classList.toggle('active')
    navlink.classList.toggle('active')
    closes.classList.toggle('active')
})















