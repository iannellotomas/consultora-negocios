import { Link } from "react-router-dom";
import { dataServices } from "../../data/dataServices";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import styles from "./ServicesSection.module.css";
import serviceArrow from "../../assets/serviceArrow.png";

export default function ServicesSection() {
	return (
		<section
			className={styles.section}
			id="servicios">
			<div className={styles.container}>
				<SubTitleSection content="Soluciones a tu alcance" />
				<TitleSection content="Nuestros servicios" />
				<div className={styles.row}>
					{dataServices.map((service) => (
						<Link
							className={styles.card}
							key={service.url}
							to={`/servicio/${service.url}`}>
							<div>
								<img
									className={styles.cardImage}
									src={service.image}
									alt="Imagen de servicio"
								/>
							</div>
							<div className={styles.cardText}>
								<h4 className={styles.cardTitle}>{service.title}</h4>
                <div className={styles.cardArrow}>
                  <img src={serviceArrow} alt="Icono de flecha" />
                </div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
