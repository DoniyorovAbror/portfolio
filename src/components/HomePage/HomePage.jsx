import React, { useEffect, useState } from "react";
import "./HomePage.module.css";
import Preloader from "../Preloader/Preloader";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import About from "../About/About";
import Education from "../Education/Education";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonial/Testimonial";
import Blog from "../Blog/Blog";
import Hire from "../Hire/Hire";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import StyleSwitcher from "../StyleSwitcher/StyleSwitcher";
import "./responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        AOS.init({
            offset: 120,

            delay: 0,

            easing: "ease",

            duration: 5000,

            disable: false, // Condition when AOS should be disabled. e.g. 'mobile'

            once: false,

            mirror: false, // whether elements should animate out while scrolling past them

            startEvent: "DOMContentLoaded",
        });

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="page-wrapper">
            <Preloader />

            {/* Back to Top Start */}
            {isVisible ? (
                <div className="back-to-top active" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                </div>
            ) : (
                <div className="back-to-top">
                    <FontAwesomeIcon icon={faLongArrowAltUp} />
                </div>
            )}
            {/* Back to Top End */}

            {/* START NAVBAR */}
            <Navbar />
            {/*   END NAVBAR */}

            {/* Main Home Starts */}
            <Main />
            {/* Main Home Ends  */}

            {/* START ABOUT */}
            <About />
            {/* END ABOUT */}

            {/* Education Section Start */}
            <Education />
            {/* Education Section End */}

            {/* Service Section Start */}
            <Service />
            {/* Service Section End */}

            {/* Portfolio Section Start */}
            <Portfolio />
            {/* Portfolio Section End */}

            {/* Start Pricing Section  */}
            <Pricing />
            {/* Pricing Section End */}

            {/* Start Testimonials Section  */}
            <Testimonial />
            {/* Testimonials Section End */}

            {/* Start Blog Section  */}
            <Blog />
            {/* Blog Section End */}

            {/* Hire Section Start */}
            <Hire />
            {/* Hire Section End */}

            {/* Start Contact Section  */}
            <Contact />
            {/* Contact Section End */}

            {/* Footer-top Section Start */}
            <Footer />
            {/* Footer Section End */}

            {/* STYLE SWITCHER */}
            {/* <StyleSwitcher /> */}
            {/* END OF STYLE SWITCHER */}
        </div>
    );
};

export default HomePage;
