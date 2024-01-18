import React, { useEffect, useRef } from "react";
import photo from '../../img/1.jpg';
import Typed from 'typed.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Main = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Ui/Ux Designer", "Web Developer.", "Web Designer"],
            typeSpeed: 40,
            backSpeed: 40,
            backDelay: 2000,
            startDelay: 1500,
            loop: true,
            showCursor: true
        });

        return () => {
            typed.destroy();
        };
    }, []);
  
    return (
        <section
            id="home"
            className="atf-header-area atf-home-area atf-align-items-details"
        >
            <div className="container">
                <div className="row atf-content-details align-items-center">
                    <div
                        className="col-md-7 atf-single-details text-start"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h5>Hello, I'm</h5>
                        <h2 className="mb-0 d-block d-lg-block">
                            Abror <span className="theme_gray"></span>
                            <span ref={el} className="typed-word"></span>{" "}
                        </h2>
                        <p className="">
                            I'm a expert web design and Web development, I'm a
                            Front End Developer. I have a Passion for Creating
                            Clean, Beautiful, Interactive, Minimalistic,
                            Responsive and User Friendly UI, Developed by
                            Modular, Scalable and Functional Code.
                        </p>
                        {/* <!-- Main-btn --> */}
                        <div
                            className="atf-main-btn"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <a href="#hire" className="atf-themes-btn me-4">
                                Hire Me
                            </a>
                            <a href="#about" className="atf-themes-btn">
                                Download Cv
                            </a>
                        </div>
                        {/* <!-- Start Social Share --> */}
                        <div className="atf-banner-social">
                            <ul className="atf-banner-icon  list-unstyled">
                                <li
                                    className="facebook"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                >
                                    <a title="Facebook" href="#">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li
                                    className="linkedin"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                >
                                    <a title="Linkedin" href="#">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li
                                    className="twitter"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                >
                                    <a title="Twitter" href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li
                                    className="instagram"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                >
                                    <a title="Instagram" href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li
                                    className="whatsapp"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                >
                                    <a title="Whatsapp" href="#">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="col-md-5 atf_home_img2 order-2 order-md-1 text-center"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <img
                            src={photo}
                            alt="portfolio"
                            className="card-s"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
