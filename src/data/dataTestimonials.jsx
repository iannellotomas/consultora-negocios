import testimonial1 from "../assets/testimonial1.jpg";
import testimonial2 from "../assets/testimonial2.jpg";
import testimonial3 from "../assets/testimonial3.jpg";
import testimonial4 from "../assets/testimonial4.png";
import testimonial5 from "../assets/testimonial5.png";

export const dataTestimonials = [
	{
		id: "1",
		image: (
			<img
				src={testimonial1}
				alt="Imagen de persona"
			/>
		),
		title: "Jeronimo Durán",
		subtitle: "Neumáticos y accesorios",
		rating: 5,
		paragraph:
			"Emmanuel me proporcionó orientación en áreas clave como finanzas, marketing y estrategias de crecimiento, lo que ha sido fundamental para el negocio. Gracias a sus métodos, estamos avanzando con confianza en el desarrollo de nuestro negocio.",
	},

	{
		id: "2",
		image: (
			<img
				src={testimonial2}
				alt="Imagen de persona"
			/>
		),
		title: "Vanina y Claudio",
		subtitle: "Ferretería",
		rating: 4,
		paragraph:
			"El programa de negocios de Emma fue fundamental para definir nuestros objetivos y lograrlos, al mismo tiempo que nos brindó una estructura sólida para gestionar nuestras finanzas y evaluar la rentabilidad de nuestro emprendimiento.",
	},

	{
		id: "3",
		image: (
			<img
				src={testimonial3}
				alt="Imagen de persona"
			/>
		),
		title: "Fabiana Rojo",
		subtitle: "Artículos para el hogar",
		rating: 5,
		paragraph:
			"Emmanuel me ha sido de gran ayuda en la organización y gestión efectiva de mis finanzas. Gracias a su programa de negocios personalizado y a su asesoramiento, ahora tengo una comprensión más clara de lo rentable que es mi negocio.",
	},

	{
		id: "4",
		image: (
			<img
				src={testimonial4}
				alt="Imagen de persona"
			/>
		),
		title: "Sandra Sánchez",
		subtitle: "Emprendedora",
		rating: 5,
		paragraph:
			"Recomiendo el servicio de este gran profesional... lleno de conocimento, profesionalismo y creatividad para mejorar y hacer crecer tu emprendimiento. Con gran experiencia en economía empresarial nacional e internacional... No dejes de consultarle a Emma!!!",
	},

	{
		id: "5",
		image: (
			<img
				src={testimonial5}
				alt="Imagen de persona"
			/>
		),
		title: "Daniel Avalos",
		subtitle: "Emprendedor",
		rating: 5,
		paragraph:
			"Emma es un asesor altamente recomendado, conocedor en diversas áreas, incluyendo finanzas, marketing, proyectos y estrategias de ventas. Su amplio conocimiento y herramientas han sido invaluables para mi emprendimiento. Merece sin duda 5 estrellas.",
	},
];
