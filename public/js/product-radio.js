const tileContentGroups = {
    mangalore: {
        radio: $("#MT"),
        label: $("#MTl"),
        content: $("#mang-ti"),
    },
    roman: {
        radio: $("#RT"),
        label: $("#RTl"),
        content: $("#rom-ti"),
    },
    ridge: {
        radio: $("#CT"),
        label: $("#CTl"),
        content: $("#rig-ti"),
    },
};

let k = 0;
for(const [tileName, tileGroup] of Object.entries(tileContentGroups)) {
    const index = k;
    tileGroup.radio.click(() => { displayContent(index); });
    k++;
}

function displayContent(index) {
    console.log(index);
    let i = 0;
    for(const [tileName, tileGroup] of Object.entries(tileContentGroups)) {
        if(i === index) {
            tileGroup.label.removeClass('inactive-radio');
            tileGroup.content.removeClass('inactive-content');
        } else {
            tileGroup.label.addClass('inactive-radio');
            tileGroup.content.addClass('inactive-content');
        }
        i++;
    }
}

window.addEventListener("load", function () {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    const tile = getParameterByName("tile");

    if (tile === "roman") {
        RT.click();
    } else if (tile === "ridge") {
        CT.click();
    }
});

const mySection = document.getElementById('openingSection');
const screenHeight = window.innerHeight;
let changedToBlack = false;

$(window).scroll(() => {
    const sectionTop = mySection.getBoundingClientRect().bottom;

    if(!changedToBlack) {
        if (sectionTop < screenHeight / 2) {
            for(const [tileName, tileGroup] of Object.entries(tileContentGroups)) {
                tileGroup.label.addClass('radio-black');
            }
            changedToBlack = true;
        }
    } else {
        if (sectionTop > screenHeight / 2) {
            for(const [tileName, tileGroup] of Object.entries(tileContentGroups)) {
                tileGroup.label.removeClass('radio-black');
            }
            changedToBlack = false;
        }
    }
});