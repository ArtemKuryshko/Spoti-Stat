'use client';

import { FC } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface GenresChartProps {
    topGenres: string[];
}

const GenresChart: FC<GenresChartProps> = ({ topGenres }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Legend
    );

    const chartData = {
        labels: topGenres,
        datasets: [
            {
                data: topGenres.map((genre, index: number) => 1 / (index + 1) * 1000),
                backgroundColor: '#1DB954', // Spotify green
                borderRadius: 0,
                barThickness: 100,
            },
        ],
    };

    const options = {
        indexAxis: 'x' as const,
        plugins: {
            title: {
                display: true,
                text: 'You really like ROCK out of all genres!', // TODO: change this to the top genre
                color: '#FFFFFF',
                font: {
                    size: 24,
                    weight: 'bold' as const,
                },
                padding: {
                    bottom: 30,
                },
            },
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#FFFFFF',
                    font: {
                        size: 16,
                    },
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="w-full h-[400px] bg-[#121212] rounded-lg p-6">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default GenresChart;