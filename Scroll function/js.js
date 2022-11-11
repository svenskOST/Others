//Alexnders patented scroll function
var menu = document.getElementById("menu")
var originalscrolled = window.pageYOffset
function menuscroll() {
    originalscrolled = window.pageYOffset
}
document.onscroll = function() {
   newscrolled = window.pageYOffset
    if(newscrolled > originalscrolled) {
    menu.style.top = "-100px"
    requestAnimationFrame(menuscroll)
   }
   else {
    menu.style.top = "0px"
    requestAnimationFrame(menuscroll)
   }
}
