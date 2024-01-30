
let navitem =document.querySelector(".nav-item");
let menu = document.querySelector(".menu-bar svg");
menu.addEventListener('click',()=>{

   navitem.classList.toggle('d-show')

})

let navlist = navitem.querySelectorAll(".nav-item li")
navlist.forEach((x,i)=>{
      x.addEventListener("click",()=>{
         navitem.classList.remove('d-show')
    
         })

   })


 
