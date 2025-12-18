import React from 'react';
import './news.scss';
import {MOCK_NEWS} from "../../../Data/MockData.ts";
import {useNavigate} from "react-router-dom";
import {NewsCard} from "../../../shared/ui/newsCard.tsx";





export const NewsSection: React.FC = () => {
    const navigate= useNavigate()

    const handleNewsClick = (Id?) =>{
        console.log(Id ? Id : "hahaha")
        return Id ?  navigate(`news-page/${Id-1}`) : navigate("news-page")
    }

    return (
        <section id="news" className="news-section">
            <div className="container">
                <div className="news-section__header">
                    <h2 className="section-title">Новости театра</h2>
                    <button onClick={() => handleNewsClick()} className="news-section__all-btn">
                        Показать все
                    </button>
                </div>

                <div className="news-grid">
                    {MOCK_NEWS.slice(0, 2).map((news) => (
                        <NewsCard
                            news={news}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};