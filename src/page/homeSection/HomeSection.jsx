import { useState } from "react";
import Modal from "../../components/modal/Modal";
import styles from "./HomeSection.module.css";
import iconPresentation from "../../assets/PlayPresentation.png";
import TitlePattern from "../../assets/TitlePattern.png";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";

export default function HomeSection() {
	const [modalVisible, setModalVisible] = useState(false);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
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
							onClick={openModal}
						/>
						<button
							className={styles.secondaryButton}
							onClick={openModal}>
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
			{modalVisible && <Modal closeModal={closeModal} />}
		</section>
	);
}
