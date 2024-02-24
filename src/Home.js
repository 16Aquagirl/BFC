import enfieldlogo from "./enfieldlogo.png";
import bmwlogo from "./bmw logo.png";
import jawalogo from "./jawa logo.png";
import ktmlogo from "./ktm logo.jpg";
import olalogo from "./OLA LOGO.png";
import harleylogo from "./davidson logo.png";

import royal from "./royalenfieldhunter350.webp";
import ktm from "./ktmrc200.webp";
import jawa from "./jawaperak.webp";

import fb from "./fb.png";
import ig from "./ig.png";
import whatsapp from "./whatsapp.png";
import twitter from "./twitter.png";

const Home = () => {
    return (
        <>
            <body>
                {/* home video */}
                <div>
                    <video autoplay muted loop>
                        <source src="{% static 'Jawa.mp4' %}" type="video/mp4"></source>
                    </video>
                </div>

                {/* brand logos */}
                <div className="brands">


                    <div className="marquee">
                        <div className="marquee-content">
                            <div className="marquee-item">
                                <img className="logo1" src={enfieldlogo} />
                            </div>

                            <div className="marquee-item">
                                <img className="logo2" src={bmwlogo} />
                            </div>

                            <div className="marquee-item">
                                <img className="logo3" src={jawalogo} />
                            </div>

                            <div className="marquee-item">
                                <img className="logo4" src={ktmlogo} />
                            </div>

                            <div className="marquee-item">
                                <img className="logo5" src={olalogo} />
                            </div>

                            <div className="marquee-item">
                                <img className="logo6" src={harleylogo} />
                            </div>
                        </div>
                    </div>






                    {/* <div>
                   <div class="brandbox">
                        <img className="logo1" src={enfieldlogo}/>
                    </div>
                    <div class="brandbox">
                        <img className="logo2"  src={bmwlogo}/>
                    </div>
                    <div class="brandbox">
                        <img className="logo3" src={jawalogo}/>
                    </div>
                   </div>
                   <div>       
                   <div class="brandbox">
                        <img className="logo4" src={ktmlogo}/>
                    </div>
                    <div class="brandbox">
                        <img className="logo5"  src={olalogo}/>
                    </div>
                    <div class="brandbox">
                        <img className="logo6" src={harleylogo}/>
                    </div>
                   </div> */}
                </div>


                {/* <!-- bike section --> */}
                <div class="bikes">
                    <div class="card-main">
                        <h1>BIKES</h1>

                        <div class="card-container">

                            {/* <!-- first card --> */}
                            <div class="card-item">
                                {/* <img src="{% static 'royalenfieldhunter350.webp' %}" width="300px"></img> */}
                                <img className="product" src={royal} />
                                <div class="detail">
                                    <h2>Royal Enfield Hunter</h2>
                                    <p>1,50,000-1,75,000</p>
                                    <button><a href="./firstbike">View Details</a></button>
                                </div>
                            </div>

                            {/* <!-- second card --> */}
                            <div class="card-item">
                                {/* <img src="{% static 'ktmrc200.webp' %}" width="300px"></img> */}
                                <img className="product" src={ktm} />
                                <div class="detail">
                                    <h2>KTM Rc 200</h2>
                                    <p>2,18,000</p>
                                    <button><a href="./secondbike">View Details</a></button>
                                </div>
                            </div>
                            {/* <!-- third card --> */}
                            <div class="card-item">
                                {/* <img src="{% static 'jawaperak.webp' %}" width="300px"></img> */}
                                <img className="product" src={jawa} />
                                <div class="detail">
                                    <h2>Jawa Perak</h2>
                                    <p>2,14,000</p>
                                    <button><a href="./thirdbike">View Details</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- go green go electric --> */}
                <div class="electric-head">
                    <h1>go green</h1>
                    <h1>go electric</h1>
                </div>

                {/* <!-- electric section --> */}
                <div class="bikes">
                    <div class="card-main">
                        <h1>ELECTRIC</h1>

                        <div class="card-container">

                            {/* <!-- first card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./firstelectric">View Details</a></button>
                            </div>

                            {/* <!-- second card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./secondelectric">View Details</a></button>
                            </div>
                            {/* <!-- third card --> */}
                            <div class="card-item">
                                {/* <img>img</img> */}
                                <h2>name</h2>
                                <p>price</p>
                                <button><a href="./thirdelectric">View Details</a></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* reviews */}
                <div className="reviews">
                    reviews
                </div>

                {/* location */}
                <div className="location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469402.70437816554!2d77.07623464395338!3d23.19906632038403!
                    2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!
                    1sen!2sin!4v1708552544806!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="contactform">
                        <h1>Contact us</h1>
                    </div>
                </div>

                {/* footer */}
                <div className="footer">
                    <footer className="new_footer_area bg_color">
                    <div className="new_footer_top">
                            <div className="footer_bg">
                            <div className="footer_bg_one">
                                <div className="footer_bg_two">
                                </div>
                            </div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                                        <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                                        <p>Don’t miss any updates of our new templates and extensions.!</p>
                                                        <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate="true" _lpchecked={1}>
                                                            <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                                            <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                                            <p className="mchimp-errmessage" style={{ display: 'none' }} />
                                                            <p className="mchimp-sucmessage" style={{ display: 'none' }} />
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                                        <h3 className="f-title f_600 t_color f_size_18">BIKES</h3>
                                                        <ul className="list-unstyled f_list">
                                                            <li><a href="#">Royal Enfield</a></li>
                                                            <li><a href="#">KTM</a></li>
                                                            <li><a href="#">Harley Davidson</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                                        <h3 className="f-title f_600 t_color f_size_18">ELECTRIC BIKES</h3>
                                                        <ul className="list-unstyled f_list">
                                                            <li><a href="#">OLA</a></li>
                                                            <li><a href="#">Pure EV</a></li>
                                                            <li><a href="#">Bmw</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                                        <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                                        <div className="f_social_icon">
                                                            <a href="#" className="f_social_icon" ><img className="socialicon1" src={whatsapp} /></a>
                                                            <a href="#" ><img className="socialicon2" src={ig} /></a>
                                                            <a href="#" ><img className="socialicon3" src={fb} /></a>
                                                            <a href="#" ><img className="socialicon4" src={twitter} /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                        </div>
                    </footer>

                </div>
            </body>
        </>
    );
}
export default Home;