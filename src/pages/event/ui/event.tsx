import {Header} from "../../../widgets/header";
import Img from "@/shared/images/marin'sChildhood.jpg";
import React, {useState} from "react";
import "./event.scss"
import type {Performance} from "../../../entities/Perfomance/Perfomance.ts";
import {useNavigate, useParams} from "react-router-dom";
import {MOCK_PERFORMANCES} from "../../../Data/MockData.ts";



export const EventPage = (Performance: Performance) =>{
    const navigate = useNavigate();

    const handleBuyClick = (Id) =>{
        navigate(`/purchase/${Id}`)
    }

    const [activeTab, setActiveTab] = useState<TabType>('history');

    const content = {
        history: {
            text: 'Премьера состоялась 15 апреля 2021 года. ' +
                'По киносценариям фильмов "Иваново детство" и "Зеркало". ' +
                'Иван — это ребёнок, снедаемый страстью взрослого. ' +
                'Он потерял детство на войне и погиб, потому что жил как взрослый. ' +
                'Картина должна строиться на характере мальчика, но должны быть эпизоды, ' +
                'где выясняются его детские черты. В рассказе найдена точная деталь — ' +
                'игра в войну — что может быть страшнее! ' +
                'Здесь все очень глубоко, страшно и правдиво, ' +
                'здесь нет места приключенческой романтике… ' +
                'Иван видит сны. Ему снится та жизнь, которой он лишён, обыкновенное детство. ' +
                'В снах должно быть обыкновенное счастливое детство. В жизни — та страшная нелепость, ' +
                'которая происходит, когда ребёнок вынужден воевать.',
        },
        excursions: {

            text: 'Премьера состоялась 15 апреля 2021 года. ' +
                'По киносценариям фильмов "Иваново детство" и "Зеркало". ' +
                'Иван — это ребёнок, снедаемый страстью взрослого. ' +
                'Он потерял детство на войне и погиб, потому что жил как взрослый. ' +
                'Картина должна строиться на характере мальчика, но должны быть эпизоды, ' +
                'где выясняются его детские черты. В рассказе найдена точная деталь — ' +
                'игра в войну — что может быть страшнее! ' +
                'Здесь все очень глубоко, страшно и правдиво, ' +
                'здесь нет места приключенческой романтике… ' +
                'Иван видит сны. Ему снится та жизнь, которой он лишён, обыкновенное детство. ' +
                'В снах должно быть обыкновенное счастливое детство. В жизни — та страшная нелепость, ' +
                'которая происходит, когда ребёнок вынужден воевать.',
        }
    };

    const currentContent = content[activeTab];


    const { id } = useParams<{ id: string }>();

    // Получаем спектакль по ID из параметра URL
    const performanceId = id ? parseInt(id) : 1;
    const performance = MOCK_PERFORMANCES[id]

    // Если спектакль не найден, показываем первый
    const currentPerformance = performance || MOCK_PERFORMANCES[0];

    if (!currentPerformance) {
        return (
            <div className="event-page">
                <div className="container">
                    <h1>Спектакль не найден</h1>
                    <button onClick={() => navigate('/')}>Вернуться на главную</button>
                </div>
            </div>
        );
    }

    return(
        <>
            <Header/>
            <div className="img-container">
                <img
                    className="img"
                    src={Img}
                />
            </div>
            <div className="theater-slider__stats-section">
                <div className="container">
                    <div className="theater-slider__stats-content">
                        <div className="theater-slider__stats-grid">
                            <div className="stat-card">
                                <div className="stat-card__info">
                                    <div style={{fontSize: "1.4rem", fontWeight: "bold"}}>{performance.title}</div>
                                    <div className="stat-card__label">{performance.description}</div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card__info">
                                    <div className="stat-card__value">Duration</div>
                                    <div style={{fontSize: "1.4rem", fontWeight: "bold"}}>{performance.duration}</div>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-card__info">
                                    <div>Age Limit</div>
                                    <div style={{fontSize: "1.4rem", fontWeight: "bold"}}>{performance.ageLimit}</div>
                                </div>
                            </div>
                            <div className="stat-card">
                                <button className="buy-button" onClick={() => handleBuyClick(performance.id)}>
                                    Купить билет
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-columns">
                <div className="content-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'history' ? 'tab-btn--active' : ''}`}
                        onClick={() => setActiveTab('history')}
                    >
                        О спектакле
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'excursions' ? 'tab-btn--active' : ''}`}
                        onClick={() => setActiveTab('excursions')}
                    >
                        Коллектив
                    </button>
                </div>

                <div className="content-body">
                    <div className="content-text">
                        {currentContent.text.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}