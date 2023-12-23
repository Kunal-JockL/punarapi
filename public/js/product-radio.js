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

$("#MT").click(() => { displayContent(0); });
$("#RT").click(() => { displayContent(1); });
$("#CT").click(() => { displayContent(2); });

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

    var buttonId = getParameterByName("button");

    if (buttonId === "button2") {
        RT.click();
    } else if (buttonId === "button3") {
        CT.click();
    }
});
