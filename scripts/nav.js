// Creating the navbar (coding not mandatory)
fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
// Creating active
console.log(window.location.href);
const test1 = document.getElementsByClassName("navitem");
console.log(test1.item(0));