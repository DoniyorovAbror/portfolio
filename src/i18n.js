import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../public/locales/en/translation.json";
import uz from "../public/locales/uz/translation.json";

const resources = {
	en: {
		translation: en,
	},
	uz: {
		translation: uz,
	},
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "uz",
		// fallbackLng: "uz",
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
