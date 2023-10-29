import { useState } from "react";
import { dataTestimonials } from "../../data/dataTestimonials";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import testimonialQuoteImage from "../../assets/testimonial-quote.png";
import styles from "./TestimonialsSection.module.css";
import testimonialStar from "../../assets/TestimonialStar.png";
import arrowBack from "../../assets/ArrowBack.png";
import arrowNext from "../../assets/ArrowNext.png";

export default function TestimonialsSection() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	const ratingStars = (rating) => {
		const stars = [];
		for (let i = 0; i < rating; i++) {
			stars.push(
				<img
					key={i}
					src={testimonialStar}
					alt="Imagen de Estrella"
				/>
			);
		}
		return stars;
	};

	const handleNextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % dataTestimonials.length);
	};

	const handlePrevTestimonial = () => {
		setCurrentTestimonial((prev) =>
			prev === 0 ? dataTestimonials.length - 1 : prev - 1
		);
	};

	return (
		<section
			className={styles.section}
			id="testimonios">
			<div className={styles.container}>
				<SubTitleSection content="Palabras que inspiran el éxito" />
				<TitleSection content="Historias de satisfacción" />
				<div className={styles.row}>
					{dataTestimonials.map((testimonial, index) => (
						<div
							className={`${styles.card} ${
								index === currentTestimonial ? styles.active : ""
							}`}
							key={testimonial.id}>
							<div className={styles.cardCustomer}>
								<div className={styles.boxImage}>{testimonial.image}</div>
								<h4 className={styles.cardTitle}>{testimonial.title}</h4>
								<h5 className={styles.cardSubtitle}>{testimonial.subtitle}</h5>
								<div className={styles.ratingStars}>
									{ratingStars(testimonial.rating)}
								</div>
							</div>
							<div className={styles.cardReview}>
								<p className={styles.cardParagraph}>{testimonial.paragraph}</p>
								{/* Quote */}
								<img
									className={styles.testimonialQuoteImage}
									src={testimonialQuoteImage}
									alt=""
								/>
							</div>
						</div>
					))}
					<div className={styles.moreTestimonials}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				{/* Slide Controls */}
				<div className={styles.controls}>
					<button
						onClick={handlePrevTestimonial}
						aria-label="Testimonio anterior"
            title="Testimonio anterior">
						<img
							src={arrowBack}
							alt=""
						/>
					</button>
					<button
						onClick={handleNextTestimonial}
						aria-label="Testimonio siguiente"
            title="Testimonio siguiente">
						<img
							src={arrowNext}
							alt=""
						/>
					</button>
				</div>
			</div>
		</section>
	);
}
