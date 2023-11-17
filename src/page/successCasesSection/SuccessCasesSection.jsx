import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataVideoCases, dataSuccessCases } from "../../data/dataSucessCases";
import { dataServices } from "../../data/dataServices";
import styles from "./SuccessCasesSection.module.css";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import ModalVideo from "../../components/modalVideo/ModalVideo";
import Customer1 from "../../assets/customer1.png";
import Customer2 from "../../assets/customer2.png";
import Customer3 from "../../assets/customer3.png";
import Customer4 from "../../assets/customer4.png";
import Customer5 from "../../assets/customer5.png";

export default function SuccessCasesSection() {
	const [modalOpen, setModalOpen] = useState(false);
	const [currentVideoUrl, setCurrentVideoUrl] = useState("");
	const [visibleCards, setVisibleCards] = useState(3);

	const openModal = (videoUrl) => {
		setCurrentVideoUrl(videoUrl);
		setModalOpen(true);
	};

	const closeModal = () => {
		setCurrentVideoUrl("");
		setModalOpen(false);
	};

	const toggleVisibility = () => {
		setVisibleCards((prevVisibleCards) =>
			prevVisibleCards === 3 ? dataSuccessCases.length : 3
		);
	};

	return (
		<section
			className={styles.section}
			id="casos-de-exito">
			<div className={styles.container}>
				<SubTitleSection content="Triunfos inspiradores" />
				<TitleSection content="Casos de éxito" />
				<div className={styles.rows}>
					<div className={styles.row1}>
						{dataVideoCases.map((successCase) => (
							<div
								className={styles.casesVideoCard}
								key={successCase.id}>
								<div
									className={styles.cardImage}
									title="Ver video"
									onClick={() => openModal(successCase.video)}>
									{successCase.image}
									<span>
										<svg
											width="21"
											height="22"
											viewBox="0 0 21 22"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M18.2941 8.17275C18.7609 8.42096 19.1513 8.79149 19.4235 9.24463C19.6958 9.69777 19.8396 10.2164 19.8396 10.7451C19.8396 11.2737 19.6958 11.7924 19.4235 12.2456C19.1513 12.6987 18.7609 13.0692 18.2941 13.3174L5.84349 20.0879C3.83868 21.1783 1.37616 19.7594 1.37616 17.5165V3.9746C1.37616 1.72976 3.83868 0.311914 5.84349 1.40129L18.2941 8.17275Z"
												stroke="white"
												strokeWidth="2"
											/>
										</svg>
									</span>
								</div>
								<div className={styles.cardInfo}>
									<div className={styles.logo}>{successCase.logo}</div>
									<p>{successCase.paragraph}</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.row2}>
						<div className={styles.logoCard}>
							<img
								src={Customer1}
								alt="Super Del Valle"
							/>
						</div>
						<div className={styles.logoCard}>
							<img
								src={Customer2}
								alt="Carpintería G8"
							/>
						</div>
						<div className={styles.logoCard}>
							<img
								src={Customer3}
								alt="Tienda Blanco y Negro"
							/>
						</div>
						<div className={styles.logoCard}>
							<img
								src={Customer4}
								alt="Marula: Confiteria y Heladería"
							/>
						</div>
						<div className={styles.logoCard}>
							<img
								src={Customer5}
								alt="El Parador: Restobar y Pizza"
							/>
						</div>
						<div className={styles.logoCard}>
							<h3>+800</h3>
							<p>Clientes</p>
						</div>
					</div>
					<div
						className={`${styles.row3} ${
							visibleCards === 3 ? styles.loadMore : ""
						}`}>
						{dataSuccessCases.slice(0, visibleCards).map((successCase) => (
							<div
								className={styles.sucessCaseCard}
								key={successCase.id}>
								<div className={styles.cardImage}>{successCase.image}</div>
								<div className={styles.cardInfo}>
									<span>
										<h3>{successCase.title}</h3>
										<div className={styles.services}>
											{successCase.services.map((serviceId) => {
												const service = dataServices.find(
													(s) => s.id === serviceId
												);
												return (
													<Link
														to={`/servicio/${service.url}`}
														key={service.id}
														className={styles.serviceChip}
														title="Ver servicio">
														{service.title}
														<svg
															width="13"
															height="13"
															viewBox="0 0 13 13"
															fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<path
																d="M1.39795 11.2446L11.398 1.24463M11.398 1.24463H3.89795M11.398 1.24463V8.74463"
																stroke="#976823"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
															/>
														</svg>
													</Link>
												);
											})}
										</div>
									</span>
									<p>{successCase.paragraph}</p>
								</div>
							</div>
						))}
						<button
							className={styles.loadMoreButton}
							onClick={toggleVisibility}>
							<span>
								{visibleCards === 3 ? "Ver más" : "Ver menos"}
								<svg
									width="13"
									height="16"
									viewBox="0 0 13 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6.39795 0.744751L6.39795 14.7448M6.39795 14.7448L11.6479 9.49475M6.39795 14.7448L1.14795 9.49475"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
			{modalOpen && (
				<ModalVideo
					urlVideo={currentVideoUrl}
					closeModalVideo={closeModal}
				/>
			)}
		</section>
	);
}
