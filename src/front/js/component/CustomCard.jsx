import { Card } from "flowbite-react";
import { Badge, Kbd } from "flowbite-react";

export function CustomCard({ title, description, text, imgSrc, imgAlt, imgHoverSrc, linkTo, gitHub, tecnologias }) {
    return (
        <Card className="w-110 group relative overflow-hidden">
            {/* Contenedor de imágenes */}
            <div className="relative w-full h-56"> {/* Ajustamos la altura a h-56 */}
                {/* Imagen de fondo - por defecto */}
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:opacity-0 absolute top-0 left-0"
                />
                {/* Imagen de hover - al pasar el mouse */}
                <img
                    src={imgHoverSrc}
                    alt={imgAlt}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:opacity-100 absolute top-0 left-0 opacity-0"
                />
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-6 relative z-10">
                <div className="flex justify-between items-center">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    {/* Enlace a GitHub */}
                    <a href={linkTo} target="_blank" rel="noopener noreferrer">
                        <Badge color="gray" className="cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-4 h-4 inline-block mr-1"
                            >
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.95.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.75.4-1.27.72-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.24 2.76.12 3.05.75.81 1.2 1.83 1.2 3.09 0 4.42-2.7 5.39-5.27 5.67.42.36.77 1.08.77 2.18v3.23c0 .31.21.67.8.56A10.994 10.994 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                            </svg>
                            {gitHub}
                        </Badge>
                    </a>
                </div>
                <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mt-4">
                    {description}
                </p>

                <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mt-3">
                    {text}
                </p>
                
                {/* Mostrar las tecnologías */}
                <div className="flex flex-wrap gap-1 mt-5">
                    {tecnologias && tecnologias.map((tecnologia, index) => (
                        <Kbd key={index}>{tecnologia}</Kbd>
                    ))}
                </div>
                
            </div>
        </Card>
    );
}
