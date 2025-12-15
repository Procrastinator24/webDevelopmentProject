import React from 'react';
import { Header } from '@/widgets/header';
import { TheaterSlider } from '@/widgets/slider';
import { AfishaSection } from '@/widgets/afisha';
import { NewsSection } from '@/widgets/news';
// import '../';

export const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <Header />
            <main>
                <TheaterSlider />
                <AfishaSection />
                <NewsSection />
            </main>
            <footer className="footer">
                <div className="container">
                    <p>© 2023 Театр Юного Зрителя. Все права защищены.</p>
                </div>
            </footer>
        </div>
    );
};