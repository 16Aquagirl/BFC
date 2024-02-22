const Firstbike = () => {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
    return (
        <>
            <div>
                <h1>Royal Enfield Hunter</h1>


                <div class="container">
                    <div class="mySlides">
                        <div class="numbertext">1 / 6</div>
                        <img className="imgbike" src="img_woods_wide.jpg" />
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">2 / 6</div>
                        <img className="imgbike" src="img_5terre_wide.jpg"/>
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">3 / 6</div>
                        <img className="imgbike" src="img_mountains_wide.jpg" />
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">4 / 6</div>
                        <img className="imgbike" src="img_lights_wide.jpg" />
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">5 / 6</div>
                        <img className="imgbike" src="img_nature_wide.jpg" />
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">6 / 6</div>
                        <img className="imgbike" src="img_snow_wide.jpg" />
                    </div>

                    <a class="prev" onclick="plusSlides(-1)">❮</a>
                    <a class="next" onclick="plusSlides(1)">❯</a>

                    <div class="caption-container">
                        <p id="caption"></p>
                    </div>

                    <div class="row">
                        <div class="column">
                            <img class="demo cursor" src="img_woods.jpg"  onclick="currentSlide(1)" alt="The Woods"/>
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="img_5terre.jpg"  onclick="currentSlide(2)" alt="Cinque Terre"/>
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="img_mountains.jpg"  onclick="currentSlide(3)" alt="Mountains and fjords"/>
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="img_lights.jpg"  onclick="currentSlide(4)" alt="Northern Lights"/>
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="img_nature.jpg"  onclick="currentSlide(5)" alt="Nature and sunrise"/>
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="img_snow.jpg"  onclick="currentSlide(6)" alt="Snowy Mountains"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Firstbike;