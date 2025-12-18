import React from "react";
import {MOCK_NEWS} from "../../../Data/MockData.ts";
import {Header} from "../../../widgets/header";
import "./NewsPage.scss"
import {NewsCard} from "../../../shared/ui/newsCard.tsx";


export const NewsPage = () => {
    return (
        <>
            <Header/>
            <div className="content-news">
            <h2 className="section-title">Новости театра</h2>
            <div className="news-grid">
                {MOCK_NEWS.map((news) => (
                    <NewsCard
                    news={news}
                    />
                ))}
            </div>
            </div>
        </>
    )
}