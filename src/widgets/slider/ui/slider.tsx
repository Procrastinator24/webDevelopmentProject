import React, { useState } from 'react';
import './slider.scss';
import {useNavigate} from "react-router-dom";

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
        image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
        foundedYear: 1932,
        performancesCount: 45,
        ageLimit: '0+',
        description: 'Ведущий детский театр Татарстана с богатой историей и современными постановками',
    },
    {
        id: 2,
        name: 'Большой театр России',
        image: 'https://images.unsplash.com/photo-1579090821775-5c31b58c3c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
        foundedYear: 1776,
        performancesCount: 120,
        ageLimit: '6+',
        description: 'Один из крупнейших в России и один из самых значительных в мире театров оперы и балета',
    },
    {
        id: 3,
        name: 'Мариинский театр',
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
        foundedYear: 1783,
        performancesCount: 85,
        ageLimit: '12+',
        description: 'Знаменитый оперный и балетный театр в Санкт-Петербурге, один из ведущих музыкальных театров России',
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
                                <div className="stat-card__icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                                              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        <rect x="8" y="12" width="8" height="4" rx="1" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="stat-card__info">
                                    <div className="stat-card__value">{currentTheater.foundedYear}</div>
                                    <div className="stat-card__label">Год основания</div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card__icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21L21 21M19 21H14M5 21L3 21M5 21H10M9 6.5H15M9 10.5H15M9 14.5H12"
                                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="stat-card__info">
                                    <div className="stat-card__value">{currentTheater.performancesCount}</div>
                                    <div className="stat-card__label">Спектаклей в репертуаре</div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card__icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M5 21V19C5 16.2386 7.23858 14 10 14H14C16.7614 14 19 16.2386 19 19V21"
                                              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        <circle cx="18" cy="8" r="2" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div className="stat-card__info">
                                    <div className="stat-card__value">{currentTheater.ageLimit}</div>
                                    <div className="stat-card__label">Возрастной ценз</div>
                                </div>
                            </div>
                        </div>

                        <div className="theater-slider__actions">
                            <button className="theater-slider__details-btn" onClick={handleDetailsClick}>
                                Узнать подробнее
                            </button>
                            <p className="theater-slider__description">
                                {currentTheater.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};