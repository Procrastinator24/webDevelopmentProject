import React from 'react';
import './Header.scss';
import Img from "@/shared/images/logo.jpg"

export const Header: React.FC = () => {
    const navItems = [
        { label: 'Главная', href: '/#' },
        { label: 'Афиша', href: '/#afisha' },
        { label: 'Новости', href: '/#news' },
        { label: 'О театре', href: '/#about' },
    ];

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <img src={Img} alt="Театральный билет" className="logoImg"/>
                    <span className="header__logo-text">Театр Юного Зрителя</span>
                </div>

                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {navItems.map((item) => (
                            <li key={item.label} className="header__nav-item">
                                <a href={item.href} className="header__nav-link">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};