import React from 'react';
import './slider.scss';

interface TheaterInfo {
    id: number;
    name: string;
    image: string;
    foundedYear: number;
    performancesCount: number;
    ageLimit: string;
    description: string;
}

const MOCK_THEATERS: TheaterInfo[] = [
    {
        id: 1,
        name: 'Казанский театр юного зрителя',
        image: '/theater-1.jpg',
        foundedYear: 1932,
        performancesCount: 45,
        ageLimit: '0+',
        description: 'Ведущий детский театр Татарстана с богатой историей и современными постановками',
    },
];

export const TheaterSlider: React.FC = () => {
    const currentTheater = MOCK_THEATERS[0];

    return (
        <section className="theater-slider">
            <div className="container">
                <div className="theater-slider__content">
                    <h1 className="theater-slider__title">{currentTheater.name}</h1>

                    <div className="theater-slider__info">
                        <div className="theater-slider__stats">
                            <div className="stat-item">
                                <span className="stat-label">Основан</span>
                                <span className="stat-value">{currentTheater.foundedYear}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Спектаклей</span>
                                <span className="stat-value">{currentTheater.performancesCount}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Возраст</span>
                                <span className="stat-value">{currentTheater.ageLimit}</span>
                            </div>
                        </div>

                        <button className="theater-slider__details-btn">
                            Узнать подробнее
                        </button>
                    </div>

                    <p className="theater-slider__description">
                        {currentTheater.description}
                    </p>
                </div>
            </div>
        </section>
    );
};