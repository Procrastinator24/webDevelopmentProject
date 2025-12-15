import React from 'react';
import './news.scss';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
}

const MOCK_NEWS: NewsItem[] = [
    {
        id: 1,
        title: 'Новый сезон открыт!',
        description: 'Театр начинает новый сезон с премьеры спектакля "Щелкунчик"',
        image: '/news-1.jpg',
        date: '10 дек 2023',
    },
    {
        id: 2,
        title: 'Мастер-класс для детей',
        description: 'Приглашаем детей на мастер-класс по актерскому мастерству',
        image: '/news-2.jpg',
        date: '5 дек 2023',
    },
    // Добавьте больше новостей
];

export const NewsSection: React.FC = () => {
    return (
        <section className="news-section">
            <div className="container">
                <div className="news-section__header">
                    <h2 className="section-title">Новости театра</h2>
                    <button className="news-section__all-btn">
                        Показать все
                    </button>
                </div>

                <div className="news-grid">
                    {MOCK_NEWS.map((news) => (
                        <div key={news.id} className="news-card">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="news-card__image"
                            />

                            <div className="news-card__content">
                                <span className="news-card__date">{news.date}</span>
                                <h3 className="news-card__title">{news.title}</h3>
                                <p className="news-card__description">
                                    {news.description}
                                </p>
                                <a href="#" className="news-card__link">
                                    Читать далее →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};