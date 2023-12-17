const MT = document.getElementById("MT");
const RT = document.getElementById("RT");
const CT = document.getElementById("CT");

const MTl = document.getElementById('MTl');
const RTl = document.getElementById('RTl');
const CTl = document.getElementById('CTl');

const zm = document.getElementById('mang-ti');
const zr = document.getElementById('rom-ti');
const zc = document.getElementById('rig-ti');


function handleMTClick() {
    MTl.style.color = 'white';
    MTl.style.transform = 'scale(1.2)';
    RTl.style.color = '#ffffff98';
    RTl.style.transform = 'scale(1)';
    CTl.style.color = '#ffffff98';
    CTl.style.transform = 'scale(1)';

    zm.style.zIndex = 3;
    zr.style.zIndex = 2;
    zc.style.zIndex = 1;
}

function handleRTClick() {
    MTl.style.color = '#ffffff98';
    MTl.style.transform = 'scale(1)';
    RTl.style.color = 'white';
    RTl.style.transform = 'scale(1.2)';
    CTl.style.color = '#ffffff98';
    CTl.style.transform = 'scale(1)';

    zm.style.zIndex = 2;
    zr.style.zIndex = 3;
    zc.style.zIndex = 1;
}

function handleCTClick() {
    MTl.style.color = '#ffffff98';
    MTl.style.transform = 'scale(1)';
    RTl.style.color = '#ffffff98';
    RTl.style.transform = 'scale(1)';
    CTl.style.color = 'white';
    CTl.style.transform = 'scale(1.2)';

    zm.style.zIndex = 1;
    zr.style.zIndex = 2;
    zc.style.zIndex = 3;
}


MT.addEventListener('click', handleMTClick);
RT.addEventListener('click', handleRTClick);
CT.addEventListener('click', handleCTClick);


window.addEventListener('load', function() {
    
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    
    var buttonId = getParameterByName('button');

    
    if (buttonId === 'button1') {
        handleMTClick();
        MT.click();
    } else if (buttonId === 'button2') {
        handleRTClick();
        RT.click()
    } else if (buttonId === 'button3') {
        handleCTClick();
        CT.click();
    } else {
        handleMTClick();
        MT.click()
    }

});


