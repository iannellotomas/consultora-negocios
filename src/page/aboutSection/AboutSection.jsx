import aboutImage from "../../assets/about.jpg";
import styles from "./AboutSection.module.css";
import iconLamp from "../../assets/iconLamp.png";
import iconTool from "../../assets/iconTool.png";
import iconRocket from "../../assets/iconRocket.png";

export default function AboutSection() {
	return (
		<section
			className={styles.section}
			id="sobre-mi">
			<div className={styles.container}>
				<div className={styles.row1}>
					<h2>
						Te proporcionamos el saber que necesitás para{" "}
						<strong>elevar tu negocio al siguiente nivel.</strong>
					</h2>
				</div>
				<div className={styles.row2}>
					<div className={styles.col1}></div>
					<div className={styles.col2}>
						<div className={styles.aboutCard}>
							<p>
								Soy <strong>Emmanuel Mansilla</strong>, un apasionado consultor
								de negocios con una amplia trayectoria y estoy aquí para
								brindarte mi experiencia y trabajar codo a codo con vos en el
								crecimiento de tu empresa.
							</p>
						</div>
						<div className={styles.aboutCard}>
							<p>
								Nuestra misión es proporcionarte los conocimientos esenciales
								para unirte al selecto grupo de visionarios que se atreven a
								llevar su empresa al siguiente nivel, abriendo las puertas hacia
								el <strong>éxito empresarial.</strong>
							</p>
						</div>
					</div>
				</div>
				<div className={styles.row3}>
					<h2>Confían en Nosotros</h2>
					<div className={styles.cardCustomer}>
						<span>
							<img
								src={iconLamp}
								alt="Icono de lámpara"
							/>
						</span>
						<h3>Emprendedores <br /> Audaces</h3>
					</div>
					<div className={styles.cardCustomer}>
						<span>
							<img
								src={iconTool}
								alt="Icono de herramienta"
							/>
						</span>
						<h3>Profesionales <br /> Comprometidos</h3>
					</div>
					<div className={styles.cardCustomer}>
						<span>
							<img
								src={iconRocket}
								alt="Icono de cohete"
							/>
						</span>
						<h3>Empresarios <br /> Visionarios</h3>
					</div>
				</div>
			</div>
		</section>
	);
}
