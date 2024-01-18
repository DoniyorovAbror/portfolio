import React from "react";

const Blog = () => {
    return (
        <section id="blog" className="atf-blog-area atf-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="atf-section-title">
                            <h5
                                className="atf-sheading"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Recent news{" "}
                            </h5>
                            <h2
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Our Latest Blog
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
                                What can our Latest Blog?
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-4 col-md-6 atf-blog-item"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="atf-single-blog">
                            <div className="atf-post-img">
                                <img src="assets/img/blog/1.jpg" alt="Blog" />
                                <div className="atf-blog-date">
                                    {" "}
                                    <a href="#">
                                        27
                                        <br /> <span>Sep</span>
                                    </a>
                                </div>
                            </div>
                            <div className="atf-blog-content">
                                <div className="atf-blog-icon">
                                    <i className="fa fa-user me-2"></i>
                                    <a href="#" className="atf-blog-tag me-2">
                                        Admin by - Al Jalil
                                    </a>
                                    <a href="#" className="atf-blog-time">
                                        5 hours ago
                                    </a>
                                </div>
                                <h3>
                                    <a href="#" className="atf-blog-title">
                                        50 Wordpress Developing
                                    </a>
                                </h3>
                                <p>
                                    More recently dummy text ever since Lorem
                                    Ipsum is simply dummy text of the printing
                                    and type setting more recently dummy text.
                                </p>
                                <div className="atf-blog-btn">
                                    <a href="#" className="atf-themes-btn">
                                        Read Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-md-6 atf-blog-item"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="atf-single-blog">
                            <div className="atf-post-img">
                                <img src="assets/img/blog/2.jpg" alt="Blog" />
                                <div className="atf-blog-date">
                                    {" "}
                                    <a href="#">
                                        27
                                        <br /> <span>Sep</span>
                                    </a>
                                </div>
                            </div>
                            <div className="atf-blog-content">
                                <div className="atf-blog-icon">
                                    <i className="fa fa-user me-2"></i>
                                    <a href="#" className="atf-blog-tag me-2">
                                        Admin by - Al Jalil
                                    </a>
                                    <a href="#" className="atf-blog-time">
                                        5 hours ago
                                    </a>
                                </div>
                                <h3>
                                    <a href="#" className="atf-blog-title">
                                        Best Developer of Asia
                                    </a>
                                </h3>
                                <p>
                                    More recently dummy text ever since Lorem
                                    Ipsum is simply dummy text of the printing
                                    and type setting more recently dummy text.
                                </p>
                                <div className="atf-blog-btn">
                                    <a href="#" className="atf-themes-btn">
                                        Read Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-md-6 atf-blog-item"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <div className="atf-single-blog">
                            <div className="atf-post-img">
                                <img src="assets/img/blog/3.jpg" alt="Blog" />
                                <div className="atf-blog-date">
                                    {" "}
                                    <a href="#">
                                        27
                                        <br /> <span>Sep</span>
                                    </a>
                                </div>
                            </div>
                            <div className="atf-blog-content">
                                <div className="atf-blog-icon">
                                    <i className="fa fa-user me-2"></i>
                                    <a href="#" className="atf-blog-tag me-2">
                                        Admin by - Al Jalil
                                    </a>
                                    <a href="#" className="atf-blog-time">
                                        5 hours ago
                                    </a>
                                </div>
                                <h3>
                                    <a href="#" className="atf-blog-title">
                                        Best Design Works
                                    </a>
                                </h3>
                                <p>
                                    More recently dummy text ever since Lorem
                                    Ipsum is simply dummy text of the printing
                                    and type setting more recently dummy text.
                                </p>
                                <div className="atf-blog-btn">
                                    <a href="#" className="atf-themes-btn">
                                        Read Me
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

export default Blog;
