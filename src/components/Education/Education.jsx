import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { useTranslation } from "react-i18next";

const Education = () => {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState("nav-interview");
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<section
			id="education"
			className="atf-education-area atf-section-padding"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="atf-section-title">
							<h5
								className="atf-sheading"
								data-aos="fade-up"
								data-aos-duration="3000"
							>
								{t("experienceYear")}
							</h5>
							<h2
								className=""
								data-aos="fade-up"
								data-aos-duration="3000"
							>
								{t("ed&exp")}
							</h2>
							<div
								className="atf-heading-seperator mt-3"
								data-aos="fade-up"
								data-aos-duration="3000"
							></div>
							{/* <p
								className=""
								data-aos="fade-up"
								data-aos-duration="3000"
							>
								Laoreet elementum Sed congue nisl dolorSed
								congue nisl dolor, id dapibus leo elementum
								posuere. Ut aliquam metus quis.
							</p> */}
							{/* <h3
								className=""
								data-aos="fade-up"
								data-aos-duration="3000"
							>
								You can see my Education{" "}
							</h3> */}
						</div>
					</div>
				</div>
				<div className="col-lg-8 offset-lg-2 order-1 order-md-2">
					<div className="atf-education-content">
						<nav>
							<div
								className="nav nav-tabs nav-fill"
								id="nav-tab"
								role="tablist"
							>
								<a
									className={`nav-item nav-link ${
										activeTab === "nav-interview"
											? "active"
											: ""
									}`}
									id="nav-interview-tab"
									onClick={() =>
										handleTabClick("nav-interview")
									}
									data-bs-toggle="tab"
									// href="#nav-interview"
									role="tab"
									aria-selected="false"
								>
									{t("education")}
								</a>
								<a
									className={`nav-item nav-link ${
										activeTab === "nav-about"
											? "active"
											: ""
									}`}
									id="nav-about-tab"
									onClick={() => handleTabClick("nav-about")}
									data-bs-toggle="tab"
									// href="#nav-about"
									role="tab"
									aria-controls="nav-about"
									aria-selected="true"
								>
									{t("experience")}
								</a>
								{/* <a
									className={`nav-item nav-link ${
										activeTab === "nav-award"
											? "active"
											: ""
									}`}
									id="nav-award-tab"
									onClick={() => handleTabClick("nav-award")}
									data-bs-toggle="tab"
									// href="#nav-award"
									role="tab"
									aria-selected="false"
								>
									Award
								</a> */}
							</div>
						</nav>
						<div
							className="tab-content py-3 px-3 px-sm-0"
							id="nav-tabContent"
						>
							<div
								className={`tab-pane fade ${
									activeTab === "nav-interview"
										? "show active"
										: ""
								} `}
								id="nav-interview"
								role="tabpanel"
								aria-labelledby="nav-interview-tab"
							>
								<div className="row">
									<div className="col-lg-12 col-12 col-md-12">
										<div className="atf-resume-box">
											<div className="atf-icon"></div>
											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															{t("institute")}
														</h3>
														<h6 className="atf-time">
															2011-2015
														</h6>
													</div>
												</div>

												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<SchoolIcon />
															</div>
															<h3>
																{t("bachelor")}
															</h3>
															<p className="">
																{t("facility")}
															</p>
														</li>
													</ul>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															SkillFactory
														</h3>
														<h6 className="atf-time">
															2022-2023
														</h6>
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<SchoolIcon />
															</div>
															<h3>{t("sertificate")}</h3>
															<p className="">
																Python Full
																Stack Web
																Developer
															</p>
														</li>
													</ul>
												</div>
											</div>

											{/* <div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															North University
														</h3>
														<h6 className="atf-time">
															2003-2006{" "}
														</h6>
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<i className="fa fa-graduation-cap"></i>
															</div>
															<h3>
																Bachlor Degree
															</h3>
															<p className="">
																Lorem ipsum
																dolor sit amet,
																consectetuer
																adipiscing elit,
																sed diam nonummy
																nibh euismod
																tincidunt ut
																laoreet diam
																nonummy.
															</p>
														</li>
													</ul>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>

							<div
								className={`tab-pane fade ${
									activeTab === "nav-about"
										? "show active"
										: ""
								} `}
								id="nav-about"
								role="tabpanel"
								aria-labelledby="nav-about-tab"
							>
								<div className="row">
									<div className="col-lg-12 col-12 col-md-12">
										<div className="atf-resume-box">
											<div className="atf-icon"></div>
											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															{t("proektpro")}
														</h3>
														<h6 className="atf-time">
														{t("proektpro_year")}
														</h6>
													</div>
												</div>

												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<WorkHistoryIcon />
															</div>
															<h3>{t("director")}</h3>
															<p className="">
																{t('proektpro_response')}
															</p>
														</li>
													</ul>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															{t("me'mor")}
														</h3>
														<h6 className="atf-time">
															2018-2019
														</h6>
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<WorkHistoryIcon />
															</div>
															<h3>
																{t("chief_engineer")}
															</h3>
															<p className="">
																{t('chief_response')}
															</p>
														</li>
													</ul>
												</div>
											</div>

											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															{t("me'mor")}
														</h3>
														<h6 className="atf-time">
															2017-2018
														</h6>
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<WorkHistoryIcon />
															</div>
															<h3>
																{t("engineer")}
															</h3>
															<p className="">
																{t("engineer_response")}
															</p>
														</li>
													</ul>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															{t("termiz_ta'mir")}
														</h3>
														<h6 className="atf-time">
															2016-2017
														</h6>
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<WorkHistoryIcon />
															</div>
															<h3>
																{t('constructor')}
															</h3>
															<p className="">
																{t('constructor_response')}
															</p>
														</li>
													</ul>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															{t("termiz_ta'mir")}
														</h3>
														<h6 className="atf-time">
															2015-2016
														</h6>
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<WorkHistoryIcon />
															</div>
															<h3>
																{t('practicing_constr')}
															</h3>
															<p className="">
																{t('practicing_constr_resp')}
															</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div
								className={`tab-pane fade ${
									activeTab === "nav-award"
										? "show active"
										: ""
								} `}
								id="nav-award"
								role="tabpanel"
								aria-labelledby="nav-award-tab"
							>
								<div className="row">
									<div className="col-lg-12 col-12 col-md-12">
										<div className="atf-resume-box">
											<div className="atf-icon"></div>
											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															Wordpress
														</h3>
														<h6 className="atf-time">
															2012-2014{" "}
														</h6>
													</div>
												</div>

												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<i className="fab fa-wordpress"></i>
															</div>
															<h3>
																Wordpress
																Company
															</h3>
															<p className="">
																Lorem ipsum
																dolor sit amet,
																consectetuer
																adipiscing elit,
																sed diam nonummy
																nibh euismod
																tincidunt ut
																laoreet diam
																nonummy.
															</p>
														</li>
													</ul>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															Twitter
														</h3>
														<h6 className="atf-time">
															2015-2017
														</h6>
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<i className="fab fa-twitter"></i>
															</div>
															<h3>
																Twitter Company
															</h3>
															<p className="">
																Lorem ipsum
																dolor sit amet,
																consectetuer
																adipiscing elit,
																sed diam nonummy
																nibh euismod
																tincidunt ut
																laoreet diam
																nonummy.
															</p>
														</li>
													</ul>
												</div>
											</div>

											<div className="row">
												<div className="col-lg-4 col-md-4">
													<div className="atf-resume-info">
														<h3 className="atf-place">
															Google
														</h3>
														<h6 className="atf-time">
															2018-2020{" "}
														</h6>
													</div>
												</div>
												<div className="col-lg-8 col-md-8">
													<div className="atf-resume-icon"></div>
													<ul>
														<li
															className="atf-single-resume"
															data-aos="fade-up"
															data-aos-duration="1000"
														>
															<div className="atf-single-icon">
																<i className="fab fa-google"></i>
															</div>
															<h3>
																Google Company
															</h3>
															<p className="">
																Lorem ipsum
																dolor sit amet,
																consectetuer
																adipiscing elit,
																sed diam nonummy
																nibh euismod
																tincidunt ut
																laoreet diam
																nonummy.
															</p>
														</li>
													</ul>
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

export default Education;
