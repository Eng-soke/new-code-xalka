const listElement = document.querySelector("#list")
const menuElement = document.querySelector("#menuBtn")
const closeElement = document.querySelector("#close")

menuElement.addEventListener("click", function(){
    listElement.style.display = "block"
    menuElement.style.display= "none" 
    closeElement.style.display="block"
})




closeElement.addEventListener("click", function(){
    menuElement.style.display = "block"
    closeElement.style.display= "none"
    listElement.style.display = "none"
})

