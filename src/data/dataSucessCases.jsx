import MonteCara from "../assets/MonteCara.png";
import MonteCaraImage from "../assets/MonteCara-image.png";
import Chapa1 from "../assets/Chapa1.png";
import Chapa1Image from "../assets/Chapa1-image.png";
import sucessCase1 from "../assets/sucessCase1.png"
import sucessCase2 from "../assets/sucessCase2.png"

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
		title: "Helados Lomoro",
		image: (
			<img
				src={sucessCase1}
				alt="Helados Lomoro"
			/>
		),
		services: [5, 8, 9],
		paragraph:
			"Celebra dos años de éxito tras transformar su negocio con la ayuda de Emmanuel Mansilla. Desde ventas y alquileres hasta marketing y finanzas, han experimentado un crecimiento notable. Descubre cómo superaron desafíos y desorganización para construir un emprendimiento exitoso.",
	},
  {
		id: 2,
		title: "Capacitación Grupal",
		image: (
			<img
				src={sucessCase2}
				alt="Capacitación Grupal"
			/>
		),
		services: [2, 3, 4],
		paragraph:
			"Celebra dos años de éxito tras transformar su negocio con la ayuda de Emmanuel Mansilla. Desde ventas y alquileres hasta marketing y finanzas, han experimentado un crecimiento notable. Descubre cómo superaron desafíos y desorganización para construir un emprendimiento exitoso.",
	},
	{
		id: 3,
		title: "Lorena Ruiz",
		image: (
			<img
				src={sucessCase2}
				alt="Lorena Ruiz"
			/>
		),
		services: [2, 3, 4],
		paragraph:
			"Celebra dos años de éxito tras transformar su negocio con la ayuda de Emmanuel Mansilla. Desde ventas y alquileres hasta marketing y finanzas, han experimentado un crecimiento notable. Descubre cómo superaron desafíos y desorganización para construir un emprendimiento exitoso.",
	},
	{
		id: 4,
		title: "Nombre del Cliente",
		image: (
			<img
				src={sucessCase2}
				alt="Nombre del Cliente"
			/>
		),
		services: [2, 3, 4],
		paragraph:
			"Celebra dos años de éxito tras transformar su negocio con la ayuda de Emmanuel Mansilla. Desde ventas y alquileres hasta marketing y finanzas, han experimentado un crecimiento notable. Descubre cómo superaron desafíos y desorganización para construir un emprendimiento exitoso.",
	},
];
