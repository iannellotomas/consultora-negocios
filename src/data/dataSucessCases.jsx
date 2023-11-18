import MonteCara from "../assets/MonteCara.png";
import MonteCaraImage from "../assets/MonteCara-image.png";
import Chapa1 from "../assets/Chapa1.png";
import Chapa1Image from "../assets/Chapa1-image.png";
import sucessCase1 from "../assets/sucessCase1.png";
import sucessCase2 from "../assets/sucessCase2.png";
import sucessCase3 from "../assets/sucessCase3.png";
import sucessCase4 from "../assets/sucessCase4.png";
import sucessCase5 from "../assets/sucessCase5.png";
import sucessCase6 from "../assets/sucessCase6.png";

export const dataVideoCases = [
	{
		id: 1,
		title: "Inmobiliaria Monte-Cara",
		logo: (
			<img
				src={MonteCara}
				alt="Logo de Monte-Cara"
			/>
		),
		image: (
			<img
				src={MonteCaraImage}
				alt="Inmobiliaria Monte-Cara"
			/>
		),
		video: "https://www.youtube.com/embed/DVrnr2WrZwM?si=vOq1bnfKR2eogWSd",
		paragraph:
			"Celebra dos años de éxito tras transformar su negocio con la ayuda de Emmanuel Mansilla. Desde ventas y alquileres hasta marketing y finanzas, han experimentado un crecimiento notable. Descubre cómo superaron desafíos y desorganización para construir un emprendimiento exitoso.",
	},
	{
		id: 2,
		title: "Chapa1: Neumáticos y Accesorios",
		logo: (
			<img
				src={Chapa1}
				alt="Logo de Chapa1"
			/>
		),
		image: (
			<img
				src={Chapa1Image}
				alt="Chapa1: Neumáticos y Accesorios"
			/>
		),
		video: "https://www.youtube.com/embed/yBt1UN22IIc?si=hAH6-tELG-h7Pbxp",
		paragraph:
			"Se unió a nosotros hace más de un año, buscando vender lámparas para autos desde casa. Con el respaldo de Emmanuel, han crecido significativamente, aprendiendo sobre organización, finanzas y marketing. Su historia resalta que la confianza y dedicación superan los miedos iniciales.",
	},
];

export const dataSuccessCases = [
	{
		id: 1,
		title: "Marula: Heladería y Confitería",
		image: (
			<img
				src={sucessCase1}
				alt="Marula: Heladería y Confitería"
			/>
		),
		services: [4, 5, 7],
		paragraph:
			"Con la asesoría integral de Emmanuel, Marula elevó su visión empresarial, optimizando procesos, mejorando la planificación y fortaleciendo la gestión financiera. Este enfoque impulsó su crecimiento, consolidándose como líderes entre las heladerías y confiterías locales. La historia demuestra cómo una asesoría experta puede transformar un negocio.",
	},
	{
		id: 2,
		title: "Empleados gastronómicos",
		image: (
			<img
				src={sucessCase2}
				alt="Empleados gastronómicos"
			/>
		),
		services: [2, 8, 5],
		paragraph:
			"Inmersos en el universo gastronómico, Emmanuel lideró una capacitación grupal envolvente, explorando las complejidades estratégicas. Juntos, dieron forma a un plan de marketing que fusionó la pasión por la cocina con tácticas innovadoras. El resultado: un equipo más cohesionado, clientes cautivados y un impacto duradero en el mundo culinario.",
	},
	{
		id: 3,
		title: "Tienda Blanco y Negro",
		image: (
			<img
				src={sucessCase3}
				alt="Tienda Blanco y Negro"
			/>
		),
		services: [9, 6, 11],
		paragraph:
			"Con el liderazgo estratégico de Emmanuel, la tienda Blanco y Negro mejoró su eficiencia y destacó en un mercado competitivo. La asesoría especializada en finanzas y organización empresarial, junto con estrategias en ventas innovadoras, fortaleció la conexión con los clientes, dejando un impacto duradero en la moda minorista.",
	},
	{
		id: 4,
		title: "Géminis: Deco y Fotografía",
		image: (
			<img
				src={sucessCase4}
				alt="Géminis: Deco y Fotografía"
			/>
		),
		services: [1, 4, 13],
		paragraph:
			"Géminis, especializado en decoración y fotografía, experimentó una transformación impulsada por el diagnóstico de Emmanuel. La asesoría de negocios y la gestión de redes sociales fortalecieron su presencia en línea, destacando la influencia del asesoramiento especializado en este creativo emprendimiento.",
	},
	{
		id: 5,
		title: "Lorena Ruiz: Salud y Estética",
		image: (
			<img
				src={sucessCase5}
				alt="Lorena Ruiz: Salud y Estética"
			/>
		),
		services: [8, 9, 4],
		paragraph:
			"A través de un detallado plan de marketing, Emmanuel la ayudó a redefinir la imagen de su negocio, atrayendo a nuevos clientes. Con estrategias financieras personalizadas, se logró estabilizar y potenciar las finanzas de Lorena. La asesoría de negocios proporcionó una visión estratégica, llevando a Lorena a convertirse en referente en su sector.",
	},
	{
		id: 6,
		title: "Family Market",
		image: (
			<img
				src={sucessCase6}
				alt="Family Market"
			/>
		),
		services: [4, 5, 6],
		paragraph:
			"El supermercado familiar con más de 50 años de trayectoria, buscaba renovar y optimizar sus operaciones. Emmanuel, mediante una sólida asesoría de negocios, revitalizó la planificación empresarial, reorganizando eficientemente la estructura interna. Le permitió a Family Market no solo mantener su legado, sino también expandirse y enfrentar con éxito los desafíos del mercado actual.",
	}
];
