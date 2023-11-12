import { useNavigate } from "react-router-dom";
import styles from "./GoBackButton.module.css";

export default function GoBackButton() {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(-1)}
			className={styles.button}>
			<svg
				width="17"
				height="13"
				viewBox="0 0 17 13"
				fill="none"
				className={styles.icon}
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M15.2755 6.49475H1.27551M1.27551 6.49475L6.52551 1.24475M1.27551 6.49475L6.52551 11.7448"
					stroke="black"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			Volver
		</button>
	);
}
