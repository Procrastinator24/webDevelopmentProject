import React from 'react';
import './afisha.scss';

interface Performance {
    id: number;
    title: string;
    date: string;
    ageLimit: string;
    description: string;
    image: string;
}

const MOCK_PERFORMANCES: Performance[] = [
    {
        id: 1,
        title: 'Щелкунчик',
        date: '15 дек, 19:00',
        ageLimit: '6+',
        description: 'Волшебная рождественская сказка',
        image: '/performance-1.jpg',
    },
    {
        id: 2,
        title: 'Ревизор',
        date: '20 дек, 18:00',
        ageLimit: '12+',
        description: 'Классическая комедия',
        image: '/performance-2.jpg',
    },
    // Добавьте больше моковых данных
];

export const AfishaSection: React.FC = () => {
    return (
        <section className="afisha-section">
        <div className="container">
        <h2 className="section-title">Афиша</h2>

            <div className="afisha-grid">
        {MOCK_PERFORMANCES.map((performance) => (
                <div key={performance.id} className="performance-card">
            <div className="performance-card__chips">
            <span className="chip chip--date">{performance.date}</span>
                <span className="chip chip--age">{performance.ageLimit}</span>
            </div>

            <div className="performance-card__content">
            <h3 className="performance-card__title">{performance.title}</h3>
                <p className="performance-card__description">
            {performance.description}
            </p>
            <button className="performance-card__btn">
            Купить билет
                </button>
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