import React from 'react';
import './afisha.scss';
//import {Performance} from '@/entities/Perfomance'
import {Performance} from '../../../entities/Perfomance/Perfomance.ts'
import IvanImg from "@/shared/images/marin'sChildhood.jpg";
import {MOCK_PERFORMANCES} from "../../../Data/MockData.ts";
import {useNavigate} from "react-router-dom";





export const AfishaSection: React.FC = () => {

    const navigate = useNavigate()
    const handleBuyClick = (Id) => {
        navigate(`/event/${Id-1}`);
    }

    return (
        <section id="afisha" className="afisha-section">
        <div className="container">
        <h2 className="section-title">Афиша</h2>

            <div className="afisha-grid">
                {MOCK_PERFORMANCES.map((performance) => (
                    <div
                        key={performance.id}
                        className="performance-card"
                        onClick={() => handleBuyClick(performance.id)} // Весь клик по карточке
                        style={{
                            backgroundImage: `url(${performance.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {/* Затемнение для лучшей читаемости текста */}
                        <div className="performance-card__overlay"></div>

                        {/* Чипсы в левом верхнем углу */}
                        <div className="performance-card__chips">
                            <span className="chip chip--date">{performance.date}</span>
                            <span className="chip chip--age">{performance.ageLimit}</span>
                        </div>

                        {/* Контент внизу карточки */}
                        <div className="performance-card__content">
                            <h3 className="performance-card__title">{performance.title}</h3>
                            <p className="performance-card__description">
                                {performance.description}
                            </p>
                            <div className="performance-card__footer">
                                <span className="performance-card__duration">{performance.duration}</span>

                            </div>
                        </div>
                    </div>
                ))}
    </div>

    <div className="info-buttons">
    <button className="info-btn">Правила поведения</button>
    <button className="info-btn">Панорама зала</button>
    <button className="info-btn">История театра</button>
    <button className="info-btn">Коллектив театра</button>
    </div>
    </div>
    </section>
);
};