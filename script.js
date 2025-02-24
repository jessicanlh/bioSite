document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});
