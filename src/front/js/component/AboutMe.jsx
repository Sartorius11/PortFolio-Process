import React from "react";


export const AboutMe = () => {
    return (
        <div className="w-full lg:w-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                🎓 Formación Académica y Técnica
            </h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {/* IES Islas Filipinas */}
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Sept. 2020 - Jun. 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Desarrollo de Aplicaciones Multiplataforma – IES Islas Filipinas
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
                        Formación centrada en el desarrollo de aplicaciones para diferentes plataformas.
                    </p>
                    <ul className="ml-6 list-disc text-gray-500 dark:text-gray-400">
                        <li className="ml-2">☕ Java – Lenguaje principal, con enfoque en Programación Orientada a Objetos</li>
                        <li className="ml-2">🧠 POO – Clases, herencia, polimorfismo, encapsulación</li>
                        <li className="ml-2">🗄️ Bases de Datos (SQL) – Diseño, consultas y gestión de datos</li>
                    </ul>
                </li>

                {/* Tajamar */}
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Oct. 2022 - May. 2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Máster Desarrollo Web Full Stack + Multicloud – Tajamar
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
                        Formación avanzada en desarrollo web completo con tecnologías Microsoft.
                    </p>
                    <ul className="ml-6 list-disc text-gray-500 dark:text-gray-400">
                        <li className="ml-2">🟨 JavaScript, JQuery, CSS3 – Fundamentos del desarrollo web moderno</li>
                        <li className="ml-2">⚛️ React, Vue.js, Angular – Frameworks para crear interfaces rápidas y dinámicas</li>
                        <li className="ml-2">🟦 C# y .NET – Programación backend y lógica de negocio</li>
                    </ul>
                </li>

                {/* 4Geeks */}
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        Oct. 2024 – Abr. 2025
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Full Stack Developer – 4Geeks Academy
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
                        Bootcamp intensivo enfocado en el desarrollo full stack.
                    </p>
                    <ul className="ml-6 list-disc text-gray-500 dark:text-gray-400">
                        <li className="ml-2">🟨 JavaScript – Lógica, manipulación del DOM y desarrollo web moderno</li>
                        <li className="ml-2">⚛️ React – Creación de interfaces dinámicas con componentes reutilizables</li>
                        <li className="ml-2">🐍 Python 3 – Backend, APIs REST y manejo de datos</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
};