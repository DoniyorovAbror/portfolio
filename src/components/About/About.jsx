import React from "react";
import Odometer from "./Odometer";
import photo from '../../img/about.png';
import {faCheck, faSmile, faCoffee, faClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <section id="about" className="atf-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-5 col-12">
                        <div className="atf-about-img text-lg-center text-center order-2 order-md-1">
                            <img
                                src={photo}
                                alt="about-img"
                                className="img-fluid card-s"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 col-12">
                        <div className="atf-about-content">
                            <div className="atf-section-title">
                                <h5
                                    className="atf-sheading"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    Basic Info Aboue Me
                                </h5>
                                <h2
                                    className=""
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    About us
                                </h2>
                                <h3
                                    className=""
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                >
                                    Hello, I'm Al Jalil Creative Web Designer in
                                    USA
                                </h3>
                            </div>
                            <p
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                I'm a expert Web design and Web development
                                focused on clean & user-friendly experiences, I
                                am experiences about building excellent Websites
                                that improves the lives of those around me.Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </p>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="atf-about-skill">
                                        <div className="row">
                                            <div
                                                className="col-lg-6 col-md-6 col-12"
                                                data-aos="fade-up"
                                                data-aos-duration="1000"
                                            >
                                                <h5>UI Design</h5>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        aria-valuenow="60"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                        // style="max-width: 65%"
                                                        style={{
                                                            maxWidth: "65%",
                                                        }}
                                                    >
                                                        <span className="title">
                                                            65%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="col-lg-6 col-md-6 col-12"
                                                data-aos="fade-up"
                                                data-aos-duration="1000"
                                            >
                                                <h5>UX Design</h5>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        aria-valuenow="60"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                        // style="max-width: 75%"
                                                        style={{
                                                            maxWidth: "75%",
                                                        }}
                                                    >
                                                        <span className="title">
                                                            75%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div
                                                className="col-lg-6 col-md-6 col-12"
                                                data-aos="fade-up"
                                                data-aos-duration="1000"
                                            >
                                                <h5>Web Design</h5>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        aria-valuenow="60"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                        // style="max-width: 85%"
                                                        style={{
                                                            maxWidth: "85%",
                                                        }}
                                                    >
                                                        <span className="title">
                                                            85%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="col-lg-6 col-md-6 col-12"
                                                data-aos="fade-up"
                                                data-aos-duration="1000"
                                            >
                                                <h5>Php Analysis</h5>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar wow fadeInLeft"
                                                        role="progressbar"
                                                        aria-valuenow="60"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                        // style="max-width: 95%"
                                                        style={{
                                                            maxWidth: "95%",
                                                        }}
                                                    >
                                                        <span className="title">
                                                            95%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div
                                            className="col-lg-3 col-md-3 col-6"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <div className="atf-counter">
                                                <div className="atf-counter-content">
                                                    <Odometer count={1500} />

                                                    <h3>Projects Work</h3>
                                                </div>
                                                <div className="atf-counter-icon">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-3 col-md-3 col-6"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <div className="atf-counter">
                                                <div className="atf-counter-content">
                                                    <Odometer count={4500} />

                                                    <h3>Happy Client</h3>
                                                </div>
                                                <div className="atf-counter-icon">
                                                    <FontAwesomeIcon icon={faSmile}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-3 col-md-3 col-6"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <div className="atf-counter">
                                                <div className="atf-counter-content">
                                                    <Odometer count={5500} />
                                                    <h3>Cup Coffee</h3>
                                                </div>
                                                <div className="atf-counter-icon">
                                                    <FontAwesomeIcon icon={faCoffee} />
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="col-lg-3 col-md-3 col-6"
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            <div className="atf-counter">
                                                <div className="atf-counter-content">
                                                    <Odometer count={6500} />
                                                    <h3>Timely Deliver</h3>
                                                </div>
                                                <div className="atf-counter-icon">
                                                    <FontAwesomeIcon icon={faClock} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
