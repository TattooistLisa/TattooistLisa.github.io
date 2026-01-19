import React from 'react';
import './Css/Header.css';
import lisaImage from '../lisaImages/lisa.jpg';


const Header = () => {
    return (
        
        <header
            className="header text-white text-center py-5"
            style={{ backgroundImage: `url(${lisaImage})` }}
        >
            <div className="container">
                <div className="header-content">
                    <h1>LAKEWOOD, WA</h1>
                    <h2>How to Book</h2>
                    <p>
                        Aftercare
                    </p>

                </div>
            </div>
        </header>
    );
};

export default Header;
