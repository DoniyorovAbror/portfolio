import React from "react";

const Pricing = () => {
    return (
        <section id="pricing" className="atf-pricing-area atf-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="atf-section-title">
                            <h5
                                className="atf-sheading"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Latest Pricing{" "}
                            </h5>
                            <h2
                                className="text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Our Pricing
                            </h2>
                            <div
                                className="atf-heading-seperator mt-3"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            ></div>
                            <p
                                className="atf-color-ase"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Laoreet elementum Sed congue nisl dolorSed
                                congue nisl dolor, id dapibus leo elementum
                                posuere. Ut aliquam metus quis.
                            </p>
                            <h3
                                className="atf-color-ase"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                How is Our price value{" "}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-md-6 col-lg-4"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="atf-pricingTable">
                            <div className="atf-pricingTable-border">
                                <div className="atf-pricingTable-header">
                                    <h4 className="atf-pricing-title">
                                        Standard
                                    </h4>
                                </div>
                                <div className="atf-price-value">
                                    <span className="atf-currency">$</span>
                                    <span className="atf-amount">50.95</span>
                                    <br />
                                    <span className="atf-duration">
                                        /2 Month Package
                                    </span>
                                </div>
                            </div>

                            <ul className="atf-pricing-content">
                                <li>1 GB Disk Space</li>
                                <li>2 Domain Names</li>
                                <li>1 Email Address</li>
                                <li>Enhanced Security</li>
                                <li>Customer Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div className="atf-pricingTable-signup">
                                {/* <!-- Hero-btn --> */}
                                <div className="atf-main-btn">
                                    <a href="#" className="atf-themes-btn">
                                        Get Start
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-md-6 col-lg-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="atf-pricingTable">
                            <div className="atf-pricingTable-border">
                                <div className="atf-pricingTable-header">
                                    <h4 className="atf-pricing-title">
                                        Business
                                    </h4>
                                </div>
                                <div className="atf-price-value">
                                    <span className="atf-currency">$</span>
                                    <span className="atf-amount">80.95</span>
                                    <br />
                                    <span className="atf-duration">
                                        /3 Month Package
                                    </span>
                                </div>
                            </div>
                            <ul className="atf-pricing-content">
                                <li>1 GB Disk Space</li>
                                <li>2 Domain Names</li>
                                <li>1 Email Address</li>
                                <li>Enhanced Security</li>
                                <li>Customer Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div className="atf-pricingTable-signup">
                                {/* <!-- Hero-btn --> */}
                                <div className="atf-main-btn">
                                    <a href="#" className="atf-themes-btn">
                                        Get Start
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <div className="atf-pricingTable">
                            <div className="atf-pricingTable-border">
                                <div className="atf-pricingTable-header">
                                    <h4 className="atf-pricing-title">
                                        Premium
                                    </h4>
                                </div>
                                <div className="atf-price-value">
                                    <span className="atf-currency">$</span>
                                    <span className="atf-amount">95.95</span>
                                    <br />
                                    <span className="atf-duration">
                                        /12 Month Package
                                    </span>
                                </div>
                            </div>
                            <ul className="atf-pricing-content">
                                <li>1 GB Disk Space</li>
                                <li>2 Domain Names</li>
                                <li>1 Email Address</li>
                                <li>Enhanced Security</li>
                                <li>Customer Service</li>
                                <li>24/7 Support</li>
                            </ul>
                            <div className="atf-pricingTable-signup">
                                {/* <!-- Hero-btn --> */}
                                <div className="atf-main-btn">
                                    <a href="#" className="atf-themes-btn">
                                        Get Start
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
