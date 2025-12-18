import React, { useState } from "react";
import "./MainMorePage.scss";
import kazanHistoryImg from "@/shared/images/innopolis.jpg";

type TabType = 'history' | 'excursions';

export const MainMorePage = () => {
    const [activeTab, setActiveTab] = useState<TabType>('history');

    const content = {
        history: {
            title: "История Казани",
            text: `Казань — один из древнейших городов России, основанный более 1000 лет назад. 
            Столица Республики Татарстан сочетает в себе богатое историческое наследие и современную 
            динамику развития. Город был важным торговым центром Волжской Булгарии, затем стал столицей 
            Казанского ханства, а в 1552 году был присоединён к Русскому царству.
            
            Сегодня Казань — это крупный культурный, научный и экономический центр, известный 
            своими уникальными архитектурными ансамблями, среди которых Казанский Кремль, 
            включённый в список Всемирного наследия ЮНЕСКО.`,
            image: kazanHistoryImg
        },
        excursions: {
            title: "Экскурсии по Казани",
            text: `Казань предлагает разнообразные экскурсионные программы для всех возрастов и интересов:
            
            • Обзорная экскурсия по историческому центру
            • Ночная иллюминация города
            • Гастрономические туры с дегустацией татарской кухни
            • Посещение Казанского Кремля и мечети Кул-Шариф
            • Прогулка по улице Баумана — местному "Арбату"
            • Экскурсия в Раифский монастырь
            
            Средняя продолжительность экскурсии: 3-4 часа. Рекомендуется бронирование заранее.`,
            image: kazanHistoryImg
        }
    };

    const currentContent = content[activeTab];

    return (
        <div className="main-more-page">
        <main className="main-more-content">
        <div className="theater-slider__stats-section">
            <div className="container">
                <div className="theater-slider__stats-content">
                    <div className="theater-slider__stats-grid">
                        <div className="stat-card">
                            <div className="stat-card__info">
                                <div className="stat-card__value">sad</div>
                                <div className="stat-card__label">Год основания</div>
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-card__info">
                                <div className="stat-card__value">asd</div>
                                <div className="stat-card__label">Спектаклей в репертуаре</div>
                            </div>
                        </div>

                        <div className="stat-card">

                            <div className="stat-card__info">
                                <div className="stat-card__value">asd</div>
                                <div className="stat-card__label">Возрастной ценз</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Блок с контентом и картинкой */}
                <div className="columns-more-info">
                    <div className="container">
                        <div className="columns-more-info__content">
                            {/* Левая колонка - контент */}
                            <div className="content-column">
                                <div className="content-tabs">
                                    <button
                                        className={`tab-btn ${activeTab === 'history' ? 'tab-btn--active' : ''}`}
                                        onClick={() => setActiveTab('history')}
                                    >
                                        История города
                                    </button>
                                    <button
                                        className={`tab-btn ${activeTab === 'excursions' ? 'tab-btn--active' : ''}`}
                                        onClick={() => setActiveTab('excursions')}
                                    >
                                        Экскурсии по городу
                                    </button>
                                </div>

                                <div className="content-body">
                                    <h2 className="content-title">{currentContent.title}</h2>
                                    <div className="content-text">
                                        {currentContent.text.split('\n').map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>

                                    <div className="content-features">
                                        {activeTab === 'history' ? (
                                            <div className="features-list">
                                                <div className="feature-item">
                                                    <span className="feature-icon">🏰</span>
                                                    <span>Казанский Кремль — объект ЮНЕСКО</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">🕌</span>
                                                    <span>Мечеть Кул-Шариф — одна из крупнейших в Европе</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">🎭</span>
                                                    <span>Театр юного зрителя — культурный центр с 1932 года</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="features-list">
                                                <div className="feature-item">
                                                    <span className="feature-icon">🚶</span>
                                                    <span>Пешеходные экскурсии по Старо-Татарской слободе</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">🚤</span>
                                                    <span>Речные прогулки по Волге и Казанке</span>
                                                </div>
                                                <div className="feature-item">
                                                    <span className="feature-icon">🍲</span>
                                                    <span>Гастротуры с дегустацией эчпочмаков и чак-чака</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Правая колонка - картинка */}
                            <div className="image-column">
                                <div className="city-image-container">
                                    <img
                                        src={currentContent.image}
                                        alt={currentContent.title}
                                        className="city-image"
                                    />
                                    <div className="image-overlay">
                                        <span className="overlay-text">
                                            {activeTab === 'history' ? 'Исторический центр' : 'Экскурсионный маршрут'}
                                        </span>
                                    </div>
                                </div>
                                <div className="image-caption">
                                    <p>Казань — город, где встречаются Восток и Запад</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


                {/*/!* Дополнительная информация *!/*/}
                {/*<div className="additional-info">*/}
                {/*    <div className="container">*/}
                {/*        <h2 className="additional-title">Театр в культурной жизни города</h2>*/}
                {/*        <div className="info-grid">*/}
                {/*            <div className="info-card">*/}
                {/*                <h3>Расположение</h3>*/}
                {/*                <p>Театр юного зрителя расположен в историческом центре Казани,*/}
                {/*                    в шаговой доступности от основных достопримечательностей.</p>*/}
                {/*            </div>*/}
                {/*            <div className="info-card">*/}
                {/*                <h3>Транспорт</h3>*/}
                {/*                <p>Ближайшие станции метро: "Кремлёвская" и "Площадь Тукая".*/}
                {/*                    Множество автобусных маршрутов останавливаются рядом с театром.</p>*/}
                {/*            </div>*/}
                {/*            <div className="info-card">*/}
                {/*                <h3>Окрестности</h3>*/}
                {/*                <p>В пешей доступности: Казанский Кремль, набережная реки Казанки,*/}
                {/*                    улица Баумана, многочисленные кафе и рестораны.</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
    </main>

            <footer className="footer">
                <div className="container">
                    <p>© 2023 Театр Юного Зрителя. Все права защищены.</p>
                </div>
            </footer>
</div>
    );
};