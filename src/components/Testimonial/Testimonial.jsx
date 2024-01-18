import React from "react";

const Testimonial = () => {
    return (
        <section
            id="testimonial"
            className="atf-testimonial-area atf-section-padding"
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
                                Happy Client{" "}
                            </h5>
                            <h2
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Our Testimonial
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
                                What say our work to client{" "}
                            </h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Testimonials section Starts--> */}
                <div
                    id="testimonial-slider"
                    className="atf-testimonials-slide atf-main-testimonials atf-testimonial-slider owl-carousel owl-theme"
                >
                    <div className="atf-testimonial-item">
                        {/* <!-- Single review--> */}
                        <div className="atf-testimonial-inner">
                            <div className="atf-testimonial-icon">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <div className="atf-testimonial-text">
                                Lorem ipsum available but the majority have or
                                suffered alteration in some form, by injected
                                humour, or randomised words which don't look
                                even slightly believableThere are many
                                variations of passages.
                            </div>
                        </div>
                        <div className="atf-testimonial-info ">
                            <div className="atf-testimonial-image">
                                <a href="#">
                                    <img
                                        src="assets/img/client/03.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="atf-testimonial-name">
                                <h3>Ar-Rahman</h3>
                            </div>
                            <div className="atf-testimonial-designation">
                                <p>(CEO)</p>
                            </div>
                            <div className="atf-testimonial-star-icon">
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="atf-testimonial-item">
                        {/* <!-- Single review--> */}
                        <div className="atf-testimonial-inner">
                            <div className="atf-testimonial-icon">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <div className="atf-testimonial-text">
                                Lorem ipsum available but the majority have or
                                suffered alteration in some form, by injected
                                humour, or randomised words which don't look
                                even slightly believableThere are many
                                variations of passages.
                            </div>
                        </div>
                        <div className="atf-testimonial-info">
                            <div className="atf-testimonial-image">
                                <a href="#">
                                    <img
                                        src="assets/img/client/02.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="atf-testimonial-name">
                                <h3>Ar-Rahim</h3>
                            </div>
                            <div className="atf-testimonial-designation">
                                <p>(CEO)</p>
                            </div>
                            <div className="atf-testimonial-star-icon">
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div
                        className="atf-testimonial-item"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        {/* <!-- Single review--> */}
                        <div className="atf-testimonial-inner">
                            <div className="atf-testimonial-icon">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <div className="atf-testimonial-text">
                                Lorem ipsum available but the majority have or
                                suffered alteration in some form, by injected
                                humour, or randomised words which don't look
                                even slightly believableThere are many
                                variations of passages.
                            </div>
                        </div>
                        <div className="atf-testimonial-info">
                            <div className="atf-testimonial-image">
                                <a href="#">
                                    <img
                                        src="assets/img/client/01.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="atf-testimonial-name">
                                <h3>Al-Aziiz</h3>
                            </div>
                            <div className="atf-testimonial-designation">
                                <p>(CEO)</p>
                            </div>
                            <div className="atf-testimonial-star-icon">
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                                <i className="fa fa-star atf-testimonial-black"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Testimonials section Ends --> */}
            </div>
        </section>
    );
};

export default Testimonial;
