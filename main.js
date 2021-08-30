const menuBtn = document.querySelector(".menu-button")
const closeBtn = document.querySelector('.close-button')
const header = document.querySelector(".header")
const links = document.querySelectorAll(".nav-group a")

menuBtn.onclick = function(){
    header.classList.add('active')
}

closeBtn.onclick = function(){
    header.classList.remove('active')
}

links.forEach((link)=>{
    link.onclick = function(){
        header.classList.remove('active')
    }
})