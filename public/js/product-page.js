const MT = document.getElementById("MT");
const RT = document.getElementById("RT");
const CT = document.getElementById("CT");

const MTl = document.getElementById('MTl');
const RTl = document.getElementById('RTl');
const CTl = document.getElementById('CTl');

const zm = document.getElementById('mang-ti');
const zr = document.getElementById('rom-ti');
const zc = document.getElementById('rig-ti');

MT.addEventListener('click', function () {
    MTl.style.color = 'white';
    MTl.style.transform = 'scale(1.2)';
    RTl.style.color = '#ffffff98';
    RTl.style.transform = 'scale(1)';
    CTl.style.color = '#ffffff98';
    CTl.style.transform = 'scale(1)';
    zm.style.zIndex = '3';
    zr.style.zIndex = '2';
    zc.style.zIndex = '1';
});

RT.addEventListener('click', function () {
    MTl.style.color = '#ffffff98';
    MTl.style.transform = 'scale(1)';
    RTl.style.color = 'white';
    RTl.style.transform = 'scale(1.2)';
    CTl.style.color = '#ffffff98';
    CTl.style.transform = 'scale(1)';
    zm.style.zIndex = '2';
    zr.style.zIndex = '3';
    zc.style.zIndex = '1';
});

CT.addEventListener('click', function () {
    MTl.style.color = '#ffffff98';
    MTl.style.transform = 'scale(1)';
    RTl.style.color = '#ffffff98';
    RTl.style.transform = 'scale(1)';
    CTl.style.color = 'white';
    CTl.style.transform = 'scale(1.2)';
    zm.style.zIndex = '1';
    zr.style.zIndex = '2';
    zc.style.zIndex = '3';
});

window.addEventListener('load', function() {
    MTl.style.color = 'white';
    MTl.style.transform = 'scale(1.2)';
    RTl.style.color = '#ffffff98';
    RTl.style.transform = 'scale(1)';
    CTl.style.color = '#ffffff98';
    CTl.style.transform = 'scale(1)';
    zm.style.zIndex = '3';
    zr.style.zIndex = '2';
    zc.style.zIndex = '1';
});

