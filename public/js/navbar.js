document.getElementById('nav-icon3').addEventListener("click", function () {
    // var navbar = document.querySelector('.navbar');

    document.getElementById('nav-icon3').classList.toggle('open');
    document.querySelector('.navbar-wrapper').classList.toggle('dropdown-navbar-wrapper');
    document.querySelector('.navbar').classList.toggle('dropdown-navbar');
    document.querySelector('.middle').classList.toggle('dropdown-middle');
    document.querySelector('.logo').classList.toggle('dropdown-logo');
    document.querySelector('.navlist').classList.toggle('dropdown-navlist');
    var contactUs = document.querySelector('.contact_us');
    contactUs.style.display = (contactUs.style.display === 'none' || contactUs.style.display === '') ? 'block' : 'none';
    document.querySelectorAll('.navlist li').forEach(li => {
        li.style.display = (li.style.display === 'none' || li.style.display === '') ? 'block' : 'none';
    });

});

function updateScreenWidth() {
    screenWidth = window.innerWidth;
    var contactUs = document.querySelector('.contact_us');
    var navli = document.querySelectorAll('.navlist li');

    if (screenWidth >= 768) {
        contactUs.style.display = 'block';
        navli.forEach(li => {
            li.style.display = 'block';
        });
    } else {
        contactUs.style.display = 'none';
        navli.forEach(li => {
            li.style.display = 'none';
        });
    }
}




window.addEventListener('resize', updateScreenWidth);

