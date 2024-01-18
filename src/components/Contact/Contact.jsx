import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="atf-contact-area atf-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="atf-section-title">
                            <h5
                                className="atf-sheading"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Get in touch
                            </h5>
                            <h2
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Contact me
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
                                Contact With me
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="row atf-contact-info text-center">
                            <div
                                className="col-lg-4 col-md-4 col-12"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="atf-contact-details">
                                    <i className="fa fa-home"></i>
                                    <h4>Home Address</h4>
                                    <p>
                                        1 Grafton Street, Dublin, Ireland
                                        University.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-4 col-12"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="atf-contact-details">
                                    <i className="fa fa-phone"></i>
                                    <h4>Mobile Number</h4>
                                    <p>+135 773 321 4442</p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-4 col-12"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="atf-contact-details">
                                    <i className="fa fa-envelope"></i>
                                    <h4>Email Address</h4>
                                    <p>demo@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <form
                            className="form atf-contact-form"
                            id="contact-form"
                            action="mail.php"
                            method="POST"
                        >
                            <div className="atf-main-contact">
                                <div
                                    className="row"
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                >
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required="required"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input
                                                id="form_email"
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required="required"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div
                                            className="form-group wow fadeInUp"
                                            data-wow-duration="1s"
                                            data-wow-delay="0.2s"
                                            data-wow-offset="0"
                                        >
                                            <input
                                                id="subject"
                                                type="text"
                                                name="subject"
                                                placeholder="Your Subject"
                                                required="required"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder="Your Message"
                                                rows="4"
                                                required="required"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="atf-contact-btn">
                                            <button
                                                type="submit"
                                                className="btn atf-themes-btn"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <br />
                        <p className="form-message"></p>
                    </div>
                    <div
                        className="col-md-6 col-lg-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        {/* <!-- Google Map start--> */}
                        <div id="atf-map-area">
                            <iframe
                                // style="border:0"
                                title="Contact"
                                src="https://maps.google.com/maps?width=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* <!-- Google Map end --> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
