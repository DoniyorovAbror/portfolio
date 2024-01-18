import React, { useEffect, useRef, useState } from "react";
import photo_1 from '../../img/portfolio/1.jpg';
import photo_2 from '../../img/portfolio/2.jpg';
import photo_3 from '../../img/portfolio/3.jpg';
import photo_4 from '../../img/portfolio/4.jpg';
import photo_5 from '../../img/portfolio/5.jpg';
import photo_6 from '../../img/portfolio/6.jpg';
import photo_7 from '../../img/portfolio/7.jpg';
import photo_8 from '../../img/portfolio/8.jpg';
import photo_9 from '../../img/portfolio/9.jpg';
import $ from 'jquery';
import 'isotope-layout';

const Portfolio = () => {
    const isotopeRef = useRef();

    useEffect(() => {
        const $isotope = $(isotopeRef.current).isotope({
            itemSelector: '',
            layoutMode: 'fitRows'
        });
        return () => $isotope('destroy');
    }, []);
    
    return (
        <section
            id="portfolio"
            className="atf-portfolio-area atf-section-padding"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="atf-section-title">
                            <h5
                                className="atf-sheading"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                My Works
                            </h5>
                            <h2
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                My portfolio
                            </h2>
                            <div
                                className="atf-heading-seperator mt-3"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            ></div>
                            <p
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Laoreet elementum Sed congue nisl dolorSed
                                congue nisl dolor, id dapibus leo elementum
                                posuere. Ut aliquam metus quis.
                            </p>
                            <h3
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                How did our portfolio gallery{" "}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="atf-portfolio-nav wow fadeInUp">
                            <ul className="nav" id="atf-portfolio-flters">
                                <li
                                    className="filter filter-active"
                                    data-filter=".all"
                                >
                                    All
                                </li>
                                <li className="filter" data-filter=".website">
                                    Digital
                                </li>
                                <li className="filter" data-filter=".media">
                                    Creative
                                </li>
                                <li className="filter" data-filter=".app">
                                    Photography
                                </li>
                                <li className="filter" data-filter=".logo">
                                    Design
                                </li>
                            </ul>
                        </div>
                        <div className="row atf-main-portfolio">
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio all logo card-s"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_1}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_1}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>Creative Web Design</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio all media app card-s"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_2}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_2}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>Awesome Logo Design</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio all app website card-s"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_3}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_3}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>
                                                        Unique Photography
                                                        Design
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio all logo card-s"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_4}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_4}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>Curved And Design</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio all logo media card-s"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_5}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_5}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>
                                                        Fantastic Logo Design
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio all app website card-s"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_6}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_6}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>
                                                        Fantastic Logo Design
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio all website card-s"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_7}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_7}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>
                                                        Creative Logo Design
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio app website all card-s"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_8}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_8}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>
                                                        Creative Logo Design
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            {/* <!-- portfolio-item --> */}
                            <div
                                className="col-lg-4 col-md-6 atf-grid-portfolio all website card-s"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <a
                                    className="atf-popup-img atf-single-portfolio"
                                    href={photo_9}
                                >
                                    <figure>
                                        <div className="image-box">
                                            <img
                                                src={photo_9}
                                                alt="img"
                                            />
                                            <div className="atf-hover-portfolio">
                                                <div className="atf-portfolio-content">
                                                    <p>Design & Marketing</p>
                                                    <h3>
                                                        Creative Logo Design
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        {/* <!-- Hero-btn --> */}
                        <div className="atf-portfolio-btn text-center mt-5">
                            <a href="#" className="atf-themes-btn">
                                View More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
