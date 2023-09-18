// this function open and closes the contact form

function openForm() {
    document.getElementById("myForm").style.display = "block"
}

function closeForm() {
    document.getElementById("myForm").style.display = "none"
}

// this function displays the first image in the slideshow when th page loads
var slideIndex = 1;
showSlides(slideIndex);

// this function changes the slides when left or right buttons are clicked

function plusSlides(n){
    showSlides(slideIndex += n);

}
// this function displays the slide when the choosing dots are clicked
function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // get all elements with class my slides and add them to array slides 
    var dots = document.getElementsByClassName("dot");// get all elements with class dot and add them to array dots
    if (n > slides.length){  // if the number passed is greater than the available number of slides , slide 1 is shown 
        slideIndex = 1
    };
    if (n < 1) { // if the number passed is less than the 1 , slideIndex is set to max value  
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }// this overlays the new image over the old one, rather than adding the image below it 
    for (i = 0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");// This loop removes the active styling from all dots
    }
    slides[slideIndex-1].style.display = "block" // this displays the selected image only
    dots[slideIndex - 1].className +=" active"// this adds the active class only to the dot of the respected image
    // the active class changes the color of the dot from gray to black

}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )