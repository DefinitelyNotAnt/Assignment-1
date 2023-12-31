// ----------------------------------------
// ---------Javascript for carousel--------
// ----------------------------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    // Hides current slide
    slides[i].style.display = "none";  
  }
  // Go next slide
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    // Change dot opacity
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Make currrent sldie visible
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}