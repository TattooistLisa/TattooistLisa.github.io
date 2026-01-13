import React from 'react';
import './Css/Header.css';
import PaytonImage from '../images/background.jpg';


const Header = () => {
    return (
        <header
            className="header text-white text-center py-5"
            style={{ backgroundImage: `url(${PaytonImage})` }}
        >
            <div className="container">
                <div className="header-content">
                    <h1>Nova Public Health Consulting</h1>
                    <h2>Empowering Healthier Futures, Together</h2>
                    <p>
                        Owned and Operated by Payton Rigert
                    </p>

                </div>
            </div>
        </header>
    );
};

export default Header;
