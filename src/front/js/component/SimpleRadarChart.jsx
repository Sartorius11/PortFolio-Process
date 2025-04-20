import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    { subject: 'JavaScript', A: 120, fullMark: 150 },
    { subject: 'React', A: 100, fullMark: 150 },
    { subject: 'SQL', A: 50, fullMark: 150 },
    { subject: 'Python', A: 110, fullMark: 150 },
    { subject: 'C#', A: 50, fullMark: 150 },
    { subject: 'HTML/CSS', A: 90, fullMark: 150 }, 
];

export const SimpleRadarChart = () => {
    return (
        <div className="w-full lg:w-1/2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                🔍 Nivel de Conocimiento por Tecnología
            </h2>
            <div className="flex-1 min-h-[30rem]"> {/* Altura fija pero flexible */}
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart 
                        cx="50%" 
                        cy="50%" 
                        outerRadius="75%" 
                        data={data}
                        margin={{ top: 20, right: 30, bottom: 20, left: 30 }} 
                    >
                        <PolarGrid />
                        <PolarAngleAxis 
                            dataKey="subject" 
                            tick={{ fontSize: 18 }} 
                            stroke="#ccc" 
                        />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar
                            name="Nivel"
                            dataKey="A"
                            stroke="#38bdf8"
                            fill="#38bdf8"
                            fillOpacity={0.4}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};