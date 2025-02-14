{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let slideIndex = 0;\
let slides;\
\
function showSlides(n) \{\
    slides = document.querySelectorAll(".slide");\
\
    if (n >= slides.length) \{\
        slideIndex = 0;\
    \} else if (n < 0) \{\
        slideIndex = slides.length - 1;\
    \} else \{\
        slideIndex = n;\
    \}\
\
    slides.forEach(slide => slide.style.display = "none");\
    slides[slideIndex].style.display = "block";\
\}\
\
// Auto slide every 3 seconds\
function autoSlide() \{\
    showSlides(slideIndex + 1);\
    setTimeout(autoSlide, 3000);\
\}\
\
// Change slide manually\
function changeSlide(n) \{\
    showSlides(slideIndex + n);\
\}\
\
// Start slideshow on page load\
document.addEventListener("DOMContentLoaded", function () \{\
    showSlides(slideIndex);\
    setTimeout(autoSlide, 3000);\
\});\
}