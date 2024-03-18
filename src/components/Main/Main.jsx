import React, { useEffect, useRef } from "react";
import photo from "../../img/1.jpeg";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faLinkedin,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Main = () => {
	const { t } = useTranslation();
	const el = useRef(null);
	const who = t('who');
	
	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [who],
			typeSpeed: 40,
			backSpeed: 40,
			backDelay: 2000,
			startDelay: 1500,
			loop: true,
			showCursor: true,
		});

		return () => {
			typed.destroy();
		};
	}, [who]);

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
						<h5>{t("hello")}</h5>
						<h2 className="mb-0 d-block d-lg-block">
							Abror <span className="theme_gray"></span>
							<span ref={el} className="typed-word"></span>{" "}
						</h2>
						<p className="">{t("introduction")}</p>
						{/* <!-- Main-btn --> */}
						{/* <div
                            className="atf-main-btn"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        > */}
						{/* <a href="#hire" className="atf-themes-btn me-4">
                                Hire Me
                            </a> */}
						{/* <a href="#about" className="atf-themes-btn">
                                Download CV
                            </a>
                        </div> */}
						{/* <!-- Start Social Share --> */}
						<div className="atf-banner-social">
							<ul className="atf-banner-icon  list-unstyled">
								<li
									className="facebook"
									data-aos="fade-in"
									data-aos-duration="1000"
								>
									<a
										title="Facebook"
										href="https://www.facebook.com/profile.php?id=100081628271471"
										target="_blank"
									>
										<FontAwesomeIcon icon={faFacebook} />
									</a>
								</li>
								<li
									className="linkedin"
									data-aos="fade-in"
									data-aos-duration="1000"
								>
									<a
										title="Linkedin"
										href="https://www.linkedin.com/in/abror-doniyorov-3b939123b/"
										target="_blank"
									>
										<FontAwesomeIcon icon={faLinkedin} />
									</a>
								</li>
								<li
									className="telegram"
									data-aos="fade-in"
									data-aos-duration="1000"
								>
									<a
										title="Telegram"
										href="https://t.me/abror_doniyorov88"
										target="_blank"
									>
										<FontAwesomeIcon icon={faTelegram} />
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
						<img src={photo} alt="portfolio" className="card-s" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
