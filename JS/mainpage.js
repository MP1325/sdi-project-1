import fetch from "node-fetch"


let slideIndex = 1;
let panelIndex = 1;

showSlides(slideIndex);
showPanels(panelIndex);

// Next/previous controls
function plusPanels(n) {
  showPanels(panelIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function showPanels(n) {
  let i;
  let panels = document.getElementsByClassName("panel");

  if (n > panels.length) {panelIndex = 1}    
  if (n < 1) {panelIndex = panels.length}
  for (i = 0; i < panels.length; i++) {
    panels[i].style.display = "none";  
  }
 
  panels[panelIndex-1].style.display = "block";  
  dots[panelIndex-1].className += " active";
}