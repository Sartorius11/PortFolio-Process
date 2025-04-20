import React from "react";
import { AboutMe } from "../component/AboutMe";
import { SimpleRadarChart } from "../component/SimpleRadarChart";

export const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch"> {/* items-stretch para igualar altura */}
                    <AboutMe />
                    <SimpleRadarChart />
                </div>
            </div>
        </div>
    );
};