const pointsContent1 = document.getElementById("pointsContent1");
const pointsContent2 = document.getElementById("pointsContent2");
const pointsContent3 = document.getElementById("pointsContent3");
const pointsContent4 = document.getElementById("pointsContent4");

var typespeed = 5;

const chooseItemList = [chooseItem0, chooseItem1, chooseItem2, chooseItem3];
let currentlySelected = 0;

chooseItem0.addEventListener("click", () => {
    pointsContent1.style.zIndex = "3";
    pointsContent2.style.zIndex = "0";
    pointsContent3.style.zIndex = "0";
    pointsContent4.style.zIndex = "0";

    chooseItemList[currentlySelected].classList.remove("selected-quality");
    currentlySelected = 0;
    chooseItem0.classList.add("selected-quality");
    
    var typed1 = new Typed("#pointSentence1", {
        strings: [
            "Our tiles embody sustainability by ingeniously repurposing plastic waste. By utilizing recycled materials, we contribute to a circular economy, conserve precious resources, and take a proactive step in reducing environmental pollution. Our commitment to sustainability is reflected in every tile, showcasing a fusion of eco-friendliness and innovative design.",
        ],
        typeSpeed: typespeed,
        showCursor: false,
    });
    return () => {
        typed1.destroy();
    };
});
chooseItem1.addEventListener("click", () => {
    pointsContent1.style.zIndex = "0";
    pointsContent2.style.zIndex = "3";
    pointsContent3.style.zIndex = "0";
    pointsContent4.style.zIndex = "0";

    chooseItemList[currentlySelected].classList.remove("selected-quality");
    currentlySelected = 1;
    chooseItem1.classList.add("selected-quality");

    var typed2 = new Typed("#pointSentence2", {
        strings: [
            "Elevate your space with our tiles that offer a spectrum of vibrant and customizable color options. From bold hues to subtle tones, our tiles provide an extensive palette to match your style. Ensuring color consistency and UV resistance, our tiles stand the test of time, maintaining their brilliance and aesthetic appeal for years to come.",
        ],
        typeSpeed: typespeed,
        showCursor: false,
    });
    return () => {
        typed2.destroy();
    };
});
chooseItem2.addEventListener("click", () => {
    pointsContent1.style.zIndex = "0";
    pointsContent2.style.zIndex = "0";
    pointsContent3.style.zIndex = "3";
    pointsContent4.style.zIndex = "0";

    chooseItemList[currentlySelected].classList.remove("selected-quality");
    currentlySelected = 2;
    chooseItem2.classList.add("selected-quality");

    var typed3 = new Typed("#pointSentence3", {
        strings: [
            "Experience durability redefined with our tiles. Crafted for strength, our tiles are engineered to withstand wear and tear in high-traffic areas, ensuring longevity and low maintenance. Their resistance to impact and exceptional strength make them the perfect choice for spaces that demand both resilience and style.",
        ],
        typeSpeed: typespeed,
        showCursor: false,
    });
    return () => {
        typed3.destroy();
    };
});
chooseItem3.addEventListener("click", () => {
    pointsContent1.style.zIndex = "0";
    pointsContent2.style.zIndex = "0";
    pointsContent3.style.zIndex = "0";
    pointsContent4.style.zIndex = "3";

    chooseItemList[currentlySelected].classList.remove("selected-quality");
    currentlySelected = 3;
    chooseItem3.classList.add("selected-quality");

    var typed4 = new Typed("#pointSentence4", {
        strings: [
            "At the core of our mission is a commitment to minimizing our environmental footprint. By utilizing recycled plastic waste, our tiles significantly reduce carbon emissions associated with traditional manufacturing. Energy-efficient processes and eco-friendly packaging further underscore our dedication to providing a sustainable, high-quality tiling solution.",
        ],
        typeSpeed: typespeed,
        showCursor: false,
    });
    return () => {
        typed4.destroy();
    };
});

function switchQuality(lastIndex, currentIndex) {
    var chooseItemNone = $(`#chooseItem${lastIndex}`);
    var chooseItemBlock = $(`#chooseItem${currentIndex}`);
    chooseItemBlock.css("display", "block");
    chooseItemBlock.click();
    chooseItemNone.css("display", "none");
}

let currentIndex = 0;

qualityLeft.addEventListener("click", () => {
    lastIndex = currentIndex;
    currentIndex = (((currentIndex - 1) % 4) + 4) % 4;
    console.log(currentIndex);
    switchQuality(lastIndex, currentIndex);
});

qualityRight.addEventListener("click", () => {
    lastIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 4;
    console.log(currentIndex);
    switchQuality(lastIndex, currentIndex);
});

function hideElementsOnSmallScreen() {
    if ($(window).width() < 516) {
        // here the reason it is 516 is bescuse 525-9 =516
        for (var i = 1; i < 4; i++) {
            var chooseItem = $(`#chooseItem${i}`);
            chooseItem.css("display", "none");
        }
    } else {
        for (var i = 0; i < 4; i++) {
            var chooseItem = $(`#chooseItem${i}`);
            chooseItem.css("display", "block");
        }
    }
}

$(`#chooseItem${0}`).click();

hideElementsOnSmallScreen();

$(window).resize(function () {
    hideElementsOnSmallScreen();
});
