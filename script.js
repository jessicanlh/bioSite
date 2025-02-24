let slideIndex = 0;
let slides;

function showSlides(n) {
    slides = document.querySelectorAll(".slide");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

// Auto slide every 3 seconds
function autoSlide() {
    showSlides(slideIndex + 1);
    setTimeout(autoSlide, 3000);
}

// Change slide manually
function changeSlide(n) {
    showSlides(slideIndex + n);
}

// Start slideshow on page load
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
    setTimeout(autoSlide, 3000);
});
