import React, { useState } from "react";
import photo_1 from "../../img/portfolio/1.jpg";
import photo_27 from "../../img/portfolio/27-flat-block.png";
import photo_3 from "../../img/portfolio/3.jpg";
import photo_23 from "../../img/portfolio/23-school-Shurchi.png";
import photo_5 from "../../img/portfolio/5.jpg";
import photo_6 from "../../img/portfolio/6.jpg";
import photo_7 from "../../img/portfolio/7.jpg";
import photo_17 from "../../img/portfolio/17-kids.png";
import photo_30 from "../../img/portfolio/30-flat-block.png";
import background from "../../img/portfolio/background.jpg";

const Portfolio = () => {
	const [filter, setFilter] = useState(".all");
    // const [visibleItems, setVisibleItems] = useState(9);
	// console.log(document.querySelectorAll('.atf-main-portfolio > .all').length)
	document
		.querySelectorAll("#atf-portfolio-flters > .filter")
		.forEach((item) => {
			item.addEventListener("click", () => {
				document
					.querySelectorAll("#atf-portfolio-flters > .filter")
					.forEach((el) => el.classList.remove("filter-active"));
				item.classList.add("filter-active");

				setFilter(item.getAttribute("data-filter"));
			});
		});
	const filteredItems = document.querySelectorAll(
		".atf-main-portfolio > .all"
	);

	filteredItems.forEach((item) => {
		if (filter === ".all") {
			item.style.display = "block";
		} else {
			if (item.classList.contains(filter)) {
				item.style.display = "block"; // Показываем элементы, удовлетворяющие выбранному фильтру
			} else {
				item.style.display = "none"; // Скрываем элементы, которые не удовлетворяют выбранному фильтру
			}
		}
	});

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
								Mening ishlarim
							</h5>
							<h2
								className=""
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								Mening portfolio
							</h2>
							<div
								className="atf-heading-seperator mt-3"
								data-aos="fade-up"
								data-aos-duration="1000"
							></div>
							{/* <p
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                Laoreet elementum Sed congue nisl dolorSed
                                congue nisl dolor, id dapibus leo elementum
                                posuere. Ut aliquam metus quis.
                            </p> */}
							{/* <h3
                                className=""
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                How did our portfolio gallery{" "}
                            </h3> */}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-lg-12">
						<div className="atf-portfolio-nav wow fadeInUp">
							<ul className="nav" id="atf-portfolio-flters">
								<li
									className="filter filter-active"
									data-filter="all"
								>
									Hammasi &nbsp;
								</li>
								<li className="filter" data-filter="y1516">
									2015-2016
								</li>
								<li className="filter" data-filter="y1718">
									2017-2018
								</li>
								<li className="filter" data-filter="y1920">
									2019-2020
								</li>
								<li className="filter" data-filter="y2122">
									2021-2022
								</li>
							</ul>
						</div>
						<div className="row atf-main-portfolio">
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y1516 card-s"
								data-aos="fade-right"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={background}
								>
									<figure>
										<div className="image-box">
											<img src={background} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Dastlabki ishimni shu
														yilning sentyabr-dekabr
														oylarida Surxonadaryo
														viloyati hokimiyati
														“Yagona byurtmachi
														xizmati” injinering
														kompaniyasi byurtmasi
														asosida Angor va
														Jarkurgan tumanlarida
														qiymati 3.2 mlrd bo’lgan
														180 o’quvchiga
														mo’ljallangan ikki
														qavatli 2 ta maktabni
														loyihasida konstruktor
														bo’lib ishtirok etdim.{" "}
													</p>
													{/* <h3>Creative Web Design</h3> */}
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y1516 card-s"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={photo_2}
								>
									<figure>
										<div className="image-box">
											<img src={background} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Surxonadaryo viloyati
														hokimiyati “Yagona
														byurtmachi xizmati”
														injinering kompaniyasi
														byurtmasi asosida Denov
														tumanida qiymati 3.4
														mlrd bo’lgan 360
														o’quvchiga mo’ljallangan
														ikki qavatli maktabni
														loyihasida konstruktor
														bo’lib ishtirok etdim.
														Bu loyiha 2017-yil qurib
														bitkazildi va o’z
														faoliyatini boshladi
													</p>
													{/* <h3>Awesome Logo Design</h3> */}
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y1718 card-s"
								data-aos="fade-left"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={photo_3}
								>
									<figure>
										<div className="image-box">
											<img src={photo_3} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Surxonadaryo viloyati
														hokimiyati “Yagona
														byurtmachi xizmati”
														injinering kompaniyasi
														byurtmasi asosida lohiha
														qiymati 7.4 mlrd so’m
														bo’lgan Termiz shahrida
														joylashgan “Surxon”
														sport majmuasining 10
														000 kishilik futbol
														stadionini mukammal
														ta’mirlash loyihasida
														konstruktor sifatida
														ishtirok etdim.{" "}
													</p>
													{/* <h3>
														Unique Photography
														Design
													</h3> */}
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>

							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y1718 card-s"
								data-aos="fade-left"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={photo_3}
								>
									<figure>
										<div className="image-box">
											<img src={photo_3} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Surxonadaryo viloyati
														hokimiyati “Yagona
														byurtmachi xizmati”
														injinering kompaniyasi
														byurtmasi asosida
														Jarkurgan tumani
														43-sonli maktabga 315
														o’quvchiga mo’ljallangan
														ikki qavatli qo’shimcha
														blok.
													</p>
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y1718 card-s"
								data-aos="fade-left"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={photo_3}
								>
									<figure>
										<div className="image-box">
											<img src={photo_3} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Surxonadaryo viloyati
														hokimiyati “Yagona
														byurtmachi xizmati”
														injinering kompaniyasi
														byurtmasi asosida jami
														qiymati 100 mlrdga yaqin
														bo’lga 11 ta loyihar
														ustida ishladik va
														qurilish ekspertizasidan
														ijobiy hulosalar oldik
													</p>
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y1920 card-s"
								data-aos="fade-right"
								data-aos-duration="1000"
							>
								<a
									className="atf-popup-img atf-single-portfolio"
									 href={photo_23}
								>
									<figure>
										<div className="image-box">
											<img src={photo_23} alt="img" />
											<div className="atf-hover-portfolio">
												<div className="atf-portfolio-content">
													<p>
														Sho’rchi tumanida
														joylashgan 23-sonli
														maktabiga 268-o’rinli
														o’quv binosini qurish.
														Loyiha qiymati 3.3 mlrd
														so’m. Bu davrgacha
														maktabning bor yog’i bir
														dona 80-o’rinli o’quv
														blogi mavjud edi, qolgan
														bolalar esa 4-5 km yo’l
														bosib boshqa qishloq
														maktabiga qatnardi, bu
														anchagina no
														qulayliklarkeltirib
														chiqarardi. Biz
														loyihalangan zamonaviy
														o’quv blogi qurilishi
														bilan bu muammolar
														to’liq bartaraf etildi.
													</p>
													{/* <h3>Curved And Design</h3> */}
												</div>
											</div>
										</div>
									</figure>
								</a>
							</div>
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y1920 card-s"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={photo_5}
								>
									<figure>
										<div className="image-box">
											<img src={photo_5} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Sariosiyo tumaniga 150
														ming saqlov birligi
														quvvatli Davlat arxivi
														binosini qurish.
														Jamiyatimiz tomonidan
														hozirgi zamon
														talablariga to’liq javob
														beradigan loyiha ishlab
														chiqildi va qurilish
														ekspertizasidan ijobiy
														hulosa olindi, loyiha
														qiymati 8.7 mlrd so’m.
														Afsuski hozirgi
														vaqtgacha tumanning o’z
														arxivi binosi mavjut
														bo’lmasada hukumat
														tomonidan qurilishni
														moliyalashtirish
														kechiktirilmoqda.
													</p>
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y2122 card-s"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={photo_6}
								>
									<figure>
										<div className="image-box">
											<img src={photo_6} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Sherabod tumanida
														chegara postini qurish.
														Loyiha qiymati 13.8 mlrd
														so’m. Bu obekt o’z
														ichiga Ma’muriy bino,
														harbiylar xizmatchilar
														uchun 24 honadonli turar
														binolari, 20 o’rinli
														bolalar bog’chasi va
														harbiy hizmatchilar
														oilalarini bandligini
														taminlash uchun
														tikuv-qandolatchilik
														sexi, har hil sport
														maydonlari binolarini
														o’z ichiga oldi.
													</p>
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y2122 card-s"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={photo_6}
								>
									<figure>
										<div className="image-box">
											<img src={photo_6} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Sherabod tumani 40-sonli
														maktabining 624
														o’quvchiga mo’ljallangan
														o’quv binosini mukammal
														ta’mirlash. Loyiha
														qiymati 3.7 mlrd so’m.
													</p>
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y2122 card-s"
								data-aos="fade-left"
								data-aos-duration="1000"
							>
								<div
									className="atf-popup-img atf-single-portfolio"
									// href={photo_7}
								>
									<figure>
										<div className="image-box">
											<img src={photo_7} alt="img" />
											<div className="atf-hover-portfolio without-photo">
												<div className="atf-portfolio-content">
													<p>
														Sherabod tumani 40-sonli
														maktab filialiga 120
														o’rinli o’quv blogi
														qurish. Loyiha qiymati
														1.15 mlrd so’m
													</p>
												</div>
											</div>
										</div>
									</figure>
								</div>
							</div>
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio y2122 all card-s"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<a
									className="atf-popup-img atf-single-portfolio"
									href={photo_17}
								>
									<figure>
										<div className="image-box">
											<img src={photo_17} alt="img" />
											<div className="atf-hover-portfolio">
												<div className="atf-portfolio-content">
													<p>
														Sherobod tumani 17-sonli
														maktabgacha ta’lim
														muassasasiga 90 o’rinli
														yangi blog qurish.
														Loyiha qiymati 3.5 mlrd
														so’m. Yuqoridagi 3 ta
														obekt obod qishloq
														dasturi bo’yicha amalga
														oshirildi va qishloqning
														infrastrukturasini
														rivojlantirishda o’z
														hissamizni qo’shdik deb
														ayta olaman
													</p>
												</div>
											</div>
										</div>
									</figure>
								</a>
							</div>
							{/* <!-- portfolio-item --> */}
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y2122 card-s"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<a
									className="atf-popup-img atf-single-portfolio"
									href={photo_27}
								>
									<figure>
										<div className="image-box">
											<img src={photo_27} alt="img" />
											<div className="atf-hover-portfolio">
												<div className="atf-portfolio-content">
													<p>
														Ozbekiston Respublikasi
														chegara qo’shinlari
														buyurtmasi asosida
														Muzrabod tumanida
														chegarani qo’riqlash
														postlariga harbiy
														xizmatchilar uchun 27
														xonadonli 2 ta, 30 va 36
														honadonli turar joy
														binolarini loyihaladik,
														loyihalarning jami
														qiymati 41 mlrd so’m
														bo’lgan. Qurilish montaj
														ishlari tugallshi bilan
														xarbiy hizmatchilarning
														yashash uyiga bo’lgan
														ehtiyojlari to’liq
														qoplandi
													</p>
												</div>
											</div>
										</div>
									</figure>
								</a>
							</div>
							<div
								className="col-lg-4 col-md-6 atf-grid-portfolio all y2122 card-s"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								<a
									className="atf-popup-img atf-single-portfolio"
									href={photo_30}
								>
									<figure>
										<div className="image-box">
											<img src={photo_30} alt="img" />
											<div className="atf-hover-portfolio">
												<div className="atf-portfolio-content">
													<p>
														Termiz tumanida
														chegarani qo’riqlash
														postlariga 27-xonadon
														3-qavatli 2 ta jami
														qiymati 21.4 mlrd
														bo’lgan turar joy
														binolarini qurish
														loyihalari bajardik.
														Ozbekiston Respublikasi
														chegara qo’shinlari
														buyurtmasi asosida
														chegarani qo’riqlash
														postlarining mavjud
														binolarini mukammal
														ta’mirlash ishlarini
														bajardik, loyihlarning
														jami qiymati 21.8 mlrd
														so’mni tashkil qilgan
													</p>
												</div>
											</div>
										</div>
									</figure>
								</a>
							</div>
						</div>

						{/* <!-- Hero-btn --> */}
						{/* {filter === "all" ? (
							<div className="atf-portfolio-btn text-center mt-5">
								<a href="#" className="atf-themes-btn">
									View More
								</a>
							</div>
						) : (
							""
						)} */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
