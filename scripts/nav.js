// Creating the navbar (coding not mandatory)
fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
const trailer = document.getElementById("trailer");
for (i=0;i<10;i++){
    let para = document.createElement("div");
    para.classList.add("circle");
    trailer.appendChild(para);
}
