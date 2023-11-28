# punarapi-website
@font-face {
  font-family: 'Codec Cold Trial Heavy';
  font-style: normal;
  font-weight: normal;
  src: local('Codec Cold Trial Heavy'), url('resource/fonts/Codec-Cold-Heavy-trial.woff') format('woff');
}

@font-face {
  font-family: 'Codec Cold Trial ExtraBold';
  font-style: normal;
  font-weight: normal;
  src: local('Codec Cold Trial ExtraBold'), url('resource/fonts/Codec-Cold-ExtraBold-trial.woff') format('woff');
}


@font-face {
  font-family: 'Codec Cold Trial Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Codec Cold Trial Regular'), url('resource/fonts/Codec-Cold-Regular-trial.woff') format('woff');
}

 transform: translate(20px,  -150%);

 <section class="footer" id="footer" tabindex="0">
            <div class="bookmark-container">
                <img>
                <div class="address">
                    <p>PUNARAPI ECO TILES PVT LTD, Plot no.51/B,</p>
                    <p>Karnad Industrial Area, Mulki,</p>
                    <p>Mangalore Taluk, D.K District</p>
                    <p>Karnataka</p>
                    <p>574154</p>
                </div>
                <div class="social-con">
                    <img> <img>
                </div>
            </div>
            <section class="map-cont">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.1144569753833!2d74.79725733605711!3d13.07019158276458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35362e6b3e15d%3A0x470d6a85ce5771d6!2sPunarapi%20Eco%20Tiles%20Private%20limited!5e0!3m2!1sen!2sin!4v1697086065695!5m2!1sen!2sin"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
        </section>
        <section class="info-container">
            <!-- Add your content inside this container -->
            <p>Info container content</p>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
        </section>


        .bookmark-container {
    position: absolute;
    top: -400px;
    left: 10px;
    width: 300px;
    height: 400px;
    background-color: white;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: transform 1s ease;
}

.map-cont {
    height: 100%;
    width: 100%;
    border-radius: 50px;
}

.info-container {
    position: absolute;
    bottom: -100px;
    width: 100%;
    height: 100px;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: transform 1s ease;
}



.footer:hover .bookmark-container {
    transform: translateX(0) translateY(400px);
    background-color: #70b5ff;
}

.footer:hover .info-container {
    transform: translateX(0) translateY(-100px);
    z-index: 3;
}

.footer:focus .bookmark-container {
    transform: translateX(0) translateY(400px);
    background-color: #70b5ff;
}

.footer:focus .info-container {
    transform: translateX(0) translateY(-100px);
    z-index: 3;
}