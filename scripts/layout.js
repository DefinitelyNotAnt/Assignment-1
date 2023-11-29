var html1 = document.getElementById("htmlmain");
if (Math.min(window.innerWidth,window.outerWidth) >= 768){
  html1.classList.add("layoutPC");
  html1.classList.remove("layoutMobile")
}
else{
  html1.classList.add("layoutMobile");
  html1.classList.remove("layoutPC");
}
window.addEventListener("resize",function(event){
  if (Math.min(this.window.innerWidth,this.window.outerWidth) >= 768){
    html1.classList.add("layoutPC");
    html1.classList.remove("layoutMobile")
  }
  else{
    html1.classList.add("layoutMobile");
    html1.classList.remove("layoutPC");
  }
})