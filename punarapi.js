const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slide = document.querySelector(".carousel-slide");
const images = [
    "resource/pan1-1.jpg",
    "resource/pan1-2.jpg",
    // Add more image URLs as needed
];

let slideIndex = 0;

function showSlide(index) {
    if (index < 0) {
        slideIndex = images.length - 1;
    } else if (index >= images.length) {
        slideIndex = 0;
    }
    slide.style.backgroundImage = `url('${images[slideIndex]}')`;
}

prevButton.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextButton.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Automatically advance the carousel
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

setInterval(autoSlide, 10000); // Adjust the interval as needed (in milliseconds)

showSlide(slideIndex);

