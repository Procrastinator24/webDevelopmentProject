import React, { useState } from 'react';
import './slider.scss';
import {useNavigate} from "react-router-dom";
import theatreIMG from "@/shared/images/sliderIMG.jpg"

interface TheaterInfo {
    id: number;
    name: string;
    image: string;
    foundedYear: number;
    performancesCount: number;
    ageLimit: string;
}

const MOCK_THEATERS: TheaterInfo[] = [
    {
        id: 1,
        name: 'Казанский театр юного зрителя',
        image: theatreIMG,
        foundedYear: 1932,
        performancesCount: 34,
        ageLimit: '0+',
    },
    {
        id: 2,
        name: 'Казанский театр юного зрителя',
        image: theatreIMG,
        foundedYear: 1932,
        performancesCount: 34,
        ageLimit: '6+',
    },
    {
        id: 3,
        name: 'Казанский театр юного зрителя',
        image: theatreIMG,
        foundedYear: 1932,
        performancesCount: 34,
        ageLimit: '12+',
    },
];

export const TheaterSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const currentTheater = MOCK_THEATERS[currentSlide];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % MOCK_THEATERS.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + MOCK_THEATERS.length) % MOCK_THEATERS.length);
    };



    const navigate = useNavigate();

    // ... остальной код

    const handleDetailsClick = () => {
        navigate('/about-city');
    };
    return (
        <section className="theater-slider">
            {/* Секция с фоновой картинкой и названием */}
            <div
                className="theater-slider__hero"
                style={{ backgroundImage: `url(${currentTheater.image})` }}
            >
                <div className="theater-slider__overlay">
                    <div className="container">
                        <div className="theater-slider__hero-content">
                            <h1 className="theater-slider__title">
                                {currentTheater.name}
                            </h1>

                            <div className="theater-slider__navigation">
                                <button
                                    className="slider-nav-btn slider-nav-btn--prev"
                                    onClick={prevSlide}
                                    aria-label="Предыдущий театр"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>

                                <div className="slider-dots">
                                    {MOCK_THEATERS.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`slider-dot ${index === currentSlide ? 'slider-dot--active' : ''}`}
                                            onClick={() => setCurrentSlide(index)}
                                            aria-label={`Перейти к театру ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    className="slider-nav-btn slider-nav-btn--next"
                                    onClick={nextSlide}
                                    aria-label="Следующий театр"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Секция со статистикой под картинкой */}
            <div className="theater-slider__stats-section">
                <div className="container">
                    <div className="theater-slider__stats-content">
                        <div className="theater-slider__stats-grid">
                            <div className="stat-card">
                                <div className="stat-card__info">
                                    <div className="stat-card__label">Год основания</div>
                                    <div className="stat-card__value">{currentTheater.foundedYear}</div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card__info">
                                    <div className="stat-card__label">Спектаклей в репертуаре</div>
                                    <div className="stat-card__value">{currentTheater.performancesCount}</div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card__info">
                                    <div className="stat-card__label">Возрастной ценз</div>
                                    <div className="stat-card__value">{currentTheater.ageLimit}</div>
                                </div>
                            </div>
                            <div className="theater-slider__to_more_info">
                                <a className="theater-slider__link_to_more"  onClick={handleDetailsClick}>
                                    Узнать подробнее
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};