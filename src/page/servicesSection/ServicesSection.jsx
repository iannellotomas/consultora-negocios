import { dataServices } from "../../data/dataServices";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import styles from "./ServicesSection.module.css";
import ServicesCard from "../../components/servicesCard/ServicesCard";

export default function ServicesSection() {
	return (
		<section
			className={styles.section}
			id="servicios">
			<SubTitleSection content="Soluciones a tu alcance" />
			<TitleSection content="Nuestros servicios" />
			<div className={styles.row1}>
				{dataServices.slice(0, 3).map((service) => (
					<ServicesCard key={service.id} content={service} />
				))}
			</div>
			<div className={styles.container}>
				<div className={styles.row2}>
					<h3>Desata el Potencial de tu Negocio</h3>
					<PrimaryButton
						showArrow
						isLink
						content="Explorar servicios"
						to={`/servicios`}
					/>
				</div>
			</div>
		</section>
	);
}
