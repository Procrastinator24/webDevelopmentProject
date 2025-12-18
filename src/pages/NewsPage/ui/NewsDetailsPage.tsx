import {useNavigate, useParams} from "react-router-dom";
import {MOCK_NEWS} from "../../../Data/MockData.ts";
import React from "react";
import {Header} from "../../../widgets/header";
import "./NewsPage.scss"
import {Footer} from "../../../widgets/Footer.tsx";



export const NewsDetailsPage = () => {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Получаем спектакль по ID из параметра URL
    const newsID = id ? parseInt(id) : 1;
    const newsItem = MOCK_NEWS[id]

    // Если спектакль не найден, показываем первый
    const currentPerformance = performance || MOCK_NEWS[0];

    if (!currentPerformance) {
        return (
            <div className="event-page">
                <div className="container">
                    <h1>Новость не найдена</h1>
                    <button onClick={() => navigate('/')}>Вернуться на главную</button>
                </div>
            </div>
        );
    }
    return (
        <>
            <Header/>
            <div className="news-img-container">
                <img
                    className="news-img"
                    src={newsItem.image}
                />
            </div>
            <div className="news-content-body">
                <label className="news-date">{newsItem.date}</label>
                <h1 className="news-title">
                    {newsItem.title}
                </h1>
                <label>{newsItem.description}</label>
            </div>
            <Footer/>
        </>
    )
}