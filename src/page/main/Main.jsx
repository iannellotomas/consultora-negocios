import WhatsappButton from "../../components/buttons/whatsappButton/WhatsappButton";
import HomeSection from "../homeSection/HomeSection";
import NumbersSection from "../numbersSection/NumbersSection";
import AboutSection from "../aboutSection/AboutSection";
import ServicesSection from "../servicesSection/ServicesSection";
import BenefitsSection from "../benefitsSection/BenefitsSection";
import TestimonialsSection from "../testimonialsSection/TestimonialsSection";
import ContactSection from "../contactSection/ContactSection";
import SuccessCasesSection from "../successCasesSection/SuccessCasesSection";

export default function Main() {
	return (
		<main>
			<WhatsappButton />
			<HomeSection />
			<NumbersSection />
			<ServicesSection />
			<AboutSection />
			<BenefitsSection />
			<SuccessCasesSection />
			<TestimonialsSection />
			<ContactSection />
		</main>
	);
}
