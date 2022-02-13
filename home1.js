const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) { //to slide images by clicking next or prev
  showSlides(slideIndex += n);
}

function showSlides(n) { //to display slides
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
      slides[slideIndex - 1].style.display = "block";
}



hamburger.addEventListener("click", () => { //to open the menu on click
   navLinks.classList.toggle("open"); 
});