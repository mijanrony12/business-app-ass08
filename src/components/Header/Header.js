import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    return (
        <>
            {/* showing navigation */}
            <div className="navbar">
                       <div className="logo">
                              <img src={logo} alt="" />
                </div>
                <div className="menu">
                    <a href="/home">Home</a>
                    <a href="/about">About FBCCI</a>
                    <a href="/divison">Divison</a>
                    <a href="/media">Media</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            
            {/* header section */}
            <div className="container header-content">
                        <h1>Federation of Bangladesh Chambers of Commerce and Industries</h1>
                        <p>Heartfelt Congratulations to the H.E Sheikh Hasina, Prime Minister of People’s Republic of Bangladesh for receiving SDG Progress Award from the United Nations.

                    Under the visionary leadership of Hon’ble Prime Minister Sheikh Hasina, Bangladesh attained highest score in SDG</p>
                    <h2>Total Cost:- 50 million (TK)</h2>
            </div>
        </>
    );
};

export default Header;