import React from "react";
import { Link } from "react-router-dom";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ content, isLink = false, to, showArrow, onClick }) => {
	const ButtonComponent = isLink ? Link : "button";

	return (
		<ButtonComponent
			to={isLink ? to : undefined}
			className={styles.button}
			onClick={onClick}>
			{content}
			{showArrow && (
				<svg
					className={styles.arrow}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
				</svg>
			)}
		</ButtonComponent>
	);
};

export default PrimaryButton;
