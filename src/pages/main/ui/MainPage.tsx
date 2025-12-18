import React from 'react';
import { Header } from '@/widgets/header';
import { TheaterSlider } from '@/widgets/slider';
import { AfishaSection } from '@/widgets/afisha';
import { NewsSection } from '@/widgets/news';
import {Footer} from "@/widgets/Footer.tsx";
// import '../';

export const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <Header/>
            <main>
                <TheaterSlider />
                <AfishaSection />
                <NewsSection />
            </main>
            <Footer/>
        </div>
    );
};