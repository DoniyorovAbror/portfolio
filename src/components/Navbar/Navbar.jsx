import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import wlogo from "../../img/logo-white.png";
import blogo from "../../img/logo-black.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 70) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const handleMobileMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			id="navigation"
			className={`fixed-top atf-top-header navbar-light bg-faded site-navigation ${
				isScrolled ? "menu-bg navbar-fixed" : ""
			}`}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-3 col-4">
						<div className="site-logo">
							<a href="index.html">
								<img
									className="logo-black"
									src={blogo}
									alt=""
								/>
							</a>
							<a href="index.html">
								<img
									className="logo-white"
									src={wlogo}
									alt=""
								/>
							</a>
						</div>
					</div>
					{/* <!--- END Col --> */}

					<div className="col-lg-10 col-md-9 col-8 ">
						<div className="header_right">
							<nav id="main-menu" className="ms-auto">
								<ul>
									<li>
										<Link
											activeClass="active"
											to="home"
											spy={true}
											offset={0}
											duration={750}
										>
											Home
										</Link>
									</li>

									<li>
										<Link
											activeClass="active"
											to="about"
											spy={true}
											smooth={true}
											offset={0}
											duration={750}
										>
											About
										</Link>
									</li>
									{/* <li>
                                        <a href="#service">Service</a>
                                    </li> */}
									<li>
										<Link
											activeClass="active"
											to="education"
											spy={true}
											smooth={true}
											offset={true}
											duration={750}
										>
											Education
										</Link>
									</li>
									<li>
										<Link
											activeClass="active"
											to="portfolio"
											spy={true}
											smooth={true}
											offset={true}
											duration={750}
										>
											Portfolio
										</Link>
									</li>
									{/* <li>
                                        <a href="#pricing">Pricing</a>
                                    </li> */}
									{/* <li>
                                        <a href="#blog">Blog</a>
                                    </li> */}
									<li>
										<Link
											activeClass="active"
											to="contact"
											spy={true}
											smooth={true}
											offset={true}
											duration={750}
										>
											Contact
										</Link>
									</li>
								</ul>
							</nav>
							<div id="mobile_menu">
								<FontAwesomeIcon
									icon={faBars}
									onClick={handleMobileMenu}
								/>
								<div
									className={`mobile_menu_items ${
										isOpen ? "mobile_menu_open" : ""
									}`}
								>
									<ul>
										<li>
											<Link
												// activeClass="active"
												to="home"
												// spy={true}
												// offset={0}
												// duration={750}
                                                onClick={handleMobileMenu}
											>
												Home
											</Link>
										</li>

										<li>
											<Link
												// activeClass="active"
												to="about"
												// spy={true}
												// smooth={true}
												// offset={0}
												// duration={750}
                                                onClick={handleMobileMenu}
											>
												About
											</Link>
										</li>
										{/* <li>
                                        <a href="#service">Service</a>
                                    </li> */}

										<li>
											<Link
												// activeClass="active"
												to="education"
												// spy={true}
												// smooth={true}
												// offset={true}
												// duration={750}
                                                onClick={handleMobileMenu}
											>
												Education
											</Link>
										</li>
										<li>
											<Link
												// activeClass="active"
												to="portfolio"
												// spy={true}
												// smooth={true}
												// offset={0}
												// duration={750}
                                                onClick={handleMobileMenu}
											>
												Portfolio
											</Link>
										</li>
										{/* <li>
                                        <a href="#pricing">Pricing</a>
                                    </li> */}
										{/* <li>
                                        <a href="#blog">Blog</a>
                                    </li> */}
										<li>
											<Link
												// activeClass="active"
												to="contact"
												// spy={true}
												// smooth={true}
												// offset={0}
												// duration={750}
                                                onClick={handleMobileMenu}
											>
												Contact
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* <!--- END Col --> */}
				</div>
				{/* <!--- END ROW --> */}
			</div>
		</div>
	);
};

export default Navbar;
