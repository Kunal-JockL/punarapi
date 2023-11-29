const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slide = document.querySelector(".carousel-slide");
const images = [
    "resource/media/general/pan1-1.jpg",
    "resource/media/general/pan1-2.jpg"
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

const review = document.querySelector(".review");
const review_list = document.querySelector(".review_list");

let isDragging = false;
let startX;
let scrollLeft;

review.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - review.offsetLeft;
    scrollLeft = review.scrollLeft;
    review.style.cursor = "grabbing";
});

review.addEventListener("mouseup", () => {
    isDragging = false;
    review.style.cursor = "grab";
});

review.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - review.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scrolling speed if needed
    review.scrollLeft = scrollLeft - walk;
});

review.style.cursor = "grab"; // Set initial cursor style

document.getElementById('item1').addEventListener('mouseover', function () {
    document.getElementById('item1').style.transform = 'translate(0px, 0px) rotate(0deg)';
    document.getElementById('item1').style.transition = '0.3s';
    document.getElementById('item2').style.transform = 'translate(90px, -20px) rotate(6deg)' ;
    document.getElementById('item2').style.transition = '0.5s cubic-bezier(0.13, 0.65, 0.12, 0.64) 0s';
});

document.getElementById('item1').addEventListener('mouseout', function () {
    document.getElementById('item1').style.transform = 'translate(0px, 50px) rotate(0deg)';
    document.getElementById('item2').style.transform = 'translate(-9px, -20px) rotate(12deg)';
});

document.getElementById('item2').addEventListener('mouseover', function () {
    document.getElementById('item1').style.transform = 'translate(-80px, 30px) rotate(0deg)';
    document.getElementById('item1').style.transition = '0.5s cubic-bezier(0.13, 0.65, 0.12, 0.64) 0s';
    document.getElementById('item2').style.transform = 'translate(0px, -20px) rotate(0deg)';
    document.getElementById('item2').style.transition = '0.3s';
    document.getElementById('item3').style.transform = 'translate(95px, -10px) rotate(9deg)';
    document.getElementById('item3').style.transition = '0.5s cubic-bezier(0.13, 0.65, 0.12, 0.64) 0s';
});

document.getElementById('item2').addEventListener('mouseout', function () {
    document.getElementById('item1').style.transform = 'translate(0px, 20px) rotate(0deg)';
    document.getElementById('item2').style.transform = 'translate(-9px, -50px) rotate(12deg)';
    document.getElementById('item3').style.transform = 'translate(10px, 20px) rotate(-6deg)';
});

document.getElementById('item3').addEventListener('mouseover', function(){
    document.getElementById('item2').style.transform = 'translate(-90px, -20px) rotate(12deg)';
    document.getElementById('item2').style.transition = '0.5s cubic-bezier(0.13, 0.65, 0.12, 0.64) 0s';
    document.getElementById('item3').style.transform = 'translate(0px, 20px) rotate(0deg)';
    document.getElementById('item3').style.transition = '0.3s';
    document.getElementById('item4').style.transform = 'translate(95px, -10px) rotate(9deg)';
    document.getElementById('item4').style.transition = '0.5s cubic-bezier(0.13, 0.65, 0.12, 0.64) 0s';
});

document.getElementById('item3').addEventListener('mouseout', function () {
    document.getElementById('item2').style.transform = 'translate(-9px, -20px) rotate(12deg)';
    document.getElementById('item3').style.transform = 'translate(10px, 50px) rotate(-6deg)';
    document.getElementById('item4').style.transform = 'translate(-5px, -10px) rotate(9deg)';
});

document.getElementById('item4').addEventListener('mouseover', function(){
    document.getElementById('item3').style.transform = 'translate(-90px, 20px) rotate(-6deg)';
    document.getElementById('item3').style.transition = '0.5s cubic-bezier(0.13, 0.65, 0.12, 0.64) 0s';
    document.getElementById('item4').style.transform = 'translate(0px, -10px) rotate(0deg)';
    document.getElementById('item4').style.transition = '0.3s';
    document.getElementById('item5').style.transform = 'translate(90px, 15px) rotate(-5deg)';
    document.getElementById('item5').style.transition = '0.5s cubic-bezier(0.13, 0.65, 0.12, 0.64) 0s';
});

document.getElementById('item4').addEventListener('mouseout', function () {
    document.getElementById('item3').style.transform = 'translate(10px, 20px) rotate(-6deg)';
    document.getElementById('item4').style.transform = 'translate(-5px, -40px) rotate(9deg)';
    document.getElementById('item5').style.transform = 'translate(10px, 15px) rotate(-5deg)';
});

document.getElementById('item5').addEventListener('mouseover', function(){
    document.getElementById('item4').style.transform = 'translate(-90px, -10px) rotate(9deg)';
    document.getElementById('item4').style.transition = '0.5s cubic-bezier(0.13, 0.65, 0.12, 0.64) 0s';
    document.getElementById('item5').style.transform = 'translate(0px, 15px) rotate(0deg)';
    document.getElementById('item5').style.transition = '0.3s';
});

document.getElementById('item5').addEventListener('mouseout', function(){
    document.getElementById('item4').style.transform = 'translate(-5px, -10px) rotate(9deg)';
    document.getElementById('item5').style.transform = 'translate(10px, 45px) rotate(-5deg)';
});




