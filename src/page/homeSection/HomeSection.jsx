import { useState } from "react";
import styles from "./HomeSection.module.css";
import iconPresentation from "../../assets/PlayPresentation.png";
import TitlePattern from "../../assets/TitlePattern.png";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import ModalVideo from "../../components/modalVideo/ModalVideo";

export default function HomeSection() {
	const [modalVideoVisible, setModalVideoVisible] = useState(false);

	const openModalVideo = () => {
		setModalVideoVisible(true);
	};

	const closeModalVideo = () => {
		setModalVideoVisible(false);
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.col1}>
					<h1 className={styles.mainTitle}>
						<span>
							Transformamos Tu Negocio en una Historia de Éxito
							<img
								className={styles.pattern}
								src={TitlePattern}
								alt="Icono"
							/>
						</span>
					</h1>
					<p className={styles.paragraph}>
						¿Estás buscando ayuda para tu negocio? ¿Querés alcanzar el éxito? Te
						ofrecemos los servicios que necesitás para lograrlo.
					</p>
					<span>
						<PrimaryButton
							content="Empieza ahora"
							showArrow={true}
							onClick={() => scrollToSection("servicios")}
						/>
						<button
							className={styles.secondaryButton}
							onClick={openModalVideo}>
							<img
								src={iconPresentation}
								alt="Icono de Presentación"
							/>
							Conócenos
						</button>
					</span>
				</div>
				<div className={styles.col2}>
					<img
						className={styles.image}
						src="https://res.cloudinary.com/dwqk2mkgh/image/upload/v1698069669/consultora-de-negocios/homeImage_elh9lk.png"
						alt="Imagen del Home"
					/>
				</div>
			</div>
			{modalVideoVisible && (
				<ModalVideo
					urlVideo="https://www.youtube.com/embed/dQH5nyK-dHU?si=7bvnVa_ik6et12zq"
					closeModalVideo={closeModalVideo}
				/>
			)}
		</section>
	);
}
