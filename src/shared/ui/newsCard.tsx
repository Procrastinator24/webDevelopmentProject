import React from "react";
import {useNavigate} from "react-router-dom";
import type {NewsItem} from "../../entities/Perfomance/NewsItem.ts";



export const NewsCard: React.FC = ({news}) => {

    const navigate= useNavigate()

    const handleNewsClick = (Id?) =>{
        console.log(Id ? Id : "hahaha")
        return Id ?  navigate(`/news-page/${Id-1}`) : navigate("news-page")
    }
    return (
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
                <a onClick={() => handleNewsClick(news.id)} className="news-card__link">
                    Читать далее →
                </a>
            </div>
        </div>
    )
}