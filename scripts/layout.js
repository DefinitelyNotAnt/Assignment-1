var html1 = document.getElementById("htmlmain");
if (window.innerWidth >= 768){
  html1.classList.add("layoutPC");
  html1.classList.remove("layoutMobile")
}
else{
  html1.classList.add("layoutMobile");
  html1.classList.remove("layoutPC");
}
window.addEventListener("resize",function(event){
  if (this.window.innerWidth>= 768){
    html1.classList.add("layoutPC");
    html1.classList.remove("layoutMobile")
  }
  else{
    html1.classList.add("layoutMobile");
    html1.classList.remove("layoutPC");
  }
})