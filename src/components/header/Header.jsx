import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isHeaderScrolled, setHeaderScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		setIsOpen(false);
	};

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setHeaderScrolled(true);
		} else {
			setHeaderScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`${styles.header} ${
				isHeaderScrolled ? styles.headerScrolled : ""
			}`}>
			<nav className={styles.nav}>
				{/* Logo */}
				<a
					className={styles.logo}
					href="/">
					<img
						src={logo}
						alt="Logo"
					/>
				</a>
				{/* Menu */}
				<div className={`${styles.menu} ${isOpen && styles.open}`}>
					{/* Links */}
					<Link
						className={styles.menuLink}
						onClick={() => scrollToSection("servicios")}>
						Servicios
					</Link>
					<Link
						className={styles.menuLink}
						onClick={() => scrollToSection("sobre-mi")}>
						Acerca De
					</Link>
					<Link
						className={styles.menuLink}
						onClick={() => scrollToSection("casos-de-exito")}>
						Casos de Éxito
					</Link>
					<Link
						className={styles.menuLink}
						onClick={() => scrollToSection("testimonios")}>
						Testimonios
					</Link>
				</div>
				{/* Open Menu Icon */}
				<div className={styles.navRight}>
					<a
						className={styles.contactButton}
						onClick={() => scrollToSection("contacto")}>
						<svg
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M13 25C19.6276 25 25 19.6276 25 13C25 6.3724 19.6276 1 13 1C6.3724 1 1 6.3724 1 13C1 14.92 1.4512 16.7344 2.2516 18.3436C2.4652 18.7708 2.536 19.2592 2.4124 19.7212L1.6984 22.3924C1.62795 22.6567 1.62821 22.9348 1.69917 23.199C1.77012 23.4631 1.90927 23.7039 2.10267 23.8973C2.29606 24.0907 2.5369 24.2299 2.80104 24.3008C3.06518 24.3718 3.34333 24.3721 3.6076 24.3016L6.2788 23.5876C6.74249 23.4709 7.23283 23.5277 7.6576 23.7472C9.31711 24.5736 11.1461 25.0025 13 25Z"
								stroke="white"
								stroke-width="2"
							/>
							<path
								d="M8.19995 11.2H17.8M8.19995 15.4H14.8"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
						<p>Contáctanos</p>
					</a>
					<button
						className={`${styles.buttonMenu} ${
							isOpen ? styles.buttonMenuClose : ""
						}`}
						onClick={toggleMenu}
						title={isOpen ? "Ocultar menú lateral" : "Desplegar menú lateral"}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</nav>
		</header>
	);
}
