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

const pointsContent1 = document.getElementById('pointsContent1');
const pointsContent2 = document.getElementById('pointsContent2');
const pointsContent3 = document.getElementById('pointsContent3');
const pointsContent4 = document.getElementById('pointsContent4');

var typespeed = 5;

chooseItem0.addEventListener("click", () =>{
    pointsContent1.style.zIndex = '3';
    pointsContent2.style.zIndex = '0';
    pointsContent3.style.zIndex = '0';
    pointsContent4.style.zIndex = '0';
    var typed1 = new Typed('#pointSentence1', {
        strings: ['Our tiles embody sustainability by ingeniously repurposing plastic waste. By utilizing recycled materials, we contribute to a circular economy, conserve precious resources, and take a proactive step in reducing environmental pollution. Our commitment to sustainability is reflected in every tile, showcasing a fusion of eco-friendliness and innovative design.'],
        typeSpeed: typespeed,
        showCursor: false,
    });
    return () => {
        typed1.destroy();
    };
});
chooseItem1.addEventListener("click", () =>{
    pointsContent1.style.zIndex = '0';
    pointsContent2.style.zIndex = '3';
    pointsContent3.style.zIndex = '0';
    pointsContent4.style.zIndex = '0';
    var typed2 = new Typed('#pointSentence2', {
        strings: ['Elevate your space with our tiles that offer a spectrum of vibrant and customizable color options. From bold hues to subtle tones, our tiles provide an extensive palette to match your style. Ensuring color consistency and UV resistance, our tiles stand the test of time, maintaining their brilliance and aesthetic appeal for years to come.'],
        typeSpeed: typespeed,
        showCursor: false,
    });
    return () => {
        typed2.destroy();
    };
});
chooseItem2.addEventListener("click", () =>{
    pointsContent1.style.zIndex = '0';
    pointsContent2.style.zIndex = '0';
    pointsContent3.style.zIndex = '3';
    pointsContent4.style.zIndex = '0';
    var typed3 = new Typed('#pointSentence3', {
        strings: ['Experience durability redefined with our tiles. Crafted for strength, our tiles are engineered to withstand wear and tear in high-traffic areas, ensuring longevity and low maintenance. Their resistance to impact and exceptional strength make them the perfect choice for spaces that demand both resilience and style.'],
        typeSpeed: typespeed,
        showCursor: false,
    });
    return () => {
        typed3.destroy();
    };
});
chooseItem3.addEventListener("click", () =>{
    pointsContent1.style.zIndex = '0';
    pointsContent2.style.zIndex = '0';
    pointsContent3.style.zIndex = '0';
    pointsContent4.style.zIndex = '3';
    
    var typed4 = new Typed('#pointSentence4', {
        strings: ['At the core of our mission is a commitment to minimizing our environmental footprint. By utilizing recycled plastic waste, our tiles significantly reduce carbon emissions associated with traditional manufacturing. Energy-efficient processes and eco-friendly packaging further underscore our dedication to providing a sustainable, high-quality tiling solution.'],
        typeSpeed: typespeed,
        showCursor: false,
    });
    return () => {
        typed4.destroy();
    };
});


function switchQuality(lastIndex, currentIndex){
    var chooseItemNone = $(`#chooseItem${lastIndex}`);
    var chooseItemBlock = $(`#chooseItem${currentIndex}`);
    chooseItemBlock.css('display', 'block');
    chooseItemBlock.click();
    chooseItemNone.css('display', 'none');
}

let currentIndex = 0;

qualityLeft.addEventListener('click', () => {
    lastIndex = currentIndex;
    currentIndex = (((currentIndex - 1) % 4) + 4) % 4;
    console.log(currentIndex);
    switchQuality(lastIndex, currentIndex);
});

qualityRight.addEventListener('click', () => {
    lastIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 4;
    console.log(currentIndex);
    switchQuality(lastIndex, currentIndex);
});

function hideElementsOnSmallScreen() {
    if ($(window).width() < 525) {
        for (var i = 1; i < 4; i++) {
            var chooseItem = $(`#chooseItem${i}`);
            chooseItem.css('display', 'none');
        }
    }else{
        for (var i = 0; i < 4; i++) {
        var chooseItem = $(`#chooseItem${i}`);
        chooseItem.css('display', 'block');
        }
    }
}


$(`#chooseItem${0}`).click();

hideElementsOnSmallScreen();

$(window).resize(function () {
    hideElementsOnSmallScreen();
});





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
