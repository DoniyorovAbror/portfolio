import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Preloader from "../Preloader/Preloader";

const Translation = () => {
	const [lang, setLang] = useState("uz");
	const [loading, setLoading] = useState(true);
	const { i18n } = useTranslation();

	const switchhandler = () => {
		setTimeout(() => {
			setLoading(false);
		}, 800);
	};
	useEffect(() => {
		switchhandler();
		i18n.changeLanguage(lang);
	}, [lang]);

	if (loading) {
		return <Preloader />;
	}
	return (
		<div className="language">
			<ul>
				{/* <li>ru</li> */}
				<li
					className={lang === "uz" ? "current" : ""}
					onClick={() => {
						setLang("uz");
						setLoading(true);
					}}
				>
					uz
				</li>
				<li
					className={lang === "en" ? "current" : ""}
					onClick={() => {
						setLang("en");
						setLoading(true);
					}}
				>
					en
				</li>
			</ul>
		</div>
	);
};

export default Translation;
