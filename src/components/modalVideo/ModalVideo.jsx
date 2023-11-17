import styles from "./ModalVideo.module.css";

export default function ModalVideo({ urlVideo, closeModalVideo }) {
	return (
		<div className={styles.modalBackdrop}>
			<button
				className={styles.closeModalButton}
				onClick={closeModalVideo}
				title="Cerrar modal">
				<span></span>
				<span></span>
			</button>
			<div className={styles.modalBox}>
				<iframe
					width="560"
					height="315"
					src={urlVideo}
					title="Reproductor de video de YouTube"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen></iframe>
			</div>
		</div>
	);
}
